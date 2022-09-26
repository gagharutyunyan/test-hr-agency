import { useParams } from 'react-router-dom'
import { getArticle } from '../store/reducers/article'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

export const ArticlePage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const article = useSelector((state) => state.articleSlice.article)

  useEffect(() => {
    dispatch(getArticle({ id }))
  }, [dispatch, id])

  return <h1>{article?.id}</h1>
}
