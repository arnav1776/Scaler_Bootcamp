const User = require("./classes");

const xyz = new User("xyz", "xyz@gmail.com")

console.log(xyz.getInfo());
xyz.enrollCourse("React Bootcamp");
xyz.enrollCourse("Angular Bootcamp");

console.log(xyz.getCourseList());

let courses = xyz.getCourseList();

courses.forEach((c) => console.log(c));