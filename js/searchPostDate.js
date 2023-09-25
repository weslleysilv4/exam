import { insertInf } from "./insertInf";
import { closeModalSearch } from "./openModal";
import { readPost } from "./storage";
import { updateTable } from "./updateTable";

export const searchPostDate = () => {
    const searchDate = document.getElementById('date-filter').value;
    const fomartedDate = spliceDate(searchDate);
    const dbPost = readPost();
    const posts = dbPost.filter(post => post.date === fomartedDate);

    const postSection = document.querySelector('.post-section');
    postSection.innerHTML = '';

    if (posts.length > 0) {
        posts.forEach(insertInf);
    } else {
        alert('Nenhum Post nesta data!');
        updateTable();
        closeModalSearch();
    }
};

const spliceDate = (date) => {
    const dateSplit = date.split('-');
    const year = dateSplit[0];
    const month = dateSplit[1];
    const day = dateSplit[2];
    return `${day}/${month}/${year}`;
}