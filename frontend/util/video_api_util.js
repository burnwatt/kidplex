export const getVideos = () => {
    return $.ajax({
        url: '/api/videos',
        method: 'GET'
    })
}

export const getVideo = videoId => {
    return $.ajax({
        url: `/api/videos/${videoId}`,
        method: 'GET'
    })
}


