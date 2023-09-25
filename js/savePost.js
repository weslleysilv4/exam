import { createPost } from './storage.js'
import {closeModalCreate } from './openModal.js'
import isValidFields from './isValidFields.js'
import { clearFields } from './clearFields.js'
import { insertInf } from './insertInf.js'
import { updateTable } from './updateTable.js'

const data = new Date()
export const savePost = () => {
  if (isValidFields) {
    const post = {
      title: document.getElementById('p-title').value,
      content: document.getElementById('p-content').value,
      date: new Intl.DateTimeFormat('pt-BR', {day: 'numeric', month: 'numeric', year: 'numeric'}).format(data)
    }
    createPost(post)
    insertInf(post)
    clearFields()
    updateTable()
    closeModalCreate()
  }
}



