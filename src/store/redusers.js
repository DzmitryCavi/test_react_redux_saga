

import {combineReducers} from 'redux'
import {postReduser} from './postReduser'
import { appReducer } from './appReducer'

export const Redusers = combineReducers({
    posts: postReduser,
    app: appReducer
})