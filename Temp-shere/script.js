document.addEventListener("DOMContentLoaded", () => {
  const realSelect = document.getElementById("expiry");

  // Create wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "select-wrapper";

  // Create display box
  const display = document.createElement("div");
  display.className = "select-display";
  display.innerHTML = `
    <span class="text">${
      realSelect.options[realSelect.selectedIndex].text
    }</span>
    <span class="arrow"></span>
  `;

  // Create dropdown
  const optionBox = document.createElement("div");
  optionBox.className = "select-options";

  // Add options
  [...realSelect.options].forEach((opt) => {
    const item = document.createElement("div");
    item.className = "select-option";
    item.textContent = opt.text;

    item.addEventListener("click", () => {
      // Update UI
      display.querySelector(".text").textContent = opt.text;

      // Update real select value
      realSelect.value = opt.value;

      wrapper.classList.remove("open");
    });

    optionBox.appendChild(item);
  });

  wrapper.appendChild(display);
  wrapper.appendChild(optionBox);

  // Insert before real select
  realSelect.parentNode.insertBefore(wrapper, realSelect);

  // Toggle dropdown
  display.addEventListener("click", () => {
    wrapper.classList.toggle("open");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!wrapper.contains(e.target)) {
      wrapper.classList.remove("open");
    }
  });
});
