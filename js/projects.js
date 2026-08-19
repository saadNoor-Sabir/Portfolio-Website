document.addEventListener("DOMContentLoaded", () => {
  const gridTarget = document.getElementById("projects-render-grid");

  // Loop map projects array out to create card components
  gridTarget.innerHTML = projectsData
    .map(
      (project) => `
    <div class="col-md-6 col-lg-4">
      <div class="card h-100 shadow-sm border-0 rounded overflow-hidden">
        <img src="${project.image}" class="card-img-top" alt="${project.title}" style="height: 200px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <span class="badge bg-primary align-self-start mb-2">${project.category}</span>
          <h5 class="card-title fw-bold text-dark">${project.title}</h5>
          <p class="card-text text-muted small flex-grow-1">${project.shortDesc}</p>
          <div class="mb-3 text-secondary font-monospace small">
            ${project.technologies
              .slice(0, 3)
              .map(
                (tech) =>
                  `<span class="me-1 border px-1.5 py-0.5 rounded bg-light">${tech}</span>`,
              )
              .join("")}
          </div>
          <button class="btn btn-outline-primary btn-sm w-100 fw-bold" onclick="launchModalDetails(${project.id})">
            View Details <i class="fa-solid fa-up-right-from-square ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  // skills section js

  const skillsAboutContainer = document.getElementById("about-skills-target");
  skillsAboutContainer.innerHTML = skillsData
    .map(
      (skill) => `
    <div class="col-12 mb-3">
      <div class="d-flex justify-content-between mb-1">
        <span class="fw-semibold text-dark small">${skill.name}</span>
        <span class="text-muted font-monospace small fw-bold">${skill.percentage}</span>
      </div>
      <div class="progress" style="height: 6px; background-color: #e9ecef;">
        <div 
          class="progress-bar bg-primary" 
          role="progressbar" 
          style="width: ${skill.percentage}; transition: width 1s ease-in-out;" 
          aria-valuenow="${parseInt(skill.percentage)}" 
          aria-valuemin="0" 
          aria-valuemax="100">
        </div>
      </div>
    </div>
  `,
    )
    .join("");
});

// Interactive dynamic injection function triggered by the button click event listener
function launchModalDetails(projectId) {
  // Query targeted element by index tracking code id keys
  const targetProject = projectsData.find((item) => item.id === projectId);
  if (!targetProject) return;

  const modalShellNode = document.getElementById("modal-content-injector");

  // Inject full template literal text payload direct to the dynamic modal wrapper structure
  modalShellNode.innerHTML = `
    <div class="modal-header bg-dark text-white">
      <h5 class="modal-title fw-bold" id="modalLabel">${targetProject.title}</h5>
      <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body p-4">
      <img src="${targetProject.image}" class="img-fluid rounded mb-4 w-100 shadow-sm" style="max-height: 350px; object-fit: cover;" alt="${targetProject.title}">
      <h6 class="fw-bold text-primary">Overview Description</h6>
      <p class="text-secondary lh-lg mb-4">${targetProject.fullDesc}</p>
      
      <h6 class="fw-bold text-success">Key System Features</h6>
      <ul class="mb-4 text-muted">
        ${targetProject.features.map((feat) => `<li class="mb-1">${feat}</li>`).join("")}
      </ul>

      <h6 class="fw-bold text-warning">Tech Stack Utilized</h6>
      <div class="mb-3">
        ${targetProject.technologies.map((tech) => `<span class="badge bg-light text-dark border me-2 py-2 px-3">${tech}</span>`).join("")}
      </div>
    </div>
    <div class="modal-footer bg-light justify-content-between">
      <span class="text-muted small">Category Focus: <strong>${targetProject.category}</strong></span>
      <div class="d-flex gap-2">
        <a href="${targetProject.githubLink}" target="_blank" class="btn btn-dark btn-sm"><i class="fa-brands fa-github me-1"></i> Repository</a>
        <a href="${targetProject.liveDemo}" target="_blank" class="btn btn-success btn-sm"><i class="fa-solid fa-globe me-1"></i> Live Demo</a>
      </div>
    </div>
  `;

  // Trigger the Bootstrap Modal view engine execution tracking states
  const bsModalInstance = new bootstrap.Modal(
    document.getElementById("projectDetailsModal"),
  );
  bsModalInstance.show();
}
