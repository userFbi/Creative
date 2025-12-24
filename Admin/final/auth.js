// Store default login once
if (!localStorage.getItem("adminUsername")) {
  localStorage.setItem("adminUsername", "admin");
  localStorage.setItem("adminPassword", "admin123");
}

function checkAuth() {
  if (localStorage.getItem("isAdmin") !== "true") {
    window.location.href = "./login.html";
  }
}

function logout() {
  localStorage.removeItem("isAdmin");
  window.location.href = "./index.html";
}

document.getElementById("loginForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const u = document.getElementById("username").value;
  const p = document.getElementById("password").value;
  const user = localStorage.getItem("adminUsername");
  const pass = localStorage.getItem("adminPassword");

  if (u === user && p === pass) {
    localStorage.setItem("isAdmin", "true");
    window.location.href = "../final/admin/admin.html";
  } else {
    document.getElementById("errorText").classList.remove("d-none");
  }
});

let users = JSON.parse(localStorage.getItem("users") || "[]");

function renderTable(data = users) {
  const tbody = document.getElementById("userTable");
  tbody.innerHTML = "";
  data.forEach((u, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td><img src="${u.img}" width="50" height="50" style="object-fit:cover; border-radius:5px;" /></td>
      <td>${u.name}</td>
      <td>${u.phone}</td>
      <td>${u.address}</td>
      <td>
        <button class="btn btn-sm btn-warning" onclick="editUser(${i})">Edit</button>
        <button class="btn btn-sm btn-danger" onclick="deleteUser(${i})">Delete</button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

function saveUsers() {
  localStorage.setItem("users", JSON.stringify(users));
  renderTable();
}

document.getElementById("userForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const file = document.getElementById("userImg").files[0];
  const reader = new FileReader();
  reader.onload = () => {
    const newUser = {
      img: reader.result,
      name: document.getElementById("userName").value,
      phone: document.getElementById("userPhone").value,
      address: document.getElementById("userAddress").value,
    };
    users.push(newUser);
    saveUsers();
    this.reset();
  };
  if (file) reader.readAsDataURL(file);
});

function deleteUser(index) {
  if (confirm("Are you sure?")) {
    users.splice(index, 1);
    saveUsers();
  }
}

function editUser(index) {
  const user = users[index];
  const name = prompt("Edit Name:", user.name);
  const phone = prompt("Edit Phone:", user.phone);
  const address = prompt("Edit Address:", user.address);
  if (name && phone && address) {
    users[index] = { ...user, name, phone, address };
    saveUsers();
  }
}

function searchUsers() {
  const q = document.getElementById("searchInput").value.toLowerCase();
  const filtered = users.filter((u) => u.name.toLowerCase().includes(q));
  renderTable(filtered);
}

renderTable();
