import { takeEvery, put, call } from "redux-saga/effects";
import {
  REQUEST_LIST_ITEMS,
  FETCH_LIST_ITEMS,
  FETCH_CHARACTER_INFO,
  REQUEST_CHARACTER_INFO,
} from "../types/types";
import axios from "axios";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_LIST_ITEMS, sagaListWorker);
  yield takeEvery(REQUEST_CHARACTER_INFO, sagaCharacterWorker);
}

function* sagaListWorker(action) {
  let url = action.payload;
  try {
    const payload = yield call(fetchListItems, url);
    yield put({ type: FETCH_LIST_ITEMS, payload });
  } catch (e) {
    console.log(e);
  }
}

function* sagaCharacterWorker(action) {
  let url = action.payload;
  try {
    const payload = yield call(fetchListItems, url);
    yield put({ type: FETCH_CHARACTER_INFO, payload });
  } catch (e) {
    console.log(e);
  }
}

async function fetchListItems(url) {
  const response = await axios.get(url);
  return response;
}
