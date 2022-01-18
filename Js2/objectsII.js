var user = {
    firstName : "xyz", 
    lastName : "abc",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length}`;
    },
    
};

var courseList = true;
console.log(user.getCourseCount());
user.buyCourse("React Js");
user.buyCourse("Angular");

console.log(user.getCourseCount());
