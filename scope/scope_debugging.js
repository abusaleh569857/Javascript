const app = "My App";

function outer() {
  let user = "Rahim";

  if (true) {
    let user = "Karim";
    var role = "admin";

    function printUser() {
      console.log(user);
      console.log(role);
      console.log(app);
    }

    printUser();
  }

  console.log(user);
  console.log(role);
}

outer();