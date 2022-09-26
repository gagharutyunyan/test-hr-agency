import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteArticle, getArticles } from '../store/reducers/article'
import { Link } from 'react-router-dom'
import { AddArticle } from '../components/addArticle'

export const MainPage = () => {
  const dispatch = useDispatch()
  const articles = useSelector((state) => state.articleSlice.articles)

  const del = (id) => {
    dispatch(deleteArticle(id))
  }

  useEffect(() => {
    dispatch(getArticles())
  }, [dispatch])

  return (
    <div className="layout">
      <div className="sidebar">search, range</div>
      <AddArticle />
      {articles.map(({ id, title }) => {
        return (
          <Link to={`article/${id}`} onClick={() => del(id)} key={id}>
            {title}
          </Link>
        )
      })}
      <div>paginator</div>
    </div>
  )
}
