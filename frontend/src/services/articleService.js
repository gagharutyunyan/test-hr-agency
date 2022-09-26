import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'
import { baseUrl } from '../utils/consts'

export const articleApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['article'],
  endpoints: (build) => ({
    fetchAllArticles: build.query({
      query: (offset, limit = 5) => ({
        url: `/article`,
        params: { limit, offset },
      }),
      providesTags: (result) => ['article'],
    }),
    fetchArticle: build.query({
      query: (id) => ({
        url: `/article/${id}`,
      }),
    }),
    createArticle: build.mutation({
      query: (article) => ({
        url: `/article`,
        method: 'POST',
        body: article,
      }),
      invalidatesTags: ['article'],
    }),

    deleteArticle: build.mutation({
      async onQueryStarted(uniqueIdentifier, { dispatch }) {
        // Update state with new data from response
        // const patchResult = dispatch(
        //   articleApi.util.updateQueryData('fetchAllArticles', uniqueIdentifier, () => {
        //     return data
        //   })
        // )
        console.log(uniqueIdentifier, dispatch)
      },
    }),
  }),
})

export const {
  reducerPath: articleReducerPath,
  reducer: articleReducer,
  middleware: articleMiddleware,
  useFetchAllArticlesQuery: fetchAllArticles,
  useDeleteArticleMutation: deleteArticle,
} = articleApi
