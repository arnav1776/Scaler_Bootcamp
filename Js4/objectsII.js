var User = {
    name: "",
    getUserName : function() {
        console.log(`User name is : ${this.name}`);
    },
};

var xyz = Object.create(User);
console.log(xyz);
xyz.name = "xyz";

xyz.getUserName();

var sam = Object.create(User, {
    name: {value: 1}
})