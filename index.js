import CustomHTTP from "./custom-http.js";

const customHttp = new CustomHTTP();

document.getElementById("getBtn").addEventListener("click", get);
document.getElementById("postBtn").addEventListener("click", post);
document.getElementById("putBtn").addEventListener("click", put);
document.getElementById("deleteBtn").addEventListener("click", deleteuser);

// GET REQUEST

function get() {
  customHttp
    .get("https://jsonplaceholder.typicode.com/users")
    .then(response => console.log("USERS", response))
    .catch(error => console.error(error));
}

const data = {
  name: "Custom name",
  username: "Custom Username",
  phone: "923493280948"
};

// POST REQUEST
function post() {
  customHttp
    .post("https://jsonplaceholder.typicode.com/users", data)
    .then(response => console.log(`User ${response.id} added successfully.`))
    .catch(error => console.error(error));
}

// PUT REQUEST
function put() {
  customHttp
    .put("https://jsonplaceholder.typicode.com/users/3", data)
    .then(response => console.log(`User ${response.id} updated successfully.`))
    .catch(error => console.error(error));
}

// DELETE REQUEST
function deleteuser() {
  customHttp
    .delete("https://jsonplaceholder.typicode.com/users/7")
    .then(response => console.log("User deleted successfully"))
    .catch(error => console.error(error));
}
