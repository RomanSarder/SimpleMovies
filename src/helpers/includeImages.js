export default function (movies, config) {
    return {
        ...movies,
        display: movies.display.map(movie => {
            return {
                ...movie,
                poster_path: movie.poster_path !== null ? concatImgUrl(config, movie) : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK_gbVrQ_tesypYBm_FlGt_NTN6nauEnpw0UkeBe7UwbeKEOsx"
            }
        })
    }
}

const concatImgUrl = (config, movie) => {
    return config.images.base_url + config.images.logo_sizes[5] + movie.poster_path;
}