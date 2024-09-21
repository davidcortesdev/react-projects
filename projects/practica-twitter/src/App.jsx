import './App.css'
import { TwitterCard } from './components/TwitterCard'

function App() {

  return (
    <main>
      <TwitterCard initialIsFollowing={true} userName='David Cortés' profileName='daviidcl11' />
      <TwitterCard initialIsFollowing={false} userName='Pedro Porras Santos' profileName='pedrosantos' />
      <TwitterCard initialIsFollowing={true} userName='Ruben Alava Benítez' profileName='rubencl' />
    </main>
  )
}

export default App
