import { insertInf } from "./insertInf"
import { readPost } from "./storage"

export const updateTable = () => {
    const dbPost = readPost()
    clearTable();
    dbPost.forEach(insertInf)
}

const clearTable = () => {
    const postLines = document.querySelectorAll('.post-section>table>tbody tr')
    postLines.forEach(line => line.parentNode.removeChild(line))
}