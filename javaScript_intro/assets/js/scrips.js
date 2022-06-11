var resultado = document.getElementById('resultado')
var btnAdd    = document.getElementById('adicionar')
var btnSub    = document.getElementById('subtrair')
var produto = 0

function add() {
    produto = produto + 1
    resultado.innerHTML = produto
}


function sub() {
    produto = produto - 1
    resultado.innerHTML = produto

    
}

btnAdd.addEventListener('click', function() {
    if(resultado.innerHTML >= 10) {
       btnAdd.disabled  = true
    } else {
        btnAdd.disabled = false
    }

    if(resultado.innerHTML > 0) {
        btnSub.disabled = false
        btnSub.classList.remove('desabilita')
        btnSub.classList.add('btn')
    }
}, false)


btnSub.addEventListener('click', function() {
    if(resultado.innerHTML == 0) {
        btnSub.classList.remove('btn')
        btnSub.classList.add('desabilita')
        btnSub.disabled = true
        
    } else {
        btnSub.disabled = false
        
    }

    if(resultado.innerHTML < 10) {
        btnAdd.disabled = false
    }
})