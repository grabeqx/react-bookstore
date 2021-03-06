import { call, put, takeLatest } from 'redux-saga/effects';

import API_CONSTANTS from '../constants/ApiConstants'
import BookApi from '../actions/BookApi';

function* getBooks(action) {
    try {
        const products = yield call(BookApi.getDataList, action.payload);
        yield put({type: API_CONSTANTS.GET_BOOKS_SUCCESS, payload: products})
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_BOOKS_FAIL, payload: {type: 'negative', message: e.message}})
    }
}

function* getBook(action) {
    try {
        const book = yield call(BookApi.getData, action.payload);
        yield put({type: API_CONSTANTS.GET_BOOK_SUCCESS, payload: book});
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_BOOK_FAIL, payload: {type: 'negative', message: e.message}});
    }
}

function* getCategories(action) {
    try {
        const categories = yield call(BookApi.getDataList, action.payload);
        yield put({type: API_CONSTANTS.GET_CATEGORIES_SUCCESS, payload: categories})
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_CATEGORIES_FAIL, payload: {type: 'negative', message: e.message}})
    }
}

function* getCategory(action) {
    try {
        const category = yield call(BookApi.getData, action.payload);
        yield put({type: API_CONSTANTS.GET_CATEGORY_SUCCESS, payload: category});
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_CATEGORY_FAIL, payload: {type: 'negative', message: e.message}});
    }
}

function* getAuthors(action) {
    try {
        const authors = yield call(BookApi.getDataList, action.payload);
        yield put({type: API_CONSTANTS.GET_AUTHORS_SUCCESS, payload: authors})
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_AUTHORS_FAIL, payload: {type: 'negative', message: e.message}})
    }
}

function* getAuthor(action) {
    try {
        const author = yield call(BookApi.getData, action.payload);
        yield put({type: API_CONSTANTS.GET_AUTHOR_SUCCESS, payload: author});
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_AUTHOR_FAIL, payload: {type: 'negative', message: e.message}});
    }
}

function* save(action) {
    try {
        const info = yield call(BookApi[action.payload.dataType], action.payload.data);
        yield put({type: API_CONSTANTS.SAVE_SUCCESS, payload: {type: 'positive', message: info}});
    } catch(e) {
        yield put({type: API_CONSTANTS.SAVE_FAIL, payload: {type: 'negative', message: e.message}});
    }
}

function* deleteData(action) {
    try {
        const info = yield call(BookApi[action.payload.dataType], action.payload.id);
        yield put({type: API_CONSTANTS.DELETE_SUCCESS, payload: {type: 'positive', message: info.text, dataType: info.dataType, id: action.payload.id }});
    } catch(e) {
        yield put({type: API_CONSTANTS.DELETE_FAIL, payload: {type: 'negative', message: e.message}});
    }
}


function* adminSaga() {
    yield takeLatest(API_CONSTANTS.GET_BOOKS, getBooks);
    yield takeLatest(API_CONSTANTS.GET_BOOK, getBook);
    yield takeLatest(API_CONSTANTS.GET_CATEGORIES, getCategories);
    yield takeLatest(API_CONSTANTS.GET_CATEGORY, getCategory);
    yield takeLatest(API_CONSTANTS.GET_AUTHORS, getAuthors);
    yield takeLatest(API_CONSTANTS.GET_AUTHOR, getAuthor);
    yield takeLatest(API_CONSTANTS.SAVE, save);
    yield takeLatest(API_CONSTANTS.DELETE, deleteData);
}

export default adminSaga;