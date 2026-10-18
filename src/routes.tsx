import { createBrowserRouter, Outlet, ScrollRestoration } from 'react-router'
import Home from './pages/Home'
import SolutionsIndex from './pages/solusi/SolutionsIndex'
import SolutionDetail from './pages/solusi/SolutionDetail'
import HowItWorks from './pages/HowItWorks'
import About from './pages/About'
import Placeholder from './pages/Placeholder'

function Root() {
  return (
    <>
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
])
