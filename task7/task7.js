let buttonDataTable = document.querySelector('#buttonDataTable');
buttonDataTable.addEventListener('click',
    function createTable(event) {
        event.preventDefault();
        let tableDataText = document.querySelector('#tableDataText');
        let resDataTable = document.querySelector('#resDataTable');

        let td = document.querySelector('#td');
        td.style.border = '1px solid black';

        let test;
        let index = 0;
        let part;
        let array = (tableDataText.value).split(/\n/gm);

        let regFirstName = /^([A-Z][a-z]+?) ([A-Z][a-z]+)$/gm;
        let FirstNameLabel = document.querySelector('#FirstNameLabel');
        FirstNameLabel.innerHTML = 'FirstName: ';
        let FirstName = document.querySelector('#FirstName');

        let LastNameLabel = document.querySelector('#LastNameLabel');
        LastNameLabel.innerHTML = 'LastName: ';
        let LastName = document.querySelector('#LastName');
        while (test = regFirstName.exec(array[index++])) {
            part = test[0].split(' ');
            FirstName.innerHTML = part[0];
            LastName.innerHTML = part[1];
        }
        index = 0;
    }
);