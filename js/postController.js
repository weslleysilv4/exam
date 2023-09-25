import { clearFields } from "./clearFields";
import { searchPostTitle } from "./searchPost";
import { searchPostDate } from "./searchPostDate";

export const postSearchController = (post) => {
    const inputTitleSearch = document.getElementById('p-title-search').value;
    const inputDateSearch = document.getElementById('date-filter').value;

    if (inputTitleSearch !== '' && inputDateSearch !== '') {
        alert('Preencha apenas um campo!');
    } else if (inputTitleSearch === '' && inputDateSearch === '') {
        alert('Preencha um campo!');
    } else if (inputTitleSearch !== '') {
        searchPostTitle(post);
    } else if (inputDateSearch !== '') {
        searchPostDate(post);
    }

    clearFields();
};
