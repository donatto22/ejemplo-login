import { login } from './dummyjson.js'
import { validateSession } from './validateSession.js'

const formLogin = document.getElementById('formLogin')

// si ya inició sesión entonces que regrese a 
// la pagina de los productos
validateSession('../pages/products.html')

formLogin.addEventListener('submit', async (e) => {
    // evitar que se recargue la página
    e.preventDefault()

    const formData = new FormData(formLogin)

    const datos = Object.fromEntries(formData.entries())
    
    const { accessToken, email, username } = await login(datos)
    console.log(accessToken)

    // guardando la sesion en localstorage
    localStorage.setItem('accessToken', accessToken)

    // cambiando de ruta
    window.location.href = '../pages/products.html'
})