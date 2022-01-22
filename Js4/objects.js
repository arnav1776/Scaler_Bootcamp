var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is: ${this.courseCount}`);
    };
};

User.prototype.getFirstname = function() {
    console.log(`Your Firstname is : ${this.firstName}`);
}

var xyz = new User("xyz", 2)
xyz.getCourseCount();
xyz.getFirstname();


var sam = new User("Sam", 1);
sam.getCourseCount();
sam.getFirstname();
