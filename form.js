let inputs = document.querySelectorAll('input');

//creating an object to populate the keys.
let errors = {
    "name_surname": [],
    "username": [],
    "email": [],
    "password": [],
    "repeat_password": []
}

//traverse through the items and take all values and add event handler on change

inputs.forEach((element)=> {
    element.addEventListener('change', e=>{
        let currentInput = e.target;
        let inputValue = currentInput.value;
        let inputName = currentInput.getAttribute('name');

        //display an error if the char length is less than 5
        if(inputValue.length > 4 ) {
            console.log('OK');
        } else {
            errors[inputName] = ['The field cannot have less than 5 charachters'];
        }
        //call a function to populate errors (if repeated remove the last error and display the new one)
        populateErrors(errors);
    });
});

const populateErrors = errors =>{

    for (let elem of document.querySelectorAll('ul')) {
        elem.remove();
    }


    for(let key of Object.keys(errors)) {
        let input = document.querySelector(`input[name="${key}"]`);
        let parentElement = input.parentElement;
        let errorsElement = document.createElement('ul');
        parentElement.appendChild(errorsElement);

        errors[key].forEach(error => {
            let li = document.createElement('li');
            li.innerText = error;

            errorsElement.appendChild(li);
        })
    }
}