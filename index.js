function showTheHIde() {
  var inputField = document.querySelector(".hide");
  var signupBtn = document.querySelector(".signupBtn");
  var rightsideImg = document.querySelector(".rightsideImg");
  inputField.style.display = "block";
  var done = document.querySelector(".done");
  signupBtn.style.display = "none";
  rightsideImg.style.display = "none";
}
function doneButton(value) {
  var yourName = document.querySelector(".yourName");
  var userName = document.querySelector(".yourEmail");
  var emailid = document.querySelector(".yourNumber");
  var password = document.querySelector(".password");
  var check = document.querySelector(".checkboxs");

  var done = document.querySelector(".done");
  var inputField = document.querySelector(".hide");

  var rightsideImg = document.querySelector(".rightsideImg");
  var signInBtn = document.querySelector(".signInBtn");

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
  if (password.value.length < 6) {
    alert("Please Enter 6+ Digit Password");
    return;
  }
  if (!check.checked) {
    alert("PLease Click Terms And Conditions");
    return;
  }

  alert("Your Profile Is Created ");

  yourName.value = "";
  userName.value = "";
  emailid.value = "";
  password.value = "";

  inputField.style.display = "none";

  rightsideImg.style.display = "block";
  signInBtn.style.display = "block";

  var value = yourName.value;
  var value = mobileNumber.value;
  var value = email.value;
  yourName.value = "";
  mobileNumber.value = "";
  email.value = "";
}

var inspirationDiv = document.querySelector(".inspirationDiv");
inspirationDiv.style.display = "none";

var inspirationDiv2 = document.querySelector(".inspirationDiv2");
inspirationDiv2.style.display = "none";

var render = () => {
  var inspirationDiv2 = document.querySelector(".inspirationDiv2");

  var inspirationTag = document.querySelector(".inspirationTag");

  var inspirationDiv = document.querySelector(".inspirationDiv");
  var inspirationleftDiv = document.createElement("div");
  inspirationleftDiv.setAttribute("class", "design");
  var inspirationrightDiv = document.createElement("div");
  inspirationrightDiv.setAttribute("class", "designCategories");

  var h1 = document.createElement("p");
  h1.innerHTML = "Explore Design Work";

  var h2 = document.createElement("p");
  h2.innerHTML = "New & Noteworthy";

  var h3 = document.createElement("p");
  h3.innerHTML = "Playoffs";

  var h4 = document.createElement("p");
  h4.innerHTML = "Blog";

  var h5 = document.createElement("p");
  h5.innerHTML = "Weekly Warm-Up";

  var jobBoard = document.createElement("p");
  jobBoard.innerHTML = "Explore Design Work";

  var freeLance = document.createElement("p");
  freeLance.innerHTML = "New & Noteworthy";

  var projects = document.createElement("p");
  projects.innerHTML = "New & Noteworthy";

  var yourVideo = document.createElement("p");
  yourVideo.innerHTML = "New & Noteworthy";

  inspirationTag.addEventListener("mouseout", (event) => {
    inspirationDiv.style.display = "none";
  });

  inspirationTag.addEventListener("mouseover", (event) => {
    inspirationDiv.style.display = "flex";
    inspirationDiv2.style.display = "none";
  });

  inspirationleftDiv.addEventListener("mouseover", (event) => {
    inspirationDiv.style.display = "flex";
  });
  inspirationrightDiv.addEventListener("mouseover", (event) => {
    inspirationDiv.style.display = "flex";
  });
  inspirationleftDiv.addEventListener("mouseout", (event) => {
    inspirationDiv.style.display = "none";
  });
  inspirationrightDiv.addEventListener("mouseout", (event) => {
    inspirationDiv.style.display = "none";
  });

  inspirationleftDiv.append(h1);
  inspirationleftDiv.append(h2);
  inspirationleftDiv.append(h3);
  inspirationleftDiv.append(h4);
  inspirationleftDiv.append(h5);

  inspirationrightDiv.append(freeLance);
  inspirationrightDiv.append(jobBoard);
  inspirationrightDiv.append(projects);
  inspirationrightDiv.append(yourVideo);

  inspirationDiv.append(inspirationleftDiv);
  inspirationDiv.append(inspirationrightDiv);

  // inspirationDiv.append(inspirationrightDiv)
};

