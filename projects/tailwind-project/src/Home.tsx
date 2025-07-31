import { About } from './components/About'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import './styles.css'

function Home() {


  return (
    <div className=''>
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default Home
