const nameElement = document.getElementById("dev-name");
const nameText = profile.name; // Put your actual name here!
let index = 0;
function typeName() {
  if (index < nameText.length) {
    nameElement.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeName, 120);
  }
}
const statusElement = document.getElementById("dev-status");
statusElement.textContent = profile.status;
const shortBioElement = document.getElementById("dev-short-bio");
shortBioElement.textContent = profile.ShortBio;
const myProfileImage = document.getElementById("my-profile-image");
myProfileImage.setAttribute("src", profile.profileImage)
document.addEventListener("DOMContentLoaded", typeName);
// Script 2: Navbar Class Toggle on Scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
