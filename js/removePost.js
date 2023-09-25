
export const removePost = (event) => {
    if(event.target.dataset.action === 'delete') {
        const[action, index] = event.target.id.split('-')
        console.log(action, index);
    }
}