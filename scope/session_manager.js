function createSession(){
    let userName = null;
    function login(user){
        console.log("user stored " + user);
        userName = user;
        function getInfo(){
            return user;
        }
    }
    function getUser(){
        console.log("user name : " + userName);
    }

    function logout(){
        console.log("user removed");
        userName = null;
    }

    return {login,getUser,logout};
    
}

const session = createSession();

session.login("rahim");
session.getUser();

session.logout();
session.getUser();