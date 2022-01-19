const myStates = [
    "Rajasthan", 
    "Delhi", 
    "Assam", 
    1947,
    "Tamil Nadu",
];

for (let i = 0; i <= myStates.length; i++) {
        if(typeof myStates[i] !== 'string') continue;
    console.log(myStates[i]);
}

let i = 0;

while(i < myStates.length) {
    console.log(myStates[i]);
    i++;
}

do {
    console.log(i);
    i++;
} while(i < 10);

myStates.forEach( (s) => (console.log(s)));
