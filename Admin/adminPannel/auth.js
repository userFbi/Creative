// Set your admin login credentials
const ADMIN_USER = "admin";
const ADMIN_PASS = "admin123";

// Handle login form
document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === ADMIN_USER && pass === ADMIN_PASS) {
    localStorage.setItem("isAdmin", "true");
    window.location.href = "index.html";
  } else {
    document.getElementById("errorText").classList.remove("d-none");
  }
});

// Check if user is logged in
function checkAuth() {
  if (localStorage.getItem("isAdmin") !== "true") {
    window.location.href = "login.html";
  }
}

// Logout function
function logout() {
  localStorage.removeItem("isAdmin");
  window.location.href = "login.html";
}
