const courses = [
    {
        name: "Complete ReactJS Course",
        price: "2.3"
    },
    {
        name: "Complete Angular Course",
        price: "2.5"
    },
    {
        name: "Complete MERN Course",
        price: "2.8"
    },
    {
        name: "Complete C++ Course",
        price: "2.7"
    },
];

{/* <li class="list-group-item">Complete C++ Course
<span class="float-right">$ 2.8</span>

</li>; */}



function generateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = "";
    courses.forEach(( course) => {

        const li = document.createElement("li");
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);

    });
}

// generateLIST();

window.addEventListener("load", generateLIST());

const button1 = document.querySelector(".sort-btn");
const button2 = document.querySelector(".sort-btdr");



button1.addEventListener("click", () => {
    courses.sort( (a, b) => a.price - b.price );

    generateLIST();
})

button2.addEventListener("click", () => {
    courses.sort( (a, b) => b.price - a.price );

    generateLIST();
})





