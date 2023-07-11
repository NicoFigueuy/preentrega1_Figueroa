function calcularIva(precio) {
    let total = precio *1.22;
    edad=0

    while(edad <=0 || isNaN(edad)){

    edad= parseInt(prompt("Ingresa tu edad para recibir un descuento"));
    }
   
    if(edad<18){
        console.log("Eres menor de edad no puedes comprar en esta pagina");
    }else if(edad<=59){
        let descuentoJoven= total*0.95;
        console.log("Tienes el descuento joven del 5%")
        console.log("El precio final es $" + descuentoJoven.toFixed(2))
    }else if(edad>=60){
        let descuentoExp = total*0.85;
        console.log("Tienes el descuento experiencia del 15%")
        console.log("El precio final es $" + descuentoExp.toFixed(2))
    }

};

calcularIva(50);





