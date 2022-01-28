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

    login(){
        return "You are logged in";
    }
}

class SubAdmin extends User{
    constructor(name, email){
        super(name, email);

    }
    getAdminInfo(){
        return "SubAdmin";
    }
    login(){
        return "login for admin only"
    }
}

module.exports = User;

const sam = new User("sam", "sam@gmail.com")
console.log(sam.getInfo());
sam.enrollCourse("Angular Bootcamp");
console.log(sam.getCourseList());
console.log(sam.courseList);

const tom = new SubAdmin("tom", "tom@gmail.com");
console.log(tom.getAdminInfo());
console.log(tom.login());
console.log(tom.getInfo());
