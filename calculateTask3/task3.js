let button=document.querySelector('#resButton');
button.addEventListener('click',
    function (event){
        event.preventDefault();
        let number1=document.querySelector('#firstField');
        let number2=document.querySelector('#secondField');
        let result=document.querySelector('#result');
        result.value = +number1.value + +number2.value;
    });