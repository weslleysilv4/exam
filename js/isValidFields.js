export const isValidFields = () => {
    const form = document.getElementById('form')
    return form.reportValidity()
}