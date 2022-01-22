var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log("Course count is: ${this.courseCount}");
    };
};

var xyz = new User("xyz", 2)

console.log(xyz);

var sam = new User("Sam", 1);
console.log(sam);