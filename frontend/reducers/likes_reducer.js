import { RECEIVE_LIKE, REMOVE_LIKE } from "../actions/like_actions";

const likesReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_LIKE:
            return action.like;
        case REMOVE_LIKE:
            delete newState[action.likeId];
            return newState;
        
        default: 
            return state;
    }
};

export default likesReducer;