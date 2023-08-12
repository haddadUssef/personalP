document.addEventListener("DOMContentLoaded", function () {
  const menuCheckbox = document.querySelector(".menu-icon");
  const menuItems = document.querySelectorAll(".nav ul li a");

  menuItems.forEach(function (item) {
    item.addEventListener("click", function (event) {
      // Uncheck the menu checkbox to close the menu
      menuCheckbox.checked = false;

      // Prevent the default behavior (e.g., jumping to the top of the page)
      event.preventDefault();
    });
  });
});
