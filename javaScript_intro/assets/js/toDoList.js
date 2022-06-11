var btn        = document.querySelector('.btn')
var inputText  = document.getElementById('text-tarefa')
var tarefas    = document.querySelector('.tarefas')

inputText.addEventListener('keyup', (e) => {
    if(inputText.value == "") {
        btn.disabled = true
        console.log(inputText.value)
    } else {
        btn.disabled = false
        console.log(inputText.value)
    }
})

btn.addEventListener('click', () => {

    var tarefa       = document.createElement('div')
    tarefa.className = 'tarefa' 

    var check        = document.createElement('input')
    check.type       = 'checkbox'

    var label        = document.createElement('label')
    
    label.innerHTML = inputText.value
    label.htmlFor   = inputText.value

    check.id        = inputText.value
    check.name      = inputText.value

    tarefa.append(check)
    tarefa.append(label)

    tarefas.appendChild(tarefa)

    inputText.value = ''
    btn.disabled = true
})

