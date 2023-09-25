export const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}
console.log(isValidFields())