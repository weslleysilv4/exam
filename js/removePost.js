import { deletePost, readPost } from "./storage";
import { updateTable } from "./updateTable";

export const removePost = (event) => {
    if(event.target.dataset.action === 'delete') {
        const index = event.target.id.split('-')
        const post = readPost()[index[1]]
        const response = confirm(`Deseja realmente excluir o post ${post.title}?`);
        if(response){
            deletePost(index);
            updateTable();
        }
    }
}