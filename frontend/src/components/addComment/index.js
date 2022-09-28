import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../shared/button'
import './style.css'
import { createComment } from '../../store/reducers/comments'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const AddComment = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  })

  const onSubmit = (data) => {
    dispatch(createComment({ article: id, ...data }))
    reset()
  }

  return (
    <>
      <h1>Добавить комментарий</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="addCommentFrom">
        <input {...register('user', { required: true })} placeholder="Имя" className="defaultInput" type="text"></input>
        <textarea
          {...register('text', { required: true })}
          placeholder="Содержание"
          className="defaultInput textArea"
        ></textarea>
        <Button type="submit" disabled={!isValid}>
          Добавить
        </Button>
      </form>
    </>
  )
}
