const get = (target) => {
    return document.querySelector(target)
}
    
const getAll = (target) => {
    return document.querySelectorAll(target)
}

export { get, getAll }