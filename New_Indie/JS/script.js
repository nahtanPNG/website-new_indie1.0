function escrever(elemento){
    const texto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    texto.forEach((letra, i) =>{
    setTimeout(() => {
        elemento.innerHTML += letra;
    },75 * i);
});
}

const titulo = document.getElementById('sobrejs')
escrever(sobrejs);

const titulo2 = document.getElementById('contajs')
escrever(contajs);

