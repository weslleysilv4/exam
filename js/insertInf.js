export const insertInf = (post, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td class="post_header">${post.title}<i class="fa-solid fa-trash" data-action="delete" id="del-${index}"></td>
        <td class="post_date">Post created on ${post.date}</td>
        <td class="post_content">${post.content}</td>
    `
    document.getElementById('tableRow>tbody').appendChild(newRow)
}