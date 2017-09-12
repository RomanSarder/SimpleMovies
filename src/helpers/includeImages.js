export default function (movies) {
    return {
        ...movies,
        results: movies.results.map(movie => {
            return {
                ...movie,
                posterPath: "http://image.tmdb.org/t/p/w500" + movie.posterPath
            }
        })
    }
}