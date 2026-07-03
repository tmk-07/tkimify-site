/*
  Add/edit project cards here.

  Fields:
  - name: project title shown on the card
  - description: short one-line description
  - url: live project link
  - preview: preview image path inside /assets
  - logo: optional small icon beside the project name
  - isLive: true/false status pill
*/

const projects = [
  {
    name: "Starting Five",
    description: "Draft the best team in an auction-style basketball draft",
    url: "https://startingfive.tkimify.com",
    preview: "assets/preview-starting-five-live.png",
    logo: "assets/starting-five-logo.png",
    isLive: true,
  },

  // Example for later:
  // {
  //   name: "New Project",
  //   description: "Short description goes here",
  //   url: "https://newproject.tkimify.com",
  //   preview: "assets/preview-new-project.png",
  //   logo: "assets/new-project-logo.png",
  //   isLive: false,
  // },
];

const projectGrid = document.querySelector("#projects");

function createProjectCard(project) {
  const card = document.createElement(project.url ? "a" : "article");
  card.className = "project-card";

  if (project.url) {
    card.href = project.url;
    card.target = "_blank";
    card.rel = "noreferrer";
    card.setAttribute("aria-label", `Open ${project.name}`);
  }

  card.innerHTML = `
    <div class="preview" aria-hidden="true">
      <img src="${project.preview}" alt="" loading="lazy" />
    </div>

    <div class="project-card__body">
      <div class="project-card__title-row">
        <div class="project-name">
          ${project.logo ? `<img src="${project.logo}" alt="" />` : ""}
          <h2>${project.name}</h2>
        </div>

        <span class="status ${project.isLive ? "status--live" : "status--offline"}">
          ${project.isLive ? "live" : "offline"}
        </span>
      </div>

      <p>${project.description}</p>
    </div>
  `;

  return card;
}

projectGrid.innerHTML = "";
projects.forEach((project) => {
  projectGrid.appendChild(createProjectCard(project));
});
