export function getLocalStorage () {
  const storedData = localStorage.getItem('dbPost')
  return JSON.parse(storedData) ?? []
}

export function setLocalStorage (dbPost) {
  localStorage.setItem('dbPost', JSON.stringify(dbPost))
}

// CRUD - CREATE
export function createPost (post) {
  const dbPost = getLocalStorage()
  dbPost.push(post)
  setLocalStorage(dbPost)
}

// CRUD - READ
export function readPost () {
  return getLocalStorage()
}

// CRUD - UPDATE
export function updatePost (index, post) {
  const dbPost = readPost() 
  dbPost[index] = post
  setLocalStorage(dbPost)
}

// CRUD - DELETE
export function deletePost (index) {
  const dbPost = readPost()
  dbPost.splice(index, 1)
  setLocalStorage(dbPost)
}
