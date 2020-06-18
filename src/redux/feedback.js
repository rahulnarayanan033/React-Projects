import * as ActionTypes from './ActionTypes';

export const Feedback = (state = {
    feed : []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            return {...state , feed : action.payload};
        default:
            console.log(state);
            return state;
    }
}