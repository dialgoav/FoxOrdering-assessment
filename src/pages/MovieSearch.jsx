import { useEffect, useState, useRef, useCallback} from 'react'
import debounce from 'just-debounce-it'
import { useMovies } from '../hooks/useMovies'
import { Movies } from '../components/Movies'

function useSearch(){
  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect( () => {

    if (isFirstInput.current){
      isFirstInput.current = search === ''
      return
    }

    if (search === ''){
      setError('No se ha indicado el nombre de una película')
      return
    }

    setError(null)
  }, [search])

  return {search, updateSearch, error}
}

function MovieSearcher() {
const [sort, setSort]= useState(false)
const {search, updateSearch, error} = useSearch()
const {movies, getMovies, loading} = useMovies({search, sort})

const debauncedGetMovies = useCallback(
  debounce(search => {
    getMovies({updateSearch})
  }, 300)
  , [getMovies]
)

const handleSubmit = (event) => {
  event.preventDefault()
  getMovies({search})
}

const handleChange = (event) => {
  const newSearch = event.target.value
  updateSearch(newSearch)
  debauncedGetMovies(newSearch)
}

const handleSort = () => {
  setSort(!sort)
}

  return (
    <>
      <div className="movies">

        <header>
          <h1>Movies App</h1>
          <form className="movies__form" onSubmit={handleSubmit}>
            <input onChange={handleChange} value={search} name="query" placeholder='Harry Potter, Avengers, Star Wars...'/>
            <input type="checkbox" onChange={handleSort} checked={sort} />
            <button type="submit">Buscar</button>
          </form>
          {error && <p style={{color:'red'}}>{error} </p> }
        </header>

        <main>
          {loading ? <p>Cargando...</p> : <Movies movies={movies} />}
        </main>
      </div>
    </>
  )
}

export default MovieSearcher