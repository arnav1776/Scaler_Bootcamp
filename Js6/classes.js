class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    #courseList = [];

    getInfo(){
        return {name: this.name, emai: this.email};
    }
    enrollCourse(name){
        this.#courseList.push(name);
    }
    getCourseList() {
        return this.#courseList;
    }
}

module.exports = User;

const sam = new User("sam", "sam@gmail.com")
console.log(sam.getInfo());
sam.enrollCourse("Angular Bootcamp");
console.log(sam.getCourseList());
console.log(sam.courseList);
