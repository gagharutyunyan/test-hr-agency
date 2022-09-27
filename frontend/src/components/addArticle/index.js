import React, { useState } from 'react'
import { Modal } from 'antd'
import { Button } from '../shared/button'
import './style.css'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { createArticle } from '../../store/reducers/article'

export const AddArticle = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm({
    mode: 'onChange',
  })

  const modalOpen = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const onSubmit = (data) => {
    setIsModalVisible(false)
    dispatch(createArticle(data))
    reset()
  }

  return (
    <>
      <div onClick={modalOpen} className="addArticleContainer">
        <h1 className="addArticleTitle">Add Article</h1>
      </div>
      <Modal title="Новый артикль" open={isModalVisible} onCancel={handleCancel} footer={null} width="380px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('title', { required: true })}
            placeholder="Заголовок"
            className="defaultInput"
            type="text"
          ></input>
          <textarea
            {...register('text', { required: true })}
            placeholder="Описание"
            className="defaultInput textArea"
          ></textarea>
          <div className="modal-buttons">
            <Button onClick={handleCancel}>done</Button>
            <Button type="submit" wrong disabled={!isValid}>
              Подтвердить
            </Button>
          </div>
        </form>
      </Modal>
    </>
  )
}
