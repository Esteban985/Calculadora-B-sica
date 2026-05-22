let pantalla = document.querySelector('#pantalla')
let botones = document.querySelectorAll('.btn')
let borrar = document.querySelector('.borrar')

borrar.addEventListener('click', (event) => {
    if (pantalla.value == "") {
        alert('No hay nada para borrar')
    } else {
        pantalla.value = ""
    }
})

botones.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        pantalla.value += btn.textContent
    })
})