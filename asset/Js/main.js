document.getElementById("logoutBtn").addEventListener("click", function (e) {
  e.preventDefault(); // Cegah reload halaman

  // Hapus token dari sessionStorage
  sessionStorage.removeItem("token");

  // (Opsional) redirect ke halaman login atau landing
  window.location.href = "login.html";
});
