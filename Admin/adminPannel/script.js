document.addEventListener("DOMContentLoaded", () => {
  const USERS_PER_PAGE = 10;
  let currentPage = 1;
  let filteredUsers = [];

  const getUsers = () => JSON.parse(localStorage.getItem("users")) || [];
  const saveUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

  const renderTable = () => {
    const users = filteredUsers.slice((currentPage - 1) * USERS_PER_PAGE, currentPage * USERS_PER_PAGE);
    const tbody = document.querySelector("#userTable tbody");
    tbody.innerHTML = "";

    users.forEach((user, index) => {
      const globalIndex = (currentPage - 1) * USERS_PER_PAGE + index;
      const row = document.createElement("tr");
      row.innerHTML = `
        <td><img src="${user.image}" alt="User"></td>
        <td>${user.name}</td>
        <td>${user.phone}</td>
        <td>${user.address}</td>
        <td>
          <div class="dropdown">
            <button class="btn btn-light btn-sm dropdown-toggle" data-bs-toggle="dropdown">⋮</button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" onclick="viewUser(${globalIndex})">View</a></li>
              <li><a class="dropdown-item" href="#" onclick="editUser(${globalIndex})">Edit</a></li>
              <li><a class="dropdown-item text-danger" href="#" onclick="deleteUser(${globalIndex})">Delete</a></li>
            </ul>
          </div>
        </td>
      `;
      tbody.appendChild(row);
    });

    renderPagination();
  };

  const renderPagination = () => {
    const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
    const container = document.getElementById("paginationControls");
    container.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      btn.className = `btn btn-sm ${i === currentPage ? 'btn-primary' : 'btn-outline-primary'}`;
      btn.onclick = () => {
        currentPage = i;
        renderTable();
      };
      container.appendChild(btn);
    }
  };

  const loadUsers = (query = "") => {
    const allUsers = getUsers();
    filteredUsers = allUsers.filter(user =>
      `${user.name} ${user.phone} ${user.address}`.toLowerCase().includes(query.toLowerCase())
    );
    currentPage = 1;
    renderTable();
  };

  document.getElementById("userForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("userName").value;
    const phone = document.getElementById("userPhone").value;
    const address = document.getElementById("userAddress").value;
    const imgInput = document.getElementById("userImg");

    const reader = new FileReader();
    reader.onload = () => {
      const users = getUsers();
      users.push({ name, phone, address, image: reader.result });
      saveUsers(users);
      e.target.reset();
      loadUsers(document.getElementById("searchInput").value);
    };
    if (imgInput.files[0]) reader.readAsDataURL(imgInput.files[0]);
  });

  document.getElementById("searchInput").addEventListener("input", (e) => {
    loadUsers(e.target.value);
  });

  document.getElementById("editUserForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const index = document.getElementById("editUserIndex").value;
    const name = document.getElementById("editUserName").value;
    const phone = document.getElementById("editUserPhone").value;
    const address = document.getElementById("editUserAddress").value;
    const imageInput = document.getElementById("editUserImg");

    const users = getUsers();
    const update = (image = null) => {
      users[index] = { ...users[index], name, phone, address };
      if (image) users[index].image = image;
      saveUsers(users);
      bootstrap.Modal.getInstance(document.getElementById("editUserModal")).hide();
      loadUsers(document.getElementById("searchInput").value);
    };

    if (imageInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => update(reader.result);
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      update();
    }
  });

  window.viewUser = (index) => {
    const user = getUsers()[index];
    document.getElementById("modalImg").src = user.image;
    document.getElementById("modalName").textContent = user.name;
    document.getElementById("modalPhone").textContent = user.phone;
    document.getElementById("modalAddress").textContent = user.address;
    new bootstrap.Modal(document.getElementById("userDetailModal")).show();
  };

  window.editUser = (index) => {
    const user = getUsers()[index];
    document.getElementById("editUserIndex").value = index;
    document.getElementById("editUserName").value = user.name;
    document.getElementById("editUserPhone").value = user.phone;
    document.getElementById("editUserAddress").value = user.address;
    document.getElementById("editUserImg").value = "";
    new bootstrap.Modal(document.getElementById("editUserModal")).show();
  };

  window.deleteUser = (index) => {
    if (confirm("Are you sure you want to delete this user?")) {
      const users = getUsers();
      users.splice(index, 1);
      saveUsers(users);
      loadUsers(document.getElementById("searchInput").value);
    }
  };

  loadUsers();
});
