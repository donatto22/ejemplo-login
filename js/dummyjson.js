const API = 'https://dummyjson.com'
const API_LOGIN = `${API}/auth/login`
const API_PRODUCTS = `${API}/products`

export const login = async (datos) => {
    // desestructuracion de un objeto
    const { username, password } = datos

    // el login
    const response = await fetch(API_LOGIN, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            username, password
        })
    })

    const session = await response.json()
    return session
}

export const logout = () => {
    localStorage.removeItem('accessToken')
}

export const getProducts = async () => {
    const response = await fetch(API_PRODUCTS)
    const data = await response.json()
    return data
}