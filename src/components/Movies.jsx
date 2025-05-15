
export function ListOfMovies({movies}) {

    return (
        <ul className="movies__catalog">
        {
            movies.map(movie => (
            <li className="movies__catalog__list" key={movie.id} >
                <h3>{movie.title} </h3>
                <p>{movie.year} </p>
                <img src={movie.poster} alt={movie.title} />
            </li>
        
            ))
        }
        </ul>
    )
}

export function NoMoviesResult () {

    return (
        <p>Ingrese el nombre de la película que desea buscar</p>
    )
}

export function Movies ({movies}) {

    const hasMovies = movies?.length >0

    return (
        hasMovies 
        ? <ListOfMovies movies={movies}/>
        : <NoMoviesResult/>  
    )
}
