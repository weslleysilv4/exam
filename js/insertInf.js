export const insertInf = (post, index) => {
    const postSection = document.getElementById('tablePost')
    const postElement = document.createElement('tr')
    postElement.innerHTML = 
    `
    <tr>
        <td class="post_header">${post.title}<i class="fa-solid fa-trash" data-action="delete" id="del-${index}"></td>
        <td class="post_date">Post created on ${post.date}</td>
        <td class="post_content">${post.content}</td>
        <hr>
    </tr>
    `
    postSection.appendChild(postElement)
}