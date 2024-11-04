document
document.getElementById("formValidate").addEventListener('submit', function(event){

  event.preventDefault();

    let userName = document.getElementById("userName").value.trim();
    let emailId = document.getElementById("emailId").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();

    let uNameError = document.getElementById("userNameError");
    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passWordError");
    let cPassError = document.getElementById("cPasswordError");

    let isValid = true;

    // amir Sohail
    // abc@gmail.com

    let userNamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let emailPattern = /^[a-z0-9]+@[a-z]{3,}\.[a-z]{2,}$/;

    if (userName === "") {
      uNameError.innerHTML = "*Name is required";
      isValid = false;
    } else if (!userNamePattern.test(userName)) {
      uNameError.innerHTML = "*Enter Your Full Name";
      isValid = false;
    } else if (userNamePattern.test(userName)) {
      uNameError.innerHTML = "";
      isValid = true;
    }
      //Emial id

    if (emailId === "") {
      emailError.innerText = "*Email is required!!*";
      isValid = false;
    } else if (!emailPattern.test(emailId)) {
      emailError.innerText = "*Entered email Id is wrong";
      isValid = false;
    } else if (emailPattern.test(emailId)) {
      emailError.innerText = "";
      isValid = true;
    }
      //Paswword Management
    if (password === "") {
      document.getElementById('passError').innerHTML = "*Password is Required";
      isValid = false;
    } else if (password.length <3 ||password.length >10) {
      document.getElementById('passError').innerHTML = "*Your Password format is wrong";
      isValid = false;
    } else if (password.length >3 ||password.length <10) {
      document.getElementById('passError').innerHTML = "";
      isValid = true;
    }
    // confirm Password
    if (confirmPassword === "") {
      cPassError.innerText = "Enter your password once again";
      isValid = false;
    } else if (confirmPassword !== password) {
      cPassError.innerText = "Password doesn't match with the above case";
      isValid = false;
    } else if (confirmPassword === password) {
      cPassError.innerText = "";
      isValid = true;
    }


  

    if (isValid) {
      alert(`Hi ${userName},!! Welcome to Our Website`);
      console.log(userName, emailId, password);
    }
})
