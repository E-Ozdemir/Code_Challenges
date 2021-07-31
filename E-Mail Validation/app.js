const validateEmail = () => {
  const email = document.querySelector(".input__email");
  const spanValue = document.querySelector("#errorSpan");

  //regex check!
  const regexPattern = /\S+\@+\S+\.+\S{2,3}$/;

  if (email.value == "" || email.value.length == 0) {
    errorSpan.style.visibility = "hidden";
  } 
  
  else {
    errorSpan.style.visibility = "visible";
    if (regexPattern.test(email.value)) {
      errorSpan.innerHTML = "Your Email is valid";
      errorSpan.style.color = "green";
    } else {
      errorSpan.innerHTML = "Invalid Email Adress";
      errorSpan.style.color = "red";
    }
  }
};
