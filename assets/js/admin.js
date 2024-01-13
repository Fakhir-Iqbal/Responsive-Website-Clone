const obj = {
  admin_username: "admin123",
  admin_password: "admin123",
};

// Save data to sessionStorage

document
  .getElementById("submit-form")
  ?.addEventListener("submit", (event) => loginUser(event));

function loginUser(e) {
  e.preventDefault();
  const adminUsername = document.getElementById("username").value;
  const adminPassword = document.getElementById("password").value;
  if (adminUsername == "" && adminPassword == "") {
    alert("Please fill input fields");
  } else if (
    adminUsername == obj.admin_username &&
    adminPassword == obj.admin_password
  ) {
    location.href = "./admin-dashboard.html";
    sessionStorage.setItem("isLoginTrue", true);
  } else {
    alert("username or password is incorrect");
  }
}

if (sessionStorage.getItem("isLoginTrue") !== "true" && window.location.pathname.includes("admin-dashboard.html")) {
  location.href = "./signin.html";
}
