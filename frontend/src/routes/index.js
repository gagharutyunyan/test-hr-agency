import { MainPage } from '../pages/main'
import { ArticlePage } from '../pages/article'

export const simpleMode = [
  {
    path: '/',
    children: [
      { index: true, element: <MainPage /> },
      { path: '/article/:id', element: <ArticlePage /> },
    ],
  },
]
