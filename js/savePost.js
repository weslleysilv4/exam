import { createPost, readPost } from './storage.js'
import {isValidFields} from './isValidFields.js'
import { insertInf } from './insertInf.js'
import { updateTable } from './updateTable.js'
import { closeModalCreate } from './openModal.js'
import { clearFields } from './clearFields.js'

const data = new Date()
export const savePost = () => {
  const post = {
    title: document.getElementById('p-title').value,
    content: document.getElementById('p-content').value,
    date: new Intl.DateTimeFormat('pt-BR', {day: 'numeric', month: 'numeric', year: 'numeric'}).format(data)
  }
  if (isValidFields()) {
    createPost(post)
    insertInf(post)
    updateTable()
    clearFields()
    closeModalCreate()
  }
}



