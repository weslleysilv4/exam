import { openMenu } from './js/openMenu.js'
import { openModalCreate, openModalSearch, closeModalCreate, closeModalSearch } from './js/openModal.js'
import { removePost } from './js/removePost.js'
import { savePost } from './js/savePost.js'
import { searchPost } from './js/searchPost.js'
import { updateTable } from './js/updateTable.js'

updateTable();

document.querySelector('.post-section')
  .addEventListener('click', removePost)

document.querySelector('.menu-btn')
  .addEventListener('click', openMenu)

document.querySelector('.create-post')
  .addEventListener('click', openModalCreate)

document.querySelector('.search-post')
  .addEventListener('click', openModalSearch)

document.getElementById('close-panel-icon')
  .addEventListener('click', closeModalCreate)

document.getElementById('close-panel-icon-search')
  .addEventListener('click', closeModalSearch)

document.getElementById('create-post-btn')
  .addEventListener('click', savePost)

document.getElementById('search-post-btn')
  .addEventListener('click', searchPost)