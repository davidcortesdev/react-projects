import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export const HeroCard = ({ id, superheroe, alter_ego, first_appearance, characters }) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`
    
    const CharactersByHero = ({characters, alter_ego}) => {
        return (alter_ego === characters)
            ? <></>
            : <p> { characters } </p>

    }

  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card">
            <div className='row no-gutter'>
                <div className='col-4'>
                    <img src={heroImageUrl} className='card-img' alt={ superheroe }/>
                </div>

                <div className="col-8">
                    <div className="card-body">
                        
                        <h5 className='card-title'> {superheroe} </h5>
                        
                        <p className='card-text'> {alter_ego} </p>
                        
                        <CharactersByHero characters={characters} alter_ego={alter_ego}/>
                        
                        <p className='card-text'>
                            <small className='text-muted'> {first_appearance} </small>
                        </p>

                        <Link to={`/hero/${ id }`}>
                            Mas...
                        </Link>
                        
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
{            /* <h1>{ superheroe }</h1>
                <div>Publisher: { publisher } </div>
                <div>Alter Ego: { alter_ego } </div>
                <div>First Appearance: { first_appearance } </div>
                <div>Characters: { characters } </div> */}
HeroCard.propTypes = {
    id: PropTypes.string,
    superheroe: PropTypes.string,
    publisher: PropTypes.string,
    alter_ego: PropTypes.string,
    first_appearance: PropTypes.string,
    characters: PropTypes.string,
}