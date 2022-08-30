const inputs = document.querySelectorAll('input');

const patterns = { 
    telephone: /^\d{10}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    amesia: /^[a-z ]{3,25}$/i,
    email: /^([a-z\d\.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

//validation function
function validate(field, regEx){
    if (regEx.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup',(e) =>{
        //console.log(e.target.attributes.name.value);
        validate(e.target, patterns[e.target.attributes.name.value])
    });
});