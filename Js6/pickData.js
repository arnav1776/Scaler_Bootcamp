// const user = ["xyz", 3, "admin"];
// var role = user[2];
// var name = user[0];

// var [name, courseCount, role] = user;

// console.log(role);

const MyUser = {
    name: "xyz",
    courseCount: 5,
    role: "admin",
};

console.log(MyUser.courseCount);

const {name, mycourseCount, role} = MyUser;
console.log(role);