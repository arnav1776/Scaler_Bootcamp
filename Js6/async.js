const uno = () =>  {
    console.log("one");
};
const dos = () =>  {
    setTimeout(() => {
        console.log("Time Over");
    }, 3000)
    console.log("two");
};
const tres = () =>  {
    console.log("three");
};

uno();
tres();
dos();