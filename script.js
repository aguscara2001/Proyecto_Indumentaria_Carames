let divProductos = document.getElementById('Productos')
fetch('Proyecto_Indumentaria_Agustin_Carames/productos.json')
    .then( (res) => res.json())
    .then( productos =>{
        productos.forEach(producto => {
            divProductos.innerHTML += `
                <div id="${producto.id}" data-aos="fade-in" data-aos-delay="100">
                    <img src=${producto.imagen}>
                    <p>${producto.nombre}</p>
                    <p>${producto.precio}</p>
                    <p>${producto.id}</p>
                    <button id="carrito">Agregar al Carrito</button>
                </div>    
            `
        })
    })

let botonCarrito = document.getElementById('carrito')

botonCarrito.addEventListener('click',() => {
    Toastify({
        text: "Se añadio al carrito",
        duration: 2000
    }).showToast();
})


const productosObj = {
                        ...listaProductos
                    }

console.log(productosObj)



const desestructurar = (nombre) =>{
     console.log(nombre)
 }
 
 desestructurar(listaProductos);

for (const producto of listaProductos){
    producto.sumaIva();
}


class user{
    constructor (email){
        this.email = email;
    }
}

let arrayUsuarios = []

localStorage.getItem(`arrayUsuarios`) ? arrayUsuarios = JSON.parse(localStorage,getItem('usuarios')) : localStorage.setItem('usuarios',JSON.stringify(arrayUsuarios));

let formCliente = document.getElementById ("idFormulario");

formCliente.addEventListener('submit', (e) => {
    e.preventDefault()

   let email = document.getElementById ('idEmail').value
   
   const usuario = new user(email)
   arrayUsuarios.push(usuario)
   localStorage.setItem('usuarios', JSON.stringify(arrayUsuarios))
   console.log(`Se ha logueado correctamente con el email ${email}`)
   formCliente.reset()
})










