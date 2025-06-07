// theme-toggle.js

const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Load theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggleButton.textContent = "☀️";
}

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  toggleButton.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Lightbox and Upload
document.addEventListener("DOMContentLoaded", function () {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const photoGrid = document.getElementById("photo-grid");
  const uploadInput = document.getElementById("upload-input");

  // Lightbox open
  photoGrid.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
      lightboxImg.src = e.target.src;
      lightbox.style.display = "flex";
    }
  });

  // Lightbox close
  lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Upload Images
  uploadInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = function (event) {
        const item = document.createElement("div");
        item.className = "photo-item";

        const img = document.createElement("img");
        img.src = event.target.result;

        const link = document.createElement("a");
        link.href = event.target.result;
        link.download = "image";
        link.className = "download-btn";
        link.textContent = "⬇";

        item.appendChild(img);
        item.appendChild(link);
        photoGrid.prepend(item);
      };
      reader.readAsDataURL(file);
    });
  });
});
