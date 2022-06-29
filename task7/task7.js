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

        let regGender=/^(F?e?[Mm]ale)$/gm;
        regGender.lastIndex=0;
        let GenderLabel=document.querySelector('#GenderLabel');
        GenderLabel.innerHTML='Gender: ';
        let Gender=document.querySelector('#Gender');
        while(test=regGender.exec(tableDataText.value)){
             Gender.innerHTML=test[0];
        }

        let regAddress=/(\d+? .+?\n)(.+?\n)/gm;
        let AddressLabel=document.querySelector('#AddressLabel');
        AddressLabel.innerHTML='Address: ';
        let Address=document.querySelector('#Address');
        while(test=regAddress.exec(tableDataText.value)){
                Address.innerHTML=test[1] + '. ' + test[2];
        }


        let regBirthDate=/(0\d|1[012])-([012]\d|3[01])-([01]\d{3}|20[01]\d|202[012])/gm;
        let BirthDateLabel=document.querySelector('#BirthDateLabel');
        BirthDateLabel.innerHTML='BirthDate: ';
        let BirthDate=document.querySelector('#BirthDate');
        while (test = regBirthDate.exec(tableDataText.value)){
                BirthDate.innerHTML=test[0];
        }

        let regNickName=/^[a-z]+?\n/gm;
        let NickNameLabel=document.querySelector('#NickNameLabel');
        NickNameLabel.innerHTML='NickName: ';
        let NickName=document.querySelector('#NickName');
        while(test=regNickName.exec(tableDataText.value)){
                NickName.innerHTML=test[0];
        }

        let regPassword=/^([\d\w]+?)?[%$#@&]([\d\w]+?)?\n/gm;
        let PasswordLabel=document.querySelector('#PasswordLabel');
        PasswordLabel.innerHTML='Password: ';
        let Password=document.querySelector('#Password');
        while(test=regPassword.exec(tableDataText.value)){
                Password.innerHTML=test[0];
        }

        let regEmail=/^([\d\w]+?)?@([\d\w]+?)?.(\w+?)\n/gm;
        let EmailLabel=document.querySelector('#EmailLabel');
        EmailLabel.innerHTML='Email: ';
        let Email= document.querySelector('#Email');
        while(test=regEmail.exec(tableDataText.value)){
                Email.innerHTML=test[0];
        }
    }
);