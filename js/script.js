const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav-links a").forEach(link => {
  const href = link.getAttribute("href");
  if (!href) return;

  const targetPage = href.split("/").pop();
  if (targetPage === currentPage) {
    link.classList.add("active");
  }
});
function copyDiscord() {
    const username = "yurielvillanueva";

    navigator.clipboard.writeText(username).then(() => {
        alert("Discord username copied!");
    });
}