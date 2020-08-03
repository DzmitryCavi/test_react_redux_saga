import {
  REQUEST_LIST_ITEMS,
  NO_MORE_ITEMS,
  REQUEST_CHARACTER_INFO,
} from "../types/types";

export function fetchListItems(url) {
  return {
    type: REQUEST_LIST_ITEMS,
    payload: url,
  };
}

export function noMoreItems() {
  return {
    type: NO_MORE_ITEMS,
  };
}

export function fetchCharacterData(url) {
  return {
    type: REQUEST_CHARACTER_INFO,
    payload: url,
  };
}
