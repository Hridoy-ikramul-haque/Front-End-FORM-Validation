let form=document.getElementById('form'); 

let username=document.getElementById('username');

let email=document.getElementById('email');

let password=document.getElementById('password');

let password2=document.getElementById('password-2'); 


function formValidate(e){
	e.preventDefault(); 

	// checkRequired(username);
	// checkRequired(password);

	checkRequired([username,email,password,password2]);

	checkLength(username,3,15);
	checkLength(password,6,20);
	checkEmail(email);
	checkPasswordMatch(password,password2);
};


function checkRequired(inputarr){
	inputarr.forEach(function(item){
		// console.log(item.value);
		// console.log(item);
		if(item.value.trim()===''){
			showError(item,`${getFieldName(item)} is required`);
		}else{
			showSuccess(item);
		}

	});

}



//Check input length
 function checkLength(input,min,max){
  	if(input.value.length<min){
  		showError(input,`${getFieldName(input)} must be at least ${min} characters`);
  	}else if(input.value.length>max) {
  		showError(input,`${getFieldName(input)} must be less than ${max} characters`);

  	}else{
  		showSuccess(input);
  	}
  }

function getFieldName(input){
	// return input.id; 
	// return input.id.toUpperCase(); 

	return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}

function checkPasswordMatch(pass1,pass2){
	if(pass1.value!=pass2.value){
		showError(pass2,'Password do not match'); 
	}
}

function showError(input,message){
	let val=input.parentElement;
	val.className='form-control error';
     let msg=val.querySelector('small'); 

     msg.innerText=message; 
}

//email validation 

function checkEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());

    if(re.test(email.value)){
    	showSuccess(email);
    }else{
    	showError(email,'email is not valid');
    }
}





function showSuccess(input){
	let val=input.parentElement;
	val.className='form-control success';

    
}

//password matching check 




form.addEventListener('submit',formValidate ); 