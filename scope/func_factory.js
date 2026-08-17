function createUser(name, role){
    const userName = name;
    const userRole = role;
    function getInfo(){
        console.log(userName + " is an " + userRole)
    }
    return {getInfo};
}

const admin = createUser("Rahim", "admin");
const customer = createUser("Karim", "customer");

admin.getInfo();
customer.getInfo();


