const session = localStorage.getItem('accessToken')

export const validateSession = (path) => {
    if(session) {
        window.location.href = path
    }
}

export const validateNoSession = (path) => {
    if(!session) {
        window.location.href = path
    }
}
