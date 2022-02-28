var inputField = document.querySelector(".hide");
var signInBtn = document.querySelector(".signInBtn")
signInBtn.style.display = "none"
inputField.style.display = "none";
function showTheHIde() {
  var inputField = document.querySelector(".hide");
  var signupBtn = document.querySelector(".signupBtn")
   var rightsideImg = document.querySelector(".rightsideImg")
  inputField.style.display = "block";
  var done = document.querySelector(".done");
  signupBtn.style.display = "none";
  rightsideImg.style.display = "none"
}
function doneButton(value) {
  var yourName = document.querySelector(".yourName");
  var userName = document.querySelector(".userName");
  var emailid = document.querySelector(".emailid");
  var password = document.querySelector(".password")



  var done = document.querySelector(".done")
  var inputField = document.querySelector(".hide");

  var rightsideImg = document.querySelector(".rightsideImg")
  var signInBtn = document.querySelector(".signInBtn")

  if (!yourName.value) {
    alert("Please Enter Your Name");
    return;
  }
  if (!emailid.value) {
    alert("Please Enter Your Email Id");
    return;
  }
  if (!userName.value) {
    alert("Please Enter Username");
    return;
  }
  if (!password.value) {
    alert("Please Enter Password");
    return;
  }
  if (password.value.length<6) {
    alert("Please Enter 6+ Digit Password");
    return;
  }

  alert("Your Profile Is Created ");

  inputField.style.display = "none"

  rightsideImg.style.display = "block"
  signInBtn.style.display = "block"


  var value = yourName.value;
  var value = mobileNumber.value;
  var value = email.value;
  yourName.value = "";
  mobileNumber.value = "";
  email.value = "";

}

