export const importarProductos = async (url) =>{
    try {    
        const response = await fetch(url)
        const productos = await response.json()
        return productos.productos
    } 
    catch { error => console.log(error)}
}