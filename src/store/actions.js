
import { REQUEST_POSTS, HIDE_LOADER, SHOW_LOADER } from "./types"

export function fetchPosts(){
    return {
        type: REQUEST_POSTS
    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}