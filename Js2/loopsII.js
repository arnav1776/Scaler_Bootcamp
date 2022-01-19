const names = ["YouTube", "Facebook", "Instagram", "Netflix", "Amazon"];

for(const n of names) {
    console.log(n);
}

const symbols = {
    yt: "YouTube",
    ig: "Instagram",
    fb: "Facebook",
}

for(const n in symbols) {
    console.log(`Key is ${n} and value is: ${symbols[n]}`);
}