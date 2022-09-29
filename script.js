console.log("script2");

    let num1 = document.querySelector('#num1');
    let num2 = document.querySelector('#num2');
    let btnSuma = document.querySelector('#suma');
    let btnResta = document.querySelector('#resta');
    let btnMult = document.querySelector('#mult');
    let btnDiv = document.querySelector('#div');
    let resultado= document.querySelector('#resultado');

    btnSuma.addEventListener('click', ()=>{
            resultado.innerText =parseFloat(num1.value) + parseFloat(num2.value);
    });
    btnResta.addEventListener('click', ()=>{
        resultado.innerText =parseFloat(num1.value) - parseFloat(num2.value);
    });
    btnMult.addEventListener('click', ()=>{
        resultado.innerText =parseFloat(num1.value) * parseFloat(num2.value);
    });
    btnDiv.addEventListener('click', ()=>{
        resultado.innerText =parseFloat(num1.value) / parseFloat(num2.value);
    });




