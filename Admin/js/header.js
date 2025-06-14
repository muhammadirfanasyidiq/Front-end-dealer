Promise.all([
  fetch("componen/sidebar.html").then((res) => res.text()),
  fetch("componen/header.html").then((res) => res.text()),
]).then(([sidebarData, headerData]) => {
  document.getElementById("sidebar").innerHTML = sidebarData;
  document.getElementById("header").innerHTML = headerData;

  // 🟢 Pasang role di sini
  const userData = sessionStorage.getItem("userData");
  if (userData) {
    const user = JSON.parse(userData);
    const role = user.role.charAt(0).toUpperCase() + user.role.slice(1);
    const adminBtn = document.getElementById("adminBtn");
    if (adminBtn) {
      adminBtn.textContent = `👤 ${role} ▾`;
    }
  }

  // ✅ Tambahkan handler toggle sidebar
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  if (menuToggle && sidebar) {
    menuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }

  // Hapus class loading
  document.body.classList.remove("layout-loading");
});
