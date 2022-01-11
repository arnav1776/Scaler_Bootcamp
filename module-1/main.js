// DOM -> Document Object Model

function clickAlert() {
    alert("Log In Successful");
    }

const buttonTag = document.getElementById("button-id");
// const divTag = document.getElementById("div-id");
const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");

buttonTag.onclick = function() {
    // divTag.innerHTML = "Value Changed";
    var initialText = input1.value;
    input2.value = initialText;
    input1.value = "";
};

// ES -> ECMAScript

let x = 1; // var x;
let x;
const z = 1;

// Arrow Function => {}
// function abc() {

// }

const abc = () => {}