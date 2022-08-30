valor = prompt ("Hola, qué tal?, por favor ingresa tu nota");

promedio = parseInt(valor, 10)


 //verificar que promedio no es una letra
  if (typeof promedio === 'number'){
    verificando()   
  }
    else if (typeof promedio ==='string'){
        alert('ingresa un número valido')
    }
 

function verificando (){
    if (promedio <= 2.0 ) {
        alert('Tu promedio es deficiente, te invito a mejorar')
    }
    
    if (promedio >= 2.1 && promedio <= 3.0 ) {
       alert('tu promedio es bajo, ánimo puedes mejorar')
    } 
    
    if (promedio >= 3.1 && promedio <= 4.0 ){
        alert('tu promedio es aceptable')
    }
    
    if (promedio >= 4.1 && promedio <= 4.5){
        alert('Tu promedio es alto, felicidades')
    }
    
    if (promedio >= 4.6 && promedio <= 5.0 ){
        alert('Que gran promedio tienes, impresionante. Felicidades')
    }
    
    else if (promedio >= 5.1){
        alert('ingresa una nota real')
    
    }
 alert('me estoy ejecutando')
   
}
 


/*
if (promedio <= 2.0 ) {
    alert('Tu promedio es deficiente, te invito a mejorar')
}

if (promedio >= 2.1 && promedio <= 3.0 ) {
   alert('tu promedio es bajo, ánimo puedes mejorar')
} 

if (promedio >= 3.1 && promedio <= 4.0 ){
    alert('tu promedio es aceptable')
}

if (promedio >= 4.1 && promedio <= 4.5){
    alert('Tu promedio es alto, felicidades')
}

if (promedio >= 4.6 && promedio <= 5.0 ){
    alert('Que gran promedio tienes, impresionante. Felicidades')
}

else if (promedio >= 5.1){
    alert('ingresa una nota real')

}

console.log(typeof promedio)
*/
