/*
  Edit cards here.

  Section fields:
  - id: page anchor, like #apps
  - title: section heading
  - items: cards inside that section

  Card fields:
  - name
  - description
  - url
  - preview
  - logo
  - isLive
*/

const sections = [
  {
    id: "apps",
    title: "apps",
    items: [
      {
        name: "Starting Five",
        description: "Draft the best team in an auction-style basketball draft",
        url: "https://startingfive.tkimify.com",
        preview: "assets/preview-starting-five-live.png",
        logo: "assets/starting-five-logo.png",
        isLive: true,
      },
      {
        name: "Synapse",
        description: "Mental math game with in-depth analysis of your strengths and weaknesses",
        url: "https://synapse.tkimify.com",
        preview: "assets/preview-synapse.png",
        logo: "assets/synapse-logo.jpg",
        isLive: true,
      },
      {
        name: "Sample App",
        description: "Placeholder for the next interactive app",
        url: "#",
        preview: "assets/preview-nba.svg",
        logo: "",
        isLive: false,
      },
    ],
  },
  {
    id: "tools",
    title: "tools",
    items: [
      {
        name: "Basketball Shot Tracker",
        description: "Quick way to keep track of your makes and misses in a shooting session",
        url: "https://shooters.tkimify.com/",
        preview: "assets/preview-shot-tracker.png",
        logo: "assets/shot-tracker-logo.png",
        isLive: true,
      },
      {
        name: "Sample Tool Two",
        description: "Placeholder for another useful tkimify tool",
        url: "#",
        preview: "assets/preview-nfl.svg",
        logo: "",
        isLive: false,
      },
    ],
  },
];

const sectionsRoot = document.querySelector("#project-sections");

function createProjectCard(project) {
  const isLinked = project.url && project.url !== "#";
  const card = document.createElement(isLinked ? "a" : "article");
  card.className = "project-card";

  if (isLinked) {
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

function createSection(section) {
  const sectionEl = document.createElement("section");
  sectionEl.className = "project-section";
  sectionEl.id = section.id;
  sectionEl.setAttribute("aria-labelledby", `${section.id}-heading`);

  sectionEl.innerHTML = `
    <div class="section-heading">
      <h1 id="${section.id}-heading">${section.title}</h1>
    </div>
    <div class="project-grid"></div>
  `;

  const grid = sectionEl.querySelector(".project-grid");

  section.items.forEach((project) => {
    grid.appendChild(createProjectCard(project));
  });

  return sectionEl;
}

if (sectionsRoot) {
  sectionsRoot.innerHTML = "";
  sections.forEach((section) => {
    sectionsRoot.appendChild(createSection(section));
  });
}
