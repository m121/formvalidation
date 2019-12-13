

function validation(){

let validate = true;
let message = "";

if((document.getElementById("fullname_input").value) === ""){

    validate = false
    message = "This input can't be empty"
    
}
if((document.getElementById("phonenumber_input").value) === ""){

    validate = false
    message = "This input can't be empty"
   
}
if((document.getElementById("address_input").value) === ""){

    validate = false
    message = "This input can't be empty"
}
if((document.getElementById("email_input").value) === ""){

    validate = false
    message = "This input can't be empty"
}
if((document.getElementById("password_input").value) === ""){

    validate = false
    message = "This input can't be empty"
}
if((document.getElementById("confirmpassword_input").value) === ""){

    validate = false
    message = "This input can't be empty"
}

if(document.getElementById("password_input").value != document.getElementById("confirmpassword_input").value){

    validate = false
    message = "The passwords inputs must be equal"

}

if(document.getElementById("terms_checkbox").checked === false){
    validate = false
    message = "You have to acept the terms and conditions"
}


if(validate){

    alert('Works!!!')
}else{
    alert(message)
}
}