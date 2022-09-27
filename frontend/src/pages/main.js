import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticles } from '../store/reducers/article'
import { useSearchParams } from 'react-router-dom'
import { AddArticle } from '../components/addArticle'
import { Paginator } from '../components/paginator'
import { useSetFilters } from '../hooks/useSetFilters'
import { Article } from '../components/article'
import { Search } from '../components/search'

export const MainPage = () => {
  const setFilters = useSetFilters()
  const [URLParams] = useSearchParams()
  const dispatch = useDispatch()
  const { data: articles = [], total = 0 } = useSelector((state) => state.articleSlice.articles)

  const limit = parseInt(URLParams.get('limit')) || 5
  const currentPage = parseInt(URLParams.get('offset')) || 1
  const numPages = Math.ceil(total / limit || 1)

  const setCurrentPage = (offset) => {
    setFilters({ offset })
  }
  useEffect(() => {
    dispatch(getArticles(Object.fromEntries(URLParams)))
  }, [dispatch, URLParams])

  return (
    <div className="layout">
      <div className="sidebar">
        <Search />, range
      </div>
      <div className="main">
        <AddArticle />
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
        <div>
          <Paginator numPages={numPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>
    </div>
  )
}
