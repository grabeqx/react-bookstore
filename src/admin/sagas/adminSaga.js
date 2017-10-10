import { call, put, takeLatest } from 'redux-saga/effects';

import API_CONSTANTS from '../constants/ApiConstants'
import BookApi from '../actions/BookApi';

function* getProducts() {
    try {
        const products = yield call(BookApi.getProducts);
        yield put({type: API_CONSTANTS.GET_PRODUCTS_SUCCESS, payload: products})
    } catch(e) {
        yield put({type: API_CONSTANTS.GET_PRODUCTS_FAIL, payload: e.message})
    }
}

function* adminSaga() {
    yield takeLatest(API_CONSTANTS.GET_PRODUCTS, getProducts);
}

export default adminSaga;