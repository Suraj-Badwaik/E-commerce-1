
  document.querySelector("form").addEventListener("submit", signUpFunction);

  var userData = JSON.parse(localStorage.getItem("userCreds"))||[]

  function signUpFunction() {
    event.preventDefault();

    var userObj = {
      email: document.querySelector("#email").value,
      password: document.querySelector("#pass").value,
      mobile: document.querySelector("#user").value,
    };
    //console.log(userObj);
    userData.push(userObj);
    //console.log(userData)
    localStorage.setItem("userCreds",JSON.stringify(userData))

    alert("Signup Successful");

  }

