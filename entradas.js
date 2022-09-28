var select1 = document.querySelector('#select1')
var saida = document.querySelector('#saida')



select1.addEventListener('change', (e) => {

    if (select1.value === 'Opção 1') {
        saida.innerHTML = 'Opção 1'

    } else if (select1.value === 'Opção 2') {
        saida.innerHTML = 'Opção 2'


    } else if (select1.value === 'Opção 3') {
        saida.innerHTML = 'Opção 3'


    }


})