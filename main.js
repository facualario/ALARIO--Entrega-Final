
//Creo la lista de productos

const productos = [{ id: 1, nombre: "Playo", precio: 450, descripcion:"", cantidad:1 },
{ id: 2, nombre: "Hondo", precio: 400, descripcion:"", cantidad:1 },
{ id: 3, nombre: "Cuenco" , precio: 150, descripcion:"", cantidad:1},
{ id: 4, nombre: "Aceitero" , precio: 250, descripcion:"", cantidad:1},
{ id: 5, nombre: "Servilletero" , precio: 150, descripcion:"", cantidad:1},
{ id: 6, nombre: "Posacuenco" , precio: 100, descripcion:"", cantidad:1}];

//Los agrego al HTML con Jquery

for (const producto of productos) {
$("#app").append(`<div class="Item" >
    <div >
    <img src="./img/${producto.id}.jpg" alt="">
    <p> Producto: ${producto.nombre}</p>
    <b> $ ${producto.precio}</b>
    <br><br/>
    
    <button class="boton_add" id="boton${producto.id}" > Agregar al carrito </button>  
    <p style= "display: none"> Agregado, cliquee nuevamente para agregar mas productos</p>
    </div>
</div>`
);




//Creo la funcion asociada al boton de compra para sumarlos a la lista de productos en el carrito
//Asocio una funcion para el evento del click en los botones del elemento generado arriba

$(document).ready(function () {
    $(`#boton${producto.id}`).click(function (e) {
    let hijos = $(e.target).parent().children();
    
    
    //Animo la respuesta al click a traves de una animacion concatenada para darle a entender al usuario que fue captado su accion
    $(e.target).parent().fadeOut("slow")
    .css("color", "#9E0059")
    .fadeIn("fast")
    $(e.target).parent().children(5).show()
    });
    });

    
$(`#boton${producto.id}`).click(function (add) {

    add= producto.cantidad +1
    
    });
}



// $("#carrito").append(
//     `<div display=""flex">
//     <p> <img width="40px" height= "40px" src="./img/${producto.id}.jpg" alt=""> Producto: ${producto.nombre}   Cantidad: ${producto.cantidad}  Precio: ${producto.precio} </p>
    
//     <div/>`)






$('#botoncart').click(function () {
    $('html, body').animate({scrollTop:1000}, 'slow');
    return false;
    });

//Agrego un boton al final para simular el pago 

let boton = document.getElementById("pagar")

boton.addEventListener("click", (e) => {
    pagar()
})

//Agrego una funcion a este boton llamando a la API de mercado pago para simular el funcionamiento de pago real en una aplicacion

async function pagar() {
    const productosAMP = productos.map((element)=>{
        let nuevoElementoMP  = {
            title: element.nombre,
            description: element.descripcion,
            picture_url: element.img,
            category_id: element.id,
            quantity: Number(element.cantidad),
            currency_id :"ARS",
            unit_price: Number(element.precio),
        };
        return nuevoElementoMP;
    });

    console.log(productosAMP)

    const response = await fetch(
        "https://api.mercadopago.com/checkout/preferences",
        {
            method: "POST",
            headers: {
                Authorization: 
                "Bearer TEST-346121138486028-012006-f0e272f4565185581c1b8aebbf2a1477-348512335",
            },
            body: JSON.stringify({
                items: productosAMP,
            }),
        }
    );

    const data = await response.json();
    window.open(data.init_point, "_blank");
}


