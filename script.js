// ========== Smooth Scrolling for Navbar Links ==========
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", event => {
    // Prevent default link jump
    if (link.getAttribute("href").includes("#")) {
      event.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 10,
          behavior: "smooth"
        });
      }
    }
  });
});

// ========== Simple Alert on Successful Form Submission ==========
function formSubmitted() {
  alert("Thank you for contacting us! We will get back to you shortly.");
}
