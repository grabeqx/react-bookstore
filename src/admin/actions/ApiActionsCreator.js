import API_CONSTANTS from '../constants/ApiConstants';

export function getBooks() {
    return {
        type: API_CONSTANTS.GET_BOOKS,
        payload: "books"
    }
}
export function getBook(id) {
    return {
        type: API_CONSTANTS.GET_BOOK,
        payload: {
            id,
            type: "books"
        }
    }
}
export function getCategories() {
    return {
        type: API_CONSTANTS.GET_CATEGORIES,
        payload: "categories"
    }
}
export function getCategory(id) {
    return {
        type: API_CONSTANTS.GET_CATEGORY,
        payload: {
            id,
            type: "categories"
        }
    }
}
export function getAuthors() {
    return {
        type: API_CONSTANTS.GET_AUTHORS,
        payload: "authors"
    }
}
export function getAuthor(id) {
    return {
        type: API_CONSTANTS.GET_AUTHOR,
        payload: {
            id,
            type: "authors"
        }
    }
}
export function save(data, dataType) {
    return {
        type: API_CONSTANTS.SAVE,
        payload: {
            data,
            dataType
        }
    }
}
export function deleteData(id, dataType) {
    return {
        type: API_CONSTANTS.DELETE,
        payload: {
            id,
            dataType
        }
    }
}