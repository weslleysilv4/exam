export default function isValidFields () {
    const form = document.querySelectorAll('form')
    form.reportValidity()
}