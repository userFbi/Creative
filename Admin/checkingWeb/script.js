const users = [
  {
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Rohit Sharma",
    number: "+91 9876543210",
    address: "Mumbai, India",
    info: "Loves cricket and traveling.",
    online: true
  },
  {
    img: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Pooja Desai",
    number: "+91 9123456780",
    address: "Pune, India",
    info: "Web developer and food blogger.",
    online: false
  },
  {
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Ajay Kumar",
    number: "+91 9988776655",
    address: "Delhi, India",
    info: "Photographer and hiker.",
    online: true
  }
];

const container = document.getElementById("userContainer");

users.forEach(user => {
  const onlineBadge = user.online
    ? `<span class="badge bg-success position-absolute top-0 end-0 m-2">Online</span>`
    : `<span class="badge bg-secondary position-absolute top-0 end-0 m-2">Offline</span>`;

  const onlineClass = user.online ? "online-card" : "";

  const card = `
    <div class="col-md-4 mb-4">
      <div class="card position-relative ${onlineClass}">
        ${onlineBadge}
        <img src="${user.img}" class="card-img-top" alt="${user.name}">
        <div class="card-body">
          <h5 class="card-title">${user.name}</h5>
          <p class="card-text"><strong>Phone:</strong> ${user.number}</p>
          <p class="card-text"><strong>Address:</strong> ${user.address}</p>
          <p class="card-text"><em>${user.info}</em></p>
        </div>
      </div>
    </div>`;
  container.innerHTML += card;
});
