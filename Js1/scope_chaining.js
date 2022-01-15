var name ="xyz";

console.log("Line number 3", name);

function sayName(){
    var name = "abc";
    console.log("Line number 6", name)
sayNameTwo();

function sayNameTwo(){
    var name = "def";
    console.log("Line Number 11", name);
 }
}

sayName();