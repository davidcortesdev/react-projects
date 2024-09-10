import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'daviidcl',
    name: 'David Cortés',
    isfollowing: true
  },
  {
    userName: 'pheralb',
    name: 'Ruben Cortés',
    isfollowing: false
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel',
    isfollowing: false
  },
  {
    userName: 'KingsLeagueInfo',
    name: 'Kings League',
    isfollowing: true
  }
]

export function App () {
  return (
    <section className="App">
      {
        users.map(({userName, name, isfollowing}) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              name={name}
              initialIsFollowing={isfollowing}></TwitterFollowCard>
        ))
      }
    </section>
  )
}