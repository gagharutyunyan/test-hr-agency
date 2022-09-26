import { combineReducers } from '@reduxjs/toolkit'
import { articleReducerPath, articleReducer } from './article'

export const rootReducer = combineReducers({
  [articleReducerPath]: articleReducer,
})
