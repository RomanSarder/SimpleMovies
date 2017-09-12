export default function (movies, config) {
    return {
        ...movies,
        results: movies.results.map(movie => {
            return {
                ...movie,
                poster_path: `${config.images.base_url}${config.images.logo_sizes[5]}${movie.poster_path}`
            }
        })
    }
}