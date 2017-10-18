import ADMIN_CONSTANTS from '../constants/AdminConstants';

export const removeMessage = function(index) {
    return {
        type: ADMIN_CONSTANTS.REMOVE_MESSAGE,
        payload: index
    }
}