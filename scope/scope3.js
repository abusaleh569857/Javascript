const API_URL = "https://api.example.com";

function app() {
  const token = "abc123";

  function fetchUsers() {
    const endpoint = "/users";

    console.log(API_URL);
    console.log(token);
    console.log(endpoint);
  }

  fetchUsers();
}

app();


// apiurl => fetchusers(apiurl ase naki) => app(api url ase naki) => global api url ase naki => if not show ref error

// Why can an inner function access variables from its outer function?

// ans : bcz js works scope chain & also lexical scope