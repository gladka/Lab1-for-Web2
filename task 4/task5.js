let buttonLowerCamelCase=document.querySelector('#buttonLowerCamelCase');
buttonLowerCamelCase.addEventListener('click',
    function toSnakeCase(event){
    event.preventDefault();
    let fieldLowerCamelCase=document.querySelector('#fieldLowerCamelCase');
    let res=document.querySelector('#resultLowerCamelCase');
    let reg=/([A-Z])/gm;
    res.value= (fieldLowerCamelCase.value).replace(reg,(p1)=>{
        let x=(p1).toLowerCase();
        x='_'+x;
        return x;
    }
    )
    }
);
