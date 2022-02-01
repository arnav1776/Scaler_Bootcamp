const x = true; 
const a = !x; 
const b = !a; 

!!true // Evaluates to true.
!!false // Evaluates to false.

const google = "google";
const fb = null;

if (google) {
    console.log("Block 1");
}

if (!!fb) {
    console.log("Block 2");
}

