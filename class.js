let user, mail, phone, password, confirmPass, captcha;
let selectAllInput;
let submitButton = document.getElementById("submit");
cap.innerHTML = Math.random().toString(36).substring(2, 9);

let submit = () => {
  // Regex
  let mailRegex = /^[a-zA-Z0-9\.]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
  let userRegex = /^[a-zA-Z]{6,}$/;
  let phonenumberRegex = /^[\+][2][3][4][0-9]{10,}$/;
  let passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[#\+\*])(?=.{8,})/;
  captcha = document.getElementById("captcha").value;
  user = document.getElementById("username").value;
  mail = document.getElementById("email").value;
  phone = document.getElementById("number").value;
  password = document.getElementById("pass").value;
  confirmPass = document.getElementById("confirm");
  disp = document.getElementById("disp");
  // empty box validator
  selectAllInput = document.querySelectorAll("input");
  empty = false;
  //use for each to check if all the boxes are empty
  selectAllInput.forEach((el) => {
    if (el.value == "") {
      empty = true;
      // disp.style.display = "none";
    }
    //   if (el.value) {
    //     alert('succesfull')

    // }
  });
  if (empty == true) {
    alert("please fill all the field");
    return;
  }
  //username validator
  if (!userRegex.test(user)) {
    disp.innerHTML = "Please enter a vaild username";
  } else {
    disp.innerHTML = "";
  }
  //email validator
  if (!mailRegex.test(mail)) {
    disp1.innerHTML = "use letters,numbers and symbols";
  } else {
    disp1.innerHTML = "";
  }
  //phone number validator
  if (!phonenumberRegex.test(phone)) {
    disp2.innerHTML = "please enter a valid phone number";
  } else {
    disp2.innerHTML = "";
  }
  // password validator
  if (!passwordRegex.test(password)) {
    disp3.innerHTML =
      "Use 8 or more characters with a mix of letters, numbers & symbols";
  } else {
    disp3.innerHTML = "";
  }
  //confirm password
  if (password != confirmPass) {
    disp4.innerHTML = "password match";
  } else {
    disp4.innerHTML = " password does not match";
  }
  //captcha validator
  if (captcha == cap.innerHTML) {
    disp5.innerHTML = "match";
  } else {
    disp5.innerHTML = "incorrect";
  }
};
//sign up button
submitButton.addEventListener("click", submit);
