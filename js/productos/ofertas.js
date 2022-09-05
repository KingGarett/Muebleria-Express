import {importarProductos} from '../services.js'

async function agregarProduct() {
    const objects = await importarProductos('../../database/ofertas.json')
    const productosContainer = document.querySelector('.products')
    let productos = ''

    for (let {id,imagen,nombre,precio} of objects){   
        productos += `
        <div class="carts">
            <div>
                <img src="./imagenes/${imagen}.png" alt="${imagen}">
                <p>$<span>${precio}</span></p>
            </div>
            <p class="title">${nombre}</p>
            <a href="" data-id="${id}" class="btn-add-cart">Agregar </a>
        </div>
        `
    }

    productosContainer.innerHTML = productos
}

agregarProduct()



