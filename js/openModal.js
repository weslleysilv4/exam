export const openModalCreate = () => {
  document.querySelector('.modal-content')
  .classList.add('active')
}

export const closeModalCreate = () => document.querySelector('.modal-content').classList.remove('active')

export const openModalSearch = () => {
  document.querySelector('.modal-search')
  .classList.add('active')
}

export const closeModalSearch = () => {
  document.querySelector('.modal-search')
  .classList.remove('active')
}