const uno = () =>  {
    return "one";
};

// const dos = () =>  {
//     setTimeout(() => {
//         return "two";
//     }, 3000)
// };

const dos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                    resolve("two");
                }, 3000);
    });
};

const tres = () =>  {
    return "three";
};

const CallMe = async () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}

CallMe();
