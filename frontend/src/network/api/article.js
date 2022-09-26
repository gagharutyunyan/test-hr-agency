import { httpClient } from '../httpClient'

export const articlesApi = {
  get: (params = {}) => {
    const { id = '' } = params
    return httpClient.get(`article/${id}`, params).then((res) => res.data)
  },
  post: (params) => {
    return httpClient.post('article', params)
  },
}
