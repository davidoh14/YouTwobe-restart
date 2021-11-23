export const fetchLikes = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/likes'
    })
};

export const createLike = (like) => {
    return $.ajax({
        method: 'POST',
        url: '/api/likes',
        data: {like}
    })
}

export const updateLike = (like) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/likes/${like.id}`,
        data: {like}
    })
}

export const deleteLike = (likeId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/likes/${likeId}`
    })
}