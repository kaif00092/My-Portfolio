const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const listItems = document.querySelectorAll(".nav-links li a");

listItems.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

const cvButton = document.querySelector("#CV");
cvButton.addEventListener("click", () => {
  const pdfURL = "assets/Mohd_Kaif_Arshad_Resume__.pdf";
  window.open(pdfURL, "_blank");
});

const contactButton = document.querySelector("#cont");
contactButton.addEventListener("click", () => {
  window.open("mailto:Kaifarshad07@gmail.com");
});

const social = document.querySelector(".git");

social.addEventListener("click", () => {
  // Check if the URL starts with "www."
  const gitUrl = "https://github.com/kaif00092";
  if (gitUrl.startsWith("https://")) {
    window.open(gitUrl, "_blank");
  }
});
const social1 = document.querySelector(".linkd");

social1.addEventListener("click", () => {
  const linkurl = "https://www.linkedin.com/in/mohd-kaif-arshad-12a160258";

  // Open the URL in a new tab without the unnecessary check
  window.open(linkurl, "_blank");
});

const gitBtn = document.querySelector(".visit-btn");

gitBtn.addEventListener("click", () => {
  const gitUrl1 = "https://github.com/kaif00092";
  if (gitUrl1.startsWith("https://")) {
    window.open(gitUrl1, "_blank");
  }
});
