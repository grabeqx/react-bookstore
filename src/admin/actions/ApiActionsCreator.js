import API_CONSTANTS from '../constants/ApiConstants';

export function getProducts() {
    return {
        type: API_CONSTANTS.GET_PRODUCTS
    }
}
export function getBook(id) {
    return {
        type: API_CONSTANTS.GET_BOOK,
        payload: id
    }
}