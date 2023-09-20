let opcion = 0
let numpizza = 0


let productos = [
    {nombre: "pizza 4 quesos", precio: 9990, ingredientes :{
        i1:"queso1", i2:"queso2", i3:"queso3", i4:"queso4"
       } },
    {nombre: "pizza napolitana", precio: 12990, ingredientes :{
        i1:"queso", i2:"tomate", i3:"jamón", i4:"salame"
       } },
    {nombre: "pizza finas hierbas", precio: 11990, ingredientes :{
        i1:"queso", i2:"tomate", i3:"orégano", i4:"albahaca"
       } }
]

function bienvenida(productos){
    //alert("consulte nuestra carta")
    for (const producto of productos){
       alert(producto)
    }
}

//INICIO DEL PROGRAMA
alert("Bienvenido a Pizza's Cata")
alert("estos son nuestros productos")

bienvenida(productos)

do{
    opcion = Number(prompt("\nQue deseas comprar\nOpcion 1 Pizza\nOpción 2 Elige tu promo\nOpción 3 Consultar precios\nOpción 4 Salir"))
} while (opcion !=1 && opcion !=2 && opcion !=3 && opcion !=4)



function pago(precio, pizza){
    let mediodepago=prompt("Elige tu opción de pago: \n1 Pago efectivo \n2 tarjeta débito \n3 crédito")
    bebida=1500
    let boleta = []
    boleta.push(pizza)
    boleta.push(precio)
    switch(mediodepago){
        case "1":
            total=precio*0.9
            Math.trunc(total)
            alert("Tiene un descuento del 10%, el total a pagar es: $" + total)
            do{
                opcion = Number(prompt("Desea agregar una bebida??\nIngrese 1 SI\nIngrese 2 NO"))
            } while (opcion !=1 && opcion !=2)
            if (opcion ==1){
                total=total+bebida
                boleta.push(total)
                alert("Su cuenta es de: $" + total)
                despedida(boleta)
                break
            }
            else if (opcion ==2){
                boleta.push(total)
                alert("Su cuenta es de: $" + total)
                despedida(boleta)
                break
            }
                     
        case "2":
            total=precio*0.95
            total=total.toFixed()
            alert("Tiene un descuento del 5%, el total a pagar es: $" + total)
            despedida()
            break
        case "3":
            total=precio*1.20
            alert("El total a pagar considerando interes bancario es: $"+ total)
            despedida()
            break            
    }
} 

function despedida(boleta){
    alert ("Muchas gracias por comprar en Pizza's Cata")
    alert("No olvide su boleta")
    console.log(boleta)
}

function cancelado (){
    alert("El pedido ha sido cancelado")
}

function salir(){
    alert("Que tenga buen día, vuelva pronto")
}

switch (opcion){
    case 1:
        numpizza=Number(prompt("Elige tu pizza favorita: \n 1 para pizza 4 quesos\n 2 pizza napolitana\n 3 pizza finas hierbas"))
        if (numpizza ===1){
            pizza="Pizza 4 quesos"
            precio=9990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio, pizza)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===2){
            pizza="Pizza 4 napolitana"
            precio=12990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio, pizza)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===3){
            pizza="Pizza finas hierbas"
            precio=11990
            pagar=prompt("La pizza seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio, pizza)
                break
            }else{
                cancelado()
                break
            }
        } else {
             alert("Opcion no válida, para continuar, presione enter") 
             salir()
             break
        }
    case 2:
        numpromo=Number(prompt("Elige tu promo favorita: \nOpcion 1: 1 Pizza Napolitana + bebida 2 lts. \nOpcion 2: 2 Pizzas 4 quesos  \nOpcion 3: 2 pizzas 4 quesos con bebida 3 lts."))
        if (numpromo ===1){
            precio=12990
            pagar=prompt("La promo seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpromo ===2){
            precio=16990
            pagar=prompt("La promo seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpromo ===3){
            precio=19990
            pagar=prompt("La promo seleccionada tiene un valor de $" + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else {
             alert("Opcion no válida, para continuar, presione enter") 
             salir()
             break
        }
    case 3:
        do{
            consulta = Number(prompt("Ingrese precio a consultar para ver productos: $ "))
        } while (consulta < 1000 && consulta > 20000)
        //consulta = Number(prompt("Ingrese precio a consultar para ver productos: $ "))

        let consultaprecio = productos.filter(producto => producto.precio > consulta)
        alert("Revisar log")
        console.log(consultaprecio)
        break
    case 4:
        salir()
        break
}


const pizza1 = {
   nombre:"pizza_4quesos",
   precio: 8.990,
   ingredientes :{
    i1:"queso1",
    i2:"queso2",
    i3:"queso3",
    i4:"queso4"
   } 

}


const pizza2 = {
    nombre:"pizza_napolitana",
    precio: 9.990,
    ingredientes :{
        i1:"queso",
        i2:"tomate",
        i3:"jamón",
        i4:"salame"
       } 
}


const pizza3 = {
    nombre:"pizza_finashierbas",
    precio: 7.990,
    ingredientes :{
        i1:"queso",
        i2:"tomate",
        i3:"orégano",
        i4:"albahaca"
       } 
}



let carrito = []

let boleta = []