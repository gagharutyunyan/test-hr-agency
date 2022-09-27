import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '../shared/button'

export const Comment = () => {
  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      <h1>Добавить комментарий</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
          {...register('text', { required: true })}
          placeholder="Добавить комментарий"
          className="defaultInput textArea"
        ></textarea>
        <Button type="submit">Добавить</Button>
      </form>
    </>
  )
}
