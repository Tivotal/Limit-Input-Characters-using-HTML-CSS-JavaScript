/* Created by Tivotal */

let inputBox = document.querySelector(".input-box");
let textArea = document.querySelector("textarea");
let countNum = document.querySelector(".count");

textArea.addEventListener("keyup", () => {
  //getting textarea value length
  let textLength = textArea.value.length;

  //displaying value length in count span
  countNum.innerText = textLength;

  //if textVal is greater than 0 add active class to input box or remove the class
  textLength > 0
    ? inputBox.classList.add("active")
    : inputBox.classList.remove("active");

  //if value length is greater than 100 add error class to inputbox
  //or remove the error class
  textLength > 100
    ? inputBox.classList.add("error")
    : inputBox.classList.remove("error");

  console.log(textLength);
});
