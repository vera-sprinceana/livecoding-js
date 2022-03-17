//"Controllare che un numero preso in input sia positivo e richiederlo in caso contrario."
let numero=prompt("Inserisci un numero");

while( numero<0){
    numero=prompt("Reinserisci un numero");
}
console.log(numero)
document.getElementById("numero").innerHTML=numero;