const form = document.getElementById('form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const confirmPassword=document.querySelector('#password2');
const showError = (input,message) =>{
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText=message;
};
const showSuccess = (input)=>{
    const formControl=input.parentElement;
    formControl.className = 'form-control success';
}
const getFieldByName = (input)=>{
    return input.id.charAt(0).toUpperCase()+ input.id.slice(1);
}
const checkRequired=(inpArr)=>{
    let isRequired=false;
    inpArr.forEach(item=>{
        if(!item.value){
            showError(item, `${getFieldByName(item)} is required`);
        }else{
            showSuccess(item);
            isRequired=true;
        }
        return isRequired;
    });
};

const checkLength =(input,  min,  max)=>{
        if(input.value.length <  min){
            showError(input,`${getFieldByName(input) } must be at least ${min} characters.`);
        }else if(input,length>=max){
            showError(input,`${getFieldByName(input) } must be less than ${max} characters.`);
        }else{
            showSuccess(input);
        }
};

const checkEmail =(input)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
};

const checkPasswordsMatch = (p1,p2)=>{
        if(p1.value!==p2.value){
            showError(p2, 'Password do not match');
        }
}
const saveFormData = (data)=>{
    data.forEach(element=>{
        localStorage.setItem(`${element.id}`,element.value);
    });
}

// Event Listener
form.addEventListener('submit', (e)=>{
        e.preventDefault();
        //console.log(password.value);
        if(!checkRequired([username, email, password,confirmPassword])){
            checkLength(username, 3, 15);
            checkEmail(email);
            checkLength(password, 6, 25);
            checkPasswordsMatch(password, confirmPassword);
            saveFormData([username,email,password,confirmPassword]);
        }

});
