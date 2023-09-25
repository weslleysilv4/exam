import { insertInf } from "./insertInf"
import { readPost } from "./storage"

export const updateTable = () => {
    const dbPost = readPost()
    clearTable();
    dbPost.forEach(insertInf)
}

const clearTable = () => {
    const postRow = document.querySelectorAll('#tablePosts>tbody tr')
    postRow.forEach(row => row.parentNode.removeChild(row))
}