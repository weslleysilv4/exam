import { readPost } from "./storage"

export const insertInf = (post, index) => {
    const postSection = document.querySelector('.post-section')
    const postElement = document.createElement('div')
    postElement.classList.add('post-section')
    postElement.innerHTML = `
        <table>
            <tbody>
                <tr>
                    <td class="post_header">${post.title}<i class="fa-solid fa-trash" data-action="delete" id="del-${index}"></td>
                    <td class="post_date">${post.date}</td>
                    <td class="post_content">${post.content}</td>
                </tr>
            </tbody>
        </table>
    `
    postSection.appendChild(postElement)
}