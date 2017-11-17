import ACTIONS from '../constants/api.actions';

export const getBooks = function() {
    return {
        type: ACTIONS.GET_BOOKS
    }
}