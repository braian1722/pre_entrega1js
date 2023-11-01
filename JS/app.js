// funciones
const sumar =(a,b) =>{
    return a+b;
};
const restar =(a,b) =>{
    return a-b;
};
const multiplicar =(a,b) =>{
    return a*b;
};
const dividir =(a,b) =>{
    return a/b;
};

alert ("bienbenidos a la calculadora");
let ingreso = parseInt(prompt("1.sumar 2.restar/n 3.multiplicar 4.dividir 0.salir"));
let num1,num2=0;
let res =0;

while(ingreso != 0 ){
    
    if((!isNaN(ingreso)) && (ingreso <= 4)){
        if(ingreso===1){
            num1 = parseInt(prompt("ingrese numero 1"));
            num2 = parseInt(prompt("ingrese numero 2"));
            if(!isNaN(num1) && !isNaN(num2)){
                res=sumar(num1,num2);
                alert("la suma es: "+res);
            }else{
                alert("error en ingreso");
            }
        }
        if(ingreso===2){
            num1 = parseInt(prompt("ingrese numero 1"));
            num2 = parseInt(prompt("ingrese numero 2"));
            if(!isNaN(num1) && !isNaN(num2)){
                res=restar(num1,num2);
                alert("la resta es: "+res);
            }else{
                alert("error en ingreso de numeros");
            }
        }
        if(ingreso===3){
            num1 = parseInt(prompt("ingrese numero 1"));
            num2 = parseInt(prompt("ingrese numero 2"));
            if(!isNaN(num1) && !isNaN(num2)){
                res=multiplicar(num1,num2);
                alert("la multiplicacion es: "+res);
            }else{
                alert("error en ingreso de numeros");
            }
        }
        if(ingreso===4){
            num1 = parseInt(prompt("ingrese numero 1"));
            num2 = parseInt(prompt("ingrese numero 2"));
            if(!isNaN(num1) && !isNaN(num2)){
                res=dividir(num1,num2);
                alert("la divicion es: "+res);
            }else{
                alert("error en ingreso de numeros");
            }
        }
    }else{
            alert("error intentelo otra vez");
        }
        ingreso = parseInt(prompt("desea hacer otra opereacion 1.sumar 2.restar/n 3.multiplicar 4.dividir 0.salir"));
}

alert("gracias por usar nuestra calculadora");





