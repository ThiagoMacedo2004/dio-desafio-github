var btn        = document.querySelector('.btn')
var inputText  = document.getElementById('text-tarefa')
var tarefas    = document.querySelector('.tarefas')

inputText.addEventListener('keyup', (e) => {
    if(inputText.value == "") {
        btn.disabled = true
        
    } else {
        btn.disabled = false
        
    }
})

btn.addEventListener('click', () => {

    var tarefa       = document.createElement('div')
    tarefa.className = 'tarefa' 

    var check        = document.createElement('input')
    check.type       = 'checkbox'
    check.className  = 'check'
    check.id        = inputText.value
    check.name      = inputText.value
    
    check.addEventListener('click', () => {
        if(check.checked !== '') {
            label.classList.toggle('risco')
        } 
    })

    var label       = document.createElement('label')
    label.innerHTML = inputText.value
    label.htmlFor   = inputText.value
    label.id        = inputText.value

   

    tarefa.append(check)
    tarefa.append(label)

    tarefas.appendChild(tarefa)

    inputText.value = ''
    inputText.focus()
    btn.disabled = true

})






