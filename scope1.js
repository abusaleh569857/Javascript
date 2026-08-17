const appName = "MeadowGo"; // global scope

function createUser() {
  const userRole = "customer"; // func scope

  if (userRole === "customer") {
    const dashboard = "/customer/dashboard"; // block scope
    console.log(appName);
    console.log(userRole);
    console.log(dashboard);
  }

  console.log(appName);
  console.log(userRole);

   console.log(dashboard); // show ref error
}

createUser();