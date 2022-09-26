import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { articleReducerPath, articleReducer, articleMiddleware } from '../services/articleService'

const rootReducer = combineReducers({
  [articleReducerPath]: articleReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleMiddleware),
  })
}
