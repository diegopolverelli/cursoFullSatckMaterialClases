console.log("LocalStorage")
let carrito=JSON.parse(localStorage.getItem("carrito"))
if(!carrito){
    carrito=[]
}

let detalleCarrito=false

const vaciar=()=>{
    localStorage.removeItem("carrito")
    carrito=[]
    detalleCarrito=false
    divCarrito.textContent=`Cantidad ítems: ${carritoSimple()}`

}

const carritoSimple=()=>{
    let cantidadItems=0
    carrito.forEach(i=>{
        cantidadItems+=i.cantidad
    })
    return cantidadItems
}

console.log(carrito)
const divCarrito=document.getElementById("carrito")
divCarrito.textContent=`Cantidad ítems: ${carritoSimple()}`



let productos=[  // va a venir desde un backend / server vía AJAX (fetch o axios)
    {
        id:1, descrip:"Martillo", precio: 200
    },
    {
        id:2, descrip:"Escalera", precio: 700
    },
    {
        id:3, descrip:"Pincel", precio: 82
    },
    {
        id:4, descrip:"Destornillador", precio: 104
    },
    {
        id:5, descrip:"Pintura Roja", precio: 100
    },
    {
        id:6, descrip:"Pintura Azul", precio: 100
    },
]

const ulProductos=document.createElement("ul")
productos.forEach(p=>{
    let liProducto=document.createElement("li")
    // liProducto.textContent=`${p.descrip} - $ ${p.precio} - <button onClick="comprar(${p.id})">Comprar</button>`
    liProducto.innerHTML=`${p.descrip} - $ ${p.precio} - <button onClick="comprar(${p.id})">Comprar</button>`
    ulProductos.append(liProducto)
})

document.body.append(ulProductos)

const comprar=(id)=>{
    console.log(`Compra producto ${id}`)
    let indiceItem=carrito.findIndex(e=>e.id===id)
    if(indiceItem===-1){
        carrito.push({
            id, 
            cantidad:1
        })
    }else{
        carrito[indiceItem].cantidad++
    }

    localStorage.setItem("carrito", JSON.stringify(carrito))
    divCarrito.textContent=`Cantidad ítems: ${carritoSimple()}`
    detalleCarrito=false
}

const verDetalle=()=>{
    if(detalleCarrito){
        divCarrito.textContent=`Cantidad ítems: ${carritoSimple()}`
        detalleCarrito=false
        return 
    }

    let detalle=[]
    let total=0
    carrito.forEach(i=>{
        let producto=productos.find(p=>p.id===i.id)
        if(producto){
            detalle.push({
                descrip:producto.descrip,
                cantidad: i.cantidad, 
                precio:producto.precio,
                subtotal:producto.precio*i.cantidad
            })
            total+=producto.precio*i.cantidad
        }
    })
    console.log(detalle)
    divCarrito.textContent=JSON.stringify(detalle, null, 5)+"\n\nTOTAL: $"+total
    detalleCarrito=true
}