window.toggleMenu = function(menuId) {
  const submenu = document.getElementById(`submenu-${menuId}`);
  const arrow = document.getElementById(`arrow-${menuId}`);

  if (submenu && arrow) {
    submenu.classList.toggle("show"); // 🔁 Ganti dari "active" ke "show"
    arrow.classList.toggle("rotate");
  }
};

