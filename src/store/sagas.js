import {takeEvery, put, call} from 'redux-saga/effects'
import {REQUEST_POSTS, FETCH_POSTS} from './types'
import axios from 'axios'
import {hideLoader, showLoader} from './actions'

export function* sagaWatcher(){
    yield takeEvery(REQUEST_POSTS, sagaWorker)
}

function* sagaWorker(){
    try {
        yield put(showLoader())
        const payload = yield call(fetchPosts)
        yield put({ type: FETCH_POSTS, payload })
        yield put(hideLoader())
    } catch (e) {
        yield put(hideLoader())
    }
}

async function fetchPosts(){
    const data = await axios.get('https://rickandmortyapi.com/api/character/?page=1')
    console.log(Object.values(data.data.results).map(v => Object.values(v)));
    return Object.values(data.data.results).map(v => Object.values(v))
}