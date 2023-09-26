import { readPost } from "./storage"

export const isValidFields = () => {
    const form = document.getElementById('form');
    form.reportValidity();
    if(postVerify() && form.reportValidity()) {
        return true
    }
}

const postVerify = () => {
    const dbPost = readPost();
    const titleVal = document.getElementById('p-title').value;
    const titles = dbPost.filter(post => post.title === titleVal);

    if(titles.length === 1) {
        alert(`Já existe um post com o título ${titleVal}!`)
        return false
    }
    return true
}