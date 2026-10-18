import { Nav } from '../components/landing/Nav'
import { Hero } from '../components/landing/Hero'
import { Problem } from '../components/landing/Problem'
import { Solutions } from '../components/landing/Solutions'
import { Stats } from '../components/landing/Stats'
import { Flow } from '../components/landing/Flow'
import { Capabilities } from '../components/landing/Capabilities'
import { Scenarios } from '../components/landing/Scenarios'
import { Demo } from '../components/landing/Demo'
import { Audience } from '../components/landing/Audience'
import { Status } from '../components/landing/Status'
import { Faq } from '../components/landing/Faq'
import { Footer } from '../components/landing/Footer'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Problem />
      <Solutions />
      <Stats />
      <Flow />
      <Capabilities />
      <Scenarios />
      <Demo />
      <Audience />
      <Status />
      <Faq />
      <Footer />
    </main>
  )
}
