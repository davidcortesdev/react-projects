import { useState } from "react"

export function TwitterCard ({ userName, profileName, initialIsFollowing }) {

  const [isFollowing, setFollowing] = useState(initialIsFollowing)
  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const img = `https://unavatar.io/${profileName}`

  const classButton = isFollowing ? 'button-twitter-siguiendo' : 'button-twitter'

  const handleClick = () => {
    setFollowing(!isFollowing)
  }

  return (
    <section className='container'>
      <div className='tarjeta-twitter'>
        <img className='imagen-twitter' src={img} alt="" />
        <div className="info-twitter">
          <p className='nombre-usuario'>{userName}</p>
          <p className='perfil-usuario'>@{profileName}</p>
        </div>
        <aside>
        <button onClick={handleClick} className={classButton}>
          <span className='button-twitter-text'>{text}</span>
          <span className='button-twitter-dejarseguir'>Dejar de seguir</span>
        </button>
        </aside>
      </div>
    </section>
  )
}