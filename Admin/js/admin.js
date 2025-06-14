function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("hidden");
}
function toggleMenu(menuId) {
  const submenu = document.getElementById("submenu-" + menuId);
  const arrow = document.getElementById("arrow-" + menuId);
  submenu.classList.toggle("show");
  arrow.classList.toggle("rotate");
}

// Tandai link aktif
const currentPath = window.location.pathname.split("/").pop();
const allLinks = document.querySelectorAll(".menu a");

allLinks.forEach((link) => {
  if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");

    const submenu = link.closest(".submenu");
    if (submenu) {
      submenu.classList.add("show");
      const menuId = submenu.id.split("-")[1];
      const arrow = document.getElementById("arrow-" + menuId);
      if (arrow) arrow.classList.add("rotate");
    }
  }
});
