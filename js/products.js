import { getProducts, logout } from "./dummyjson.js"
import { validateNoSession } from "./validateSession.js"

// si no hay una sesión entonces enviar al login
validateNoSession('../index.html')

// cerrar sesion
const logoutButton = document.getElementById('logout')

logoutButton.addEventListener('click', () => {
    logout()
    window.location.href = '../index.html'
})

const { products, total } = await getProducts()
console.log(products)

let promedio = 0, sumaDePrecios = 0,
menorPrecio = Infinity, mayorPrecio = 0, id = 0

products.forEach(product => {
    sumaDePrecios += product.price
    
    if(product.price < menorPrecio) {
        menorPrecio = product.price
    }

    if(product.price > mayorPrecio) {
        mayorPrecio = product.price
        id = product.id
    }
})

promedio = sumaDePrecios / products.length
console.log(menorPrecio, mayorPrecio, id)

// creando el gráfico
const ctx = document.getElementById('myChart')

const datasets = [{
    type: 'bar',
    label: 'Grafico de Productos',
    data: [total, promedio],
    borderWidth: 1
}, {
    type: 'line',
    label: 'Precios',
    data: [menorPrecio, mayorPrecio],
}]

new Chart(ctx, {
  type: 'scatter',
    data: {
        datasets,
        labels: ['Total', 'Promedio de Precios']
    },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
})