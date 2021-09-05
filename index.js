let form=document.getElementById('form')

let username=document.getElementById('username'); 

let email=document.getElementById('email');

let password=document.getElementById('password');

let password2=document.getElementById('password-2'); 




function validate(e){
   
    e.preventDefault();


    if(username.value===''){
        showError(username,'Username is required'); 

    }else {
        showSuccess(username);
    }


    if(email.value===''){
        showError(email,'Email is required'); 

    }else if(!isValidEmail(email.value)){
        showError(email,'Email is not valid'); 

    } else {
        showSuccess(email);
    }


    if(password.value===''){
        showError(password,'password is required'); 

    }else {
        showSuccess(password);
    }
   


    if(password2.value===''){
        showError(password2,' re-enter password is required'); 

    }else {
        showSuccess(password2);
    }
   
};


function showError(input,message){
    //alert("enter username");
    let formControl=input.parentElement;
    formControl.className='form-control error'; 
    // let small= document.getElementsByTagName('small')[0]; 
    let small= formControl.querySelector('small'); 
    small.innerText=message;
}

function showSuccess(input){
    let formControl=input.parentElement;
    formControl.className='form-control success';
}

//emial validation 
   function isValidEmail(email){
       //use  regular expression , js email regax 
       const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       return re.test(String(email).toLowerCase());
   }



form.addEventListener('submit',validate);

