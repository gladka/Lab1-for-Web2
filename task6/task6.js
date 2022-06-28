let buttonDateText=document.querySelector('#buttonDateText');
buttonDateText.addEventListener('click',
    function changeDateText(event){
    event.preventDefault();
    let regexpDateText=/\b([01]\d{3}|20[01]\d|202[012])\/(0\d|1[02])\/([012]\d|3[01])\b/gm;
    let strDateText=document.querySelector("[name='dateText']");
    let resDateText=document.querySelector("[name='resDateText']");
    resDateText.value=(strDateText.value).replace(regexpDateText,'$3.$2.$1');
    }
);