import React, { useState } from 'react'
import { Modal } from 'antd'
import { Button } from '../shared/button'

export const AddArticle = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const modalOpen = () => {
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <div>
      <h1 onClick={modalOpen}>open</h1>
      <Modal title="Новый артикль" open={isModalVisible} onCancel={handleCancel} footer={null} width="380px">
        <input placeholder="Заголовок" className="defaultInput" type="text"></input>
        <textarea placeholder="Описание" className="defaultInput textArea"></textarea>
        <div className="modal-buttons">
          <Button onClick={handleCancel}>done</Button>
          <Button type="submit" wrong>
            Подтвердить
          </Button>
        </div>
      </Modal>
    </div>
  )
}
