import { useLocation, useNavigate } from "react-router"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from "query-string"
import { getHeroesByName } from "../helpers"

export const SearchPage = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const { q = ''} = queryString.parse( location.search )
  const heroes = getHeroesByName( q )

  const showSearch = (q.length === 0)
  const showError = (q !== '' && heroes.length === 0)

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = ( event ) => {
    event.preventDefault()
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
        <h1>SearchPage</h1>
        <hr />


        <div className="row">
          <div className="col-5">
            <h4>Buscando</h4>
            <hr />
            
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Search a hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange= { onInputChange } />
            </form>

            <button onClick={ onSearchSubmit } className="btn btn-outline-primary mt-2">
              Buscar
            </button>
          </div>

          <div className="col-7">
            <h4>Resultados</h4>
            <hr />

            <div className='alert alert-primary animate__animated animate__fadeIn' 
              style={{ display: showSearch ? '' : 'none'}}>
              Buscar un heroe
            </div>

            <div className='alert alert-danger animate__animated animate__fadeIn' 
              style={{ display: showError ? '' : 'none'}}>
              No hay resultados para <b> {q} </b>
            </div>

            {
              heroes.map( heroe => (
                <HeroCard key={heroe.id} {...heroe}/>
              ))
            }
            

          </div>
        </div>
    </>
  )
}
