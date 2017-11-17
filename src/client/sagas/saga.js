import { put, call, takeLatest } from 'redux-saga/effects';

import apiActions from '../actions/api.actions';
import ACTIONS from '../constants/api.actions';

function *getBooks() {
    const books = yield call(apiActions.getBooks);
    yield put({type: ACTIONS.GET_BOOKS_SUCCESS, payload: books});
}

function *apiSaga() {
    yield takeLatest(ACTIONS.GET_BOOKS, getBooks);
}

export default apiSaga;