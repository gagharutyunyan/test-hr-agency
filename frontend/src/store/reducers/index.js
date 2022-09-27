import { combineReducers } from '@reduxjs/toolkit'
import { articleReducerPath, articleReducer } from './article'
import { commentsReducer, commentsReducerPath } from './comments'

export const rootReducer = combineReducers({
  [articleReducerPath]: articleReducer,
  [commentsReducerPath]: commentsReducer,
})
