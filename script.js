let opcion = 0
let numpizza = 0

do{
    opcion = Number(prompt("Bienvenido a Pizza's Cata\nQue deseas comprar\nOpcion 1 Pizza\nOpción 2 Elige tu promo\nOpción 3 Salir"))
} while (opcion !=1 && opcion !=2 && opcion !=3)


function pago(precio){
    let mediodepago=prompt("Elige tu opción de pago: \n1 Pago efectivo \n2 tarjeta débito \n3 crédito")
    switch(mediodepago){
        case "1":
            total=precio*0.9
            Math.trunc(total)
            alert("Tiene un descuento del 10%, el total a pagar es: " + total)
            despedida()
            break
        case "2":
            total=precio*0.95
            Math.trunc(total)
            alert("Tiene un descuento del 5%, el total a pagar es: " + total)
            despedida()
            break
        case "3":
            total=precio*1.20
            alert("El total a pagar considerando interes bancario es: "+ total)
            despedida()
            break            
    }
} 

function despedida(){
    alert ("Muchas gracias por comprar en Pizza's Cata")
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
            precio=9990
            pagar=prompt("La pizza seleccionada tiene un valor de " + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===2){
            precio=12990
            pagar=prompt("La pizza seleccionada tiene un valor de " + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpizza ===3){
            precio=11990
            pagar=prompt("La pizza seleccionada tiene un valor de " + precio + ", para confirmar escribe OK")
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
    case 2:
        numpromo=Number(prompt("Elige tu promo favorita: \nOpcion 1: 1 Pizza Napolitana + bebida 2 lts. \nOpcion 2: 2 Pizzas 4 quesos  \nOpcion 3: 2 pizzas 4 quesos con bebida 3 lts."))
        if (numpromo ===1){
            precio=12990
            pagar=prompt("La promo seleccionada tiene un valor de " + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpromo ===2){
            precio=16990
            pagar=prompt("La promo seleccionada tiene un valor de " + precio + ", para confirmar escribe OK")
            if (pagar==="OK"){
                pago(precio)
                break
            }else{
                cancelado()
                break
            }
        } else if (numpromo ===3){
            precio=19990
            pagar=prompt("La pizza seleccionada tiene un valor de " + precio + ", para confirmar escribe OK")
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
        salir()
        break
}
