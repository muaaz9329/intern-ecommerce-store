function SignUp() {
    let checkObj = {
        name: null,
        pass: null,
        email: null,
    }
    const CustomAlert = document.querySelector("#alert").classList;
    
    const AlertFunction = () => {
        CustomAlert.remove("hidden")
        setTimeout(() => CustomAlert.add("hidden"), 2000)
        setTimeout(() => location.href = 'login.html', 3000)

    }



    const CustomAlert2 = document.querySelector("#alert2").classList;

   function AlertFunction2(text) {
   document.getElementById('errorMsg').innerText = text;
        CustomAlert2.remove("hidden")
        setTimeout(() => CustomAlert2.add("hidden"), 4000)


    }



    const name = document.querySelector("#newFullName").value;
    localStorage.setItem("username", name)
    checkObj.name = true;
    const password = [document.querySelector('#password').value, document.querySelector('#confirmPassword').value];
    if (password[0] != '' && password[1]!='' ) {
        if (password[0] === password[1]) {
            localStorage.setItem('password', password[0]);
            checkObj.pass=true;

        }
        else {
            const msg = "Please check weather the Password and Confirm Password is same"
            AlertFunction2(msg);
    }
}
    else {
        
        const msg = "Please complete the form"
        AlertFunction2(msg);
    }


    const email = document.querySelector('#email').value;
    localStorage.setItem('email', email);
    checkObj.email = true;
    if (checkObj.name && checkObj.email && checkObj.pass) {
        AlertFunction();
    }
  



}