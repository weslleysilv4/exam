import { createPost } from './storage.js'
import {closeModalCreate } from './openModal.js'
import isValidFields from './isValidFields.js'
import { clearFields } from './clearFields.js'
import { insertInf } from './insertInf.js'
import { updateTable } from './updateTable.js'

export const savePost = () => {
  if (isValidFields) {
    const post = {
      title: document.getElementById('p-title').value,
      content: document.getElementById('p-content').value,
      date: new Date().toLocaleString('pt-BR')
    }
    createPost(post)
    insertInf(post)
    clearFields()
    updateTable()
    closeModalCreate()
  }
}



