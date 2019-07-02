export const getGenres = () => {
    return $.ajax({
        url: '/api/genres',
        method: 'GET'
    })
}

export const getGenre = genreId => {
    return $.ajax({
        url: `/api/genres/${genreId}`,
        method: 'GET'
    })
}