var getUserRole = function (name, role){
     switch (role) {
         case "admin":
             return `${name} is admin with all access`;
             break;
         case "subadmin":
             return `${name} is sub-admin with access to create and delete content`;
             break;

        case "testprep":
             return `${name} is test-prep with access to create and delete tests`;
             break;


        case "user":
             return `${name} is user`;
             break;

         default:
            return `${name} is trial user`;
             break;
     }
}

console.log(getUserRole("abc", "testprep"));

var getRole = getUserRole("xyz", "user");
console.log(getRole);
