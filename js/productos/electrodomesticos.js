import {importarProductos} from '../services.js'

async function agregarProduct(categoria,json) {
    const objects = await importarProductos(json)
    const productosContainer = document.querySelector(categoria)
    let productos = ''

    for (let {imagen,nombre} of objects){   
        productos += `
        <div class="card " style="width: 14rem;">
            <img src="../imagenes/${imagen}.png" class="card-img-top ofertas__imagenes" alt="${imagen}">
            <div class="card-body">
                <p class="card-text">${nombre}</p>
            </div>
        </div>
        `
    }

    productosContainer.innerHTML = productos
}

agregarProduct('[data-tv-audio]','../../database/tv-audio.json')
agregarProduct('[data-small]','../../database/small.json')
agregarProduct('[data-heladeras]','../../database/heladeras.json')
agregarProduct('[data-ventilacion]','../../database/ventilacion.json')