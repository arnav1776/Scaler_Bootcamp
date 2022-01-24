const xyz = {
    firstName : "xyz",
    lastName : "abc",
    role: "Admin",
    courseCount: 3,
    getInfo: function () {
    console.log(`
    First Name is ${this.firstName}
    Last name is ${this.lastName}
    His role is ${this.role}
    ans he is studying ${this.courseCount} courses
    `);
    },
};

const aj = {
    firstName: "Sam",
    lastName: "AJ",
    role: "Sub-Admin",
    courseCount: 4,
};

var ajInfo = xyz.getInfo.bind(aj);
ajInfo();

