var btn    = document.getElementById('btn')
var input1 = document.getElementById('input1') as HTMLInputElement
var input2= document.getElementById('input2') as HTMLInputElement

function somar(num1:number, num2:number) {
    return num1 + num2
}

btn?.addEventListener('click', () => {
    console.log(somar(Number(input1.value), Number(input2.value)))
} )