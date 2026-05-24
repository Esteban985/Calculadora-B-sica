let pantalla = document.querySelector('#pantalla')
let botones = document.querySelectorAll('.num')
let borrar = document.querySelector('.borrar')
let opciones = document.querySelectorAll('.operador')
let resultado = document.querySelector('#resultado')

//Variables para realizar operaciones
let num1 = null
let num2 = 0
let operacionActual = ""
let valorActual = 0
let temporal = 0
let resultadoFinal = 0

const sumar = (num1, num2) => {
    return num1 + num2
}

const restar = (num1, num2) => {
    return num1 - num2
}

const dividir = (num1, num2) => {
    return num1 / num2
}

const multiplicar = (num1, num2) => {
    return num1 * num2
}

//Funcion para llamar a las demas 
const calcular = (a, b, operacion) => {
    if (operacion == "sumar") {
        return sumar(a, b)
    } else if (operacion == "restar") {
        return restar(a, b)
    } else if (operacion == "dividir") {
        return dividir(a, b)
    } else if (operacion == "multiplicar") {
        return multiplicar(a, b)
    }
}

//Evento para los botones de numeros
botones.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        pantalla.value += btn.textContent
    })
})


//Evento para los botones de opciones
opciones.forEach((opcion) => {

    opcion.addEventListener('click', (event) => {
        //Guardo el primer numero
        valorActual = Number(pantalla.value)
        if (num1 == null) {
            //Pregunto si num1 todavia no tiene nada para guardarlo
            num1 = valorActual
        } else {
            //si ya tiene algo entonces en temporl guardo el resultado de calcular el num1 con el valor actual y que operacion desea el usuario
            temporal = calcular(num1, valorActual, operacionActual)
            //Actualizo el valor de num1
            num1 = temporal
        }
        operacionActual = event.target.id
        pantalla.value = ""
    })

})

//Evento para el signo de igual
resultado.addEventListener('click', (event) => {
    if (num1 == null) {
        pantalla.value = "No ingreso numeros"
    } else {
        num2 = Number(pantalla.value)
        resultadoFinal = calcular(num1, num2, operacionActual)
        pantalla.value = resultadoFinal

        //Limpio variables para poder comenzar a operar de 0
        num1 = null
        num2 = 0
        operacionActual = ""
    }
})

//Evento destinado para la accion de borrar la pantalla
borrar.addEventListener('click', (event) => {
    if (pantalla.value == "") {
        alert('No hay nada para borrar')
    } else {
        pantalla.value = ""
    }
})