render();

var showFindWorkTag = () => {
  var inspirationTag = document.querySelector(".mainuName");

  var inspirationDiv = document.querySelector(".inspirationDiv");
  var findWorks = document.querySelector(".findWorkTag");

  var inspirationDiv2 = document.querySelector(".inspirationDiv2");
  var inspiration2leftDiv = document.createElement("div");
  inspiration2leftDiv.setAttribute("class", "design");
  var inspiration2rightDiv = document.createElement("div");
  inspiration2rightDiv.setAttribute("class", "designCategories");

  var h1 = document.createElement("p");
  h1.innerText = "Job Board";

  var h2 = document.createElement("p");
  h2.innerText = "Freelance Projects";

  var h3 = document.createElement("p");
  h3.innerText = "Want Freelance Design Projects";

  var h4 = document.createElement("p");
  h4.innerText = "Personalize Your Profile With Video ?";

  var h5 = document.createElement("p");
  h5.innerText = "Weekly Warm-Up";

  var h11 = document.createElement("p");
  h1.innerText = "Explore Design Work";

  var h22 = document.createElement("p");
  h2.innerText = "New & Noteworthy";

  var h33 = document.createElement("p");
  h3.innerText = "Playoffs";

  var h44 = document.createElement("p");
  h4.innerText = "Blog";

  var h55 = document.createElement("p");
  h5.innerText = "Weekly Warm-Up";

  findWorks.addEventListener("mouseover", (event) => {
    inspirationDiv2.style.display = "flex";
    inspirationDiv.style.display = "none";
  });

  inspiration2leftDiv.addEventListener("mouseover", (event) => {
    inspirationDiv2.style.display = "flex";
  });
  inspiration2rightDiv.addEventListener("mouseover", (event) => {
    inspirationDiv2.style.display = "flex";
  });
  inspiration2leftDiv.addEventListener("mouseout", (event) => {
    inspirationDiv2.style.display = "none";
  });
  inspiration2rightDiv.addEventListener("mouseout", (event) => {
    inspirationDiv2.style.display = "none";
  });
  findWorks.addEventListener("mouseout", (event) => {
    inspirationDiv2.style.display = "none";
  });

  inspiration2leftDiv.append(h1);
  inspiration2leftDiv.append(h2);
  inspiration2leftDiv.append(h3);
  inspiration2leftDiv.append(h4);
  inspiration2leftDiv.append(h5);

  inspiration2rightDiv.append(h22);
  inspiration2rightDiv.append(h11);
  inspiration2rightDiv.append(h33);
  inspiration2rightDiv.append(h44);
  inspiration2rightDiv.append(h55);

  inspirationDiv2.append(inspiration2leftDiv);

  inspirationDiv2.append(inspiration2rightDiv);

  // console.log(inspirationDiv);
};

showFindWorkTag();

// var showFindWorkTag = () =>{
//   var findWorkTag = document.querySelector(".mainuName")
//   var hideinspirationDiv = document.querySelector(".hideinspirationDiv")
//   var inspirationDiv = document.querySelector(".inspirationDiv")
//   var design = document.querySelector(".design")
//   findWorkTag.addEventListener("mouseover",(event) =>{
//     hideinspirationDiv.style.display = "block"
//     inspirationDiv.style.display = "block"

//   })

// }
// showFindWorkTag();

// function showinspirationDiv(value){
// var findWorkTag = document.querySelector(".mainuName")
//   var hideinspirationDiv = document.querySelector(".hideinspirationDiv")

//   findWorkTag.addEventListener("mouseover" , (event) =>{
//     hideinspirationDiv.style.display = "block"

//   })

// }
