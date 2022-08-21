
    function LogIn() {

        const CustomAlert2 = document.querySelector("#alert2").classList;
        const CustomAlert = document.querySelector("#alert").classList;

        const AlertFunction = () => {
            CustomAlert.remove("hidden")
            setTimeout(() => CustomAlert.add("hidden"), 2000)
            setTimeout(() => location.href = 'login.html', 3000)

        }

        function AlertFunction2(text) {
            document.getElementById('errorMsg').innerText = text;
            CustomAlert2.remove("hidden")
            setTimeout(() => CustomAlert2.add("hidden"), 4000)


        }


        const userPassword =  localStorage.getItem("password")
        const userEmail =  localStorage.getItem("email");
        const data = {
            email: document.querySelector("#LoginEmail").value,
            password: document.querySelector("#LoginPass").value
        }
        if (userEmail != data.email || userPassword != data.password) {
            const msg = "Incorrect email or password, Please enter the correct info or sign up"
            AlertFunction2(msg);
        }
        else if (userEmail === data.email && userPassword === data.password) {
            AlertFunction();
        }

    }