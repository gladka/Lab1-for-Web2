let buttonresult=document.querySelector('#buttonresult');
buttonresult.addEventListener('click',
function toCamelCase(event){
    event.preventDefault();
    let value=document.querySelector('#field');
    let regexp=/_([a-z])/gm;
    let str=(value.value).split(regexp);
    let res='';
    for(let i=0;i<str.length;i++){
        if(i%2!==0)res+=str[i].toUpperCase();
        else res+=str[i];
    }
    let result=document.querySelector('#result');
    result.value=res;
}
)