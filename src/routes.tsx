import { useEffect, useRef } from 'react'
import { createBrowserRouter, Outlet, ScrollRestoration, useLocation } from 'react-router'
import Home from './pages/Home'
import SolutionsIndex from './pages/solusi/SolutionsIndex'
import SolutionDetail from './pages/solusi/SolutionDetail'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import Placeholder from './pages/Placeholder'

function Root() {
  const { pathname } = useLocation()
  const scrollProgressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const progress = scrollProgressRef.current
    if (!progress) return

    let frame = 0
    const updateProgress = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
        const progressRatio = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
        progress.style.transform = `scaleX(${Math.max(0, Math.min(progressRatio, 1))})`
      })
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-revealed')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.06 },
    )

    const groups = document.querySelectorAll<HTMLElement>('main > section, main > ol')
    const targets = new Set<HTMLElement>()

    groups.forEach((group) => {
      if (group.tagName === 'OL') {
        group.querySelectorAll<HTMLElement>(':scope > li').forEach((item) => targets.add(item))
        return
      }

      const content = group.matches('.mx-auto') ? group : group.querySelector<HTMLElement>(':scope > .mx-auto') ?? group
      const candidates = Array.from(content.children).filter((child): child is HTMLElement => child instanceof HTMLElement)

      candidates.forEach((candidate) => {
        if (candidate.classList.contains('grid') || candidate.tagName === 'UL' || candidate.tagName === 'OL') {
          Array.from(candidate.children).forEach((child) => {
            if (child instanceof HTMLElement) targets.add(child)
          })
        } else {
          targets.add(candidate)
        }
      })
    })

    const variants = ['up', 'left', 'right', 'zoom'] as const
    groups.forEach((group) => {
      const groupTargets = Array.from(targets).filter((target) => group.contains(target))
      groupTargets.forEach((target, index) => {
        const style = getComputedStyle(target)
        if (
          style.display === 'none' ||
          style.position === 'absolute' ||
          style.position === 'fixed' ||
          target.getBoundingClientRect().top < window.innerHeight * 0.9
        ) return
        target.dataset.scrollReveal = variants[index % variants.length]
        target.style.setProperty('--scroll-reveal-delay', `${Math.min(index, 5) * 110}ms`)
        observer.observe(target)
      })
    })

    return () => {
      observer.disconnect()
      targets.forEach((target) => {
        delete target.dataset.scrollReveal
        target.classList.remove('is-revealed')
        target.style.removeProperty('--scroll-reveal-delay')
      })
    }
  }, [pathname])

  return (
    <>
      <div
        ref={scrollProgressRef}
        aria-hidden="true"
        className="scroll-progress pointer-events-none fixed inset-x-0 top-0 z-[100] h-1 origin-left scale-x-0 bg-lime"
      />
      <Outlet />
      <ScrollRestoration />
    </>
  )
}

export const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      { path: '/', Component: Home },
      { path: '/solusi', Component: SolutionsIndex },
      { path: '/solusi/:key', Component: SolutionDetail },
      { path: '/cara-kerja', Component: HowItWorks },
      { path: '/fitur', element: <Placeholder page="fitur" /> },
      { path: '/tentang-kami', Component: About },
      { path: '/kontak', element: <Placeholder page="kontak" /> },
      { path: '/minta-demo', element: <Placeholder page="minta-demo" /> },
      { path: '*', Component: Home },
    ],
  },
], {
  basename: import.meta.env.BASE_URL,
})
