import { call, put, takeLatest } from 'redux-saga/effects';

import API_CONSTANTS from '../constants/ApiConstants'
import BookApi from '../actions/BookApi';

function* getProducts() {
    const products = yield call(BookApi.getProducts);
    yield put({type: API_CONSTANTS.GET_PRODUCTS_SUCCESS, payload: products})
}

function* adminSaga() {
    yield takeLatest(API_CONSTANTS.GET_PRODUCTS, getProducts);
}

export default adminSaga;