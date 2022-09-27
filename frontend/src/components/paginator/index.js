import React from 'react'
import cn from 'classnames'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'
import './style.css'

export const Paginator = ({ numPages, currentPage, setCurrentPage, pageDelta = 2 }) => {
  const paginator_addition = ''
  const handlePaginateTo = (event) => {
    event.preventDefault()
    setCurrentPage(Number(event.target.dataset.page))
  }

  const pageRange = []

  for (let i = currentPage - pageDelta; i <= currentPage + pageDelta; i++) {
    if (i >= 1 && i <= numPages) {
      pageRange.push(i)
    }
  }

  return (
    <nav className={cn('pagination')}>
      {currentPage !== 1 ? (
        <a
          className={cn('pagination__previous')}
          href={`?offset=${currentPage - 1}${paginator_addition}`}
          data-page={currentPage - 1}
          key="pagination__previous"
          onClick={handlePaginateTo}
        >
          {' '}
          <MdOutlineNavigateBefore />
        </a>
      ) : (
        <span className="pagination__previous active">
          <MdOutlineNavigateBefore />{' '}
        </span>
      )}

      <span className="pagination__pages">
        {currentPage > 1 + pageDelta && (
          <>
            <a
              className={cn('pagination__page', {
                active: currentPage === 1,
              })}
              href={`?page=1${paginator_addition}`}
              data-page={1}
              onClick={handlePaginateTo}
            >
              1
            </a>
            {currentPage > 1 + pageDelta + 1 && <span className="pagination__spacer">...</span>}
          </>
        )}

        {pageRange.map((pageNum) => (
          <a
            className={cn('pagination__page', {
              active: currentPage === pageNum,
            })}
            href={`?offset=${pageNum}${paginator_addition}`}
            data-page={pageNum}
            key={pageNum}
            onClick={handlePaginateTo}
          >
            {pageNum}
          </a>
        ))}

        {currentPage < numPages - pageDelta && (
          <>
            {currentPage < numPages - pageDelta - 1 && <span className="pagination__spacer">...</span>}
            <a
              className={cn('pagination__page', {
                active: currentPage === numPages,
              })}
              href={`?offset=${numPages}${paginator_addition}`}
              data-page={numPages}
              onClick={handlePaginateTo}
            >
              {numPages}
            </a>
          </>
        )}
      </span>

      {currentPage !== numPages ? (
        <a
          className={cn('pagination__next')}
          href={`?page=${currentPage + 1}${paginator_addition}`}
          data-page={currentPage + 1}
          key="pagination__next"
          onClick={handlePaginateTo}
        >
          <MdOutlineNavigateNext />{' '}
        </a>
      ) : (
        <span className="pagination__next active">
          <MdOutlineNavigateNext />{' '}
        </span>
      )}
    </nav>
  )
}
