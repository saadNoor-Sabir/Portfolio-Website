// When Html Content is loaded this Function works

document.addEventListener("DOMContentLoaded", () => {
  // Load Basic Profile Content Blocks
  document.getElementById("about-intro").textContent = profile.aboutIntro;
  document.getElementById("about-desc").textContent =
    `I am Computer Science Student Based in ${profile.location} ${profile.personalIntro} in Future I am willing to ${profile.careerGoals}`;

  // Generate Academic Timeline Elements Mapping
  const eduContainer = document.getElementById("education-injection-target");
  eduContainer.innerHTML = educationData
    .map(
      (edu) => `
       <div class="col-md-6">
    <div class="mb-4 h-100 p-3 bg-white border rounded shadow-sm">
      <div class="d-flex justify-content-between align-items-center flex-wrap mb-2">
        <h5 class="text-primary fw-bold mb-2">${edu.degree}</h5>
        <span class="badge bg-secondary font-monospace px-3" style="font-size: 0.85em;">
  ${edu.duration}
</span>
      </div>
      <h6 class="text-dark text-muted fw-semibold mb-2">${edu.institute}</h6>
      <p class="text-secondary mb-0">${edu.description}</p>
    </div>
    </div>
  `,
    )
    .join("");
});
