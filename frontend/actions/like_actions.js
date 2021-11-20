import { createLike, updateLike, deleteLike } from "../util/like_api_util";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = (like) => {
    return {
        type: RECEIVE_LIKE,
        like
    }
}

const removeLike = (likeId) => {
    return {
        type: REMOVE_LIKE,
        likeId
    }
};

export const createLike = (like) => (dispatch) => {
    return createLike(like).then((like) => 
        dispatch(receiveLike(like)))
};

export const updateLike = (like) => (dispatch) => {
    return updateLike(like).then((like) => 
        dispatch(receiveLike(like)))
};

export const deleteLike = (likeId) => (dispatch) => {
    return deleteLike(likeId).then(() => 
        dispatch(removeLike(likeId)))
};