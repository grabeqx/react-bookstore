import { call, put, takeLatest } from 'redux-saga/effects';

import API_CONSTANTS from '../constants/ApiConstants'
import BookApi from '../actions/BookApi';

function* getBooks(action) {
    try {
        const products = yield call(BookApi.getDataList, action.payload);
        yield put({type: API_CONSTANTS.GET_BOOKS_SUCCESS, payload: products})
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_BOOKS_FAIL, payload: e.message})
    }
}

function* getBook(action) {
    try {
        const book = yield call(BookApi.getData, action.payload);
        yield put({type: API_CONSTANTS.GET_BOOK_SUCCESS, payload: book});
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_BOOK_FAIL, payload: e.message});
    }
}

function* getCategories(action) {
    try {
        const categories = yield call(BookApi.getDataList, action.payload);
        yield put({type: API_CONSTANTS.GET_CATEGORIES_SUCCESS, payload: categories})
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_CATEGORIES_FAIL, payload: e.message})
    }
}

function* getCategory(action) {
    try {
        const category = yield call(BookApi.getData, action.payload);
        yield put({type: API_CONSTANTS.GET_CATEGORY_SUCCESS, payload: category});
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_CATEGORY_FAIL, payload: e.message});
    }
}

function* getAuthors(action) {
    try {
        const authors = yield call(BookApi.getDataList, action.payload);
        yield put({type: API_CONSTANTS.GET_AUTHORS_SUCCESS, payload: authors})
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_AUTHORS_FAIL, payload: e.message})
    }
}

function* getAuthor(action) {
    try {
        const author = yield call(BookApi.getData, action.payload);
        yield put({type: API_CONSTANTS.GET_AUTHOR_SUCCESS, payload: author});
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_AUTHOR_FAIL, payload: e.message});
    }
}

function* adminSaga() {
    yield takeLatest(API_CONSTANTS.GET_BOOKS, getBooks);
    yield takeLatest(API_CONSTANTS.GET_BOOK, getBook);
    yield takeLatest(API_CONSTANTS.GET_CATEGORIES, getCategories);
    yield takeLatest(API_CONSTANTS.GET_CATEGORY, getCategory);
    yield takeLatest(API_CONSTANTS.GET_AUTHORS, getAuthors);
    yield takeLatest(API_CONSTANTS.GET_AUTHOR, getAuthor);
}

export default adminSaga;