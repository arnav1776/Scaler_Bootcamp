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
