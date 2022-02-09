
//Creo la lista de productos

const productos = [{ id: 1, nombre: "Playo", precio: 450, descripcion:"", cantidad:1 },
{ id: 2, nombre: "Hondo", precio: 400, descripcion:"", cantidad:1 },
{ id: 3, nombre: "Cuenco" , precio: 150, descripcion:"", cantidad:1},
{ id: 4, nombre: "Aceitero" , precio: 250, descripcion:"", cantidad:1},
{ id: 5, nombre: "Servilletero" , precio: 150, descripcion:"", cantidad:1},
{ id: 6, nombre: "Posacuenco" , precio: 100, descripcion:"", cantidad:1}];

const carrito=[]


//Los agrego al HTML con Jquery

for (const producto of productos) {

  
    
$("#app").append(`
<div class="Item" >
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
    let hijos = $(e.target).parent().parent().children().children();
    
   
        
    //Animo la respuesta al click a traves de una animacion concatenada para darle a entender al usuario que fue captado su accion
    $(e.target).parent().fadeOut("slow")
    .css("color", "#9E0059")
    .fadeIn("fast")
    $(e.target).parent().children(5).show()
    });
    });

       
    

  

$(`#boton${producto.id}`).click(function () {

//Voy agregando cada producto agregado al array del carrito 

    let id = parseInt([producto.id])
    carrito.push(productos[id - 1])
    


    
//Genero un if por cada uno de los productos para que se renderizen individualmente en el carrito, mostrando la cantidad y el total acumulado de cada producto
    
    if ([producto.id]==1){
    

        let uno = carrito.filter(function (el){
        return el.id==1;});

        let porUno = parseInt([producto.precio])*uno.length
         
        $("#uno").html(
        `<div display=""flex"> 
            
            <p> <img width="40px" height= "40px" src="./img/${producto.id}.jpg" alt=""> Producto : ${producto.nombre}   Cantidad : ${uno.length}  Precio unitario : ${producto.precio} Total : ${porUno}</p>
    
        <div/>`) }


    if ([producto.id]==2){
    

        let dos = carrito.filter(function (el){
        return el.id==2;});
         
        let porDos = parseInt([producto.precio])*dos.length
        $("#dos").html(
        `<div display=""flex"> 
            
            <p> <img width="40px" height= "40px" src="./img/${producto.id}.jpg" alt=""> Producto : ${producto.nombre}   Cantidad : ${dos.length}  Precio unitario : ${producto.precio} Total : ${porDos}</p>
    
        <div/>`) }

    
    if ([producto.id]==3){
    

        let tres = carrito.filter(function (el){
        return el.id==3;});
         
        let porTres = parseInt([producto.precio])*tres.length
        $("#tres").html(
        `<div display=""flex"> 
            
            <p> <img width="40px" height= "40px" src="./img/${producto.id}.jpg" alt=""> Producto : ${producto.nombre}   Cantidad : ${tres.length}  Precio unitario : ${producto.precio} Total : ${porTres}</p>
    
        <div/>`) }


    if ([producto.id]==4){
        

            let cuatro = carrito.filter(function (el){
            return el.id==4;});
            
            let porCuatro = parseInt([producto.precio])*cuatro.length
            $("#cuatro").html(
            `<div display=""flex"> 
                
                <p> <img width="40px" height= "40px" src="./img/${producto.id}.jpg" alt=""> Producto : ${producto.nombre}   Cantidad : ${cuatro.length}  Precio unitario : ${producto.precio} Total : ${porCuatro}</p>
        
            <div/>`) }

    if ([producto.id]==5){
        

            let cinco = carrito.filter(function (el){
            return el.id==5;});
            
            let porCinco = parseInt([producto.precio])*cinco.length
            $("#cinco").html(
            `<div display=""flex"> 
                
                <p> <img width="40px" height= "40px" src="./img/${producto.id}.jpg" alt=""> Producto : ${producto.nombre}   Cantidad : ${cinco.length}  Precio unitario : ${producto.precio} Total : ${porCinco}</p>
        
            <div/>`) }

    if ([producto.id]==6){
            

                let seis = carrito.filter(function (el){
                return el.id==6;});
                
                let porSeis = parseInt([producto.precio])*seis.length
                $("#seis").html(
                `<div display=""flex"> 
                    
                    <p> <img width="40px" height= "40px" src="./img/${producto.id}.jpg" alt=""> Producto : ${producto.nombre}   Cantidad : ${seis.length}  Precio unitario : ${producto.precio} Total : ${porSeis}</p>
            
                <div/>`) }
    
                 


//Genero los map necesarios para contar y mostrar el total de productos que contiene el carrito y el total a pagar y luego los agrego al HTML

    const totalAPagar = carrito.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);
        
    const cantProductos= carrito.map(item=> item.cantidad).reduce((prev, curr )=> prev+curr, 0)
                   


    $("#detalle").html(
            `<div display=""flex"> 
                <h3> Cantidad total de productos en el carrito : ${cantProductos} -------- Total a pagar: ${totalAPagar}</h3>
            
            <div/>`) 

    
    });

}

//Genero una animacion para darle a entender al usuario que agrego los productos al carrito

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
    const productosAMP = carrito.map((element)=>{
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


