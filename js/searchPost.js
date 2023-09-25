import { clearFields } from "./clearFields";
import { insertInf } from "./insertInf";
import { closeModalSearch } from "./openModal";
import { readPost } from "./storage";
import { updateTable } from "./updateTable";

export const searchPostTitle = () => {
    const searchTitle = document.getElementById('p-title-search').value;
    const dbPost = readPost();
    const posts = dbPost.filter(post => post.title === searchTitle);

    const postSection = document.querySelector('#tablePost');
    postSection.innerHTML = '';

    if (posts.length > 0) {
        posts.forEach(insertInf);
    } else {
        alert('Post não encontrado!');
        updateTable();
    }
    closeModalSearch();
};

