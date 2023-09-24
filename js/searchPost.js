import { readPost } from "./storage";

export const searchPost = (title, date) => {
    const pSearch = readPost();
    let result = pSearch;

    if (title) {
        result = result.filter((post) => post.title === title);
    }

    if (date) {
        result = result.filter((post) => post.date === date);
    }

    return result;
};