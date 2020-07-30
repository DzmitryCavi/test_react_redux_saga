import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_POSTS, FETCH_POSTS } from "./types";
import axios from "axios";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker(action) {
  let url = action.payload;
  try {
    const payload = yield call(fetchPosts, url);
    yield put({ type: FETCH_POSTS, payload });
  } catch (e) {
    console.log(e);
  }
}

async function fetchPosts(url) {
  const response = await axios.get(url);
  return response;
}
