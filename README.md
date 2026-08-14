# tkimify — Project Hub

A compact project hub showcasing apps and tools built under the `tkimify.com` domain.

**Live site:** [tkimify.com](https://tkimify.com/)

## Overview

I built this site as a public central directory for my public projects. Instead of listing plain repository links, each project is presented as a visual card with a preview image, short description, live status, and link to the deployed project.

Projects are organized into two sections:

* **Apps** — larger interactive projects and games
* **Tools** — smaller utilities, visualization tools, and independent research projects

Each project can live on its own subdomain, such as `startingfive.tkimify.com`, `synapse.tkimify.com`, or `shooters.tkimify.com`, while the main `tkimify.com` site acts as the central launch page.

## Features

* Responsive project card layout
* Apps and tools sections
* Visual preview images for each project
* Live/offline status pills
* Project-specific icons beside card titles
* Gmail footer link for contact
* Easy project editing through a simple JavaScript data array

## Technical Architecture

The site is a lightweight static project built with HTML, CSS, and vanilla JavaScript.

Project data is stored in `script.js` as a simple section-based array. Each card can be updated by editing its name, description, URL, preview image, logo, and live status.

Because the site is static, it can be deployed easily through Cloudflare Pages. When changes are pushed to GitHub, Cloudflare Pages automatically redeploys the site.

## Technology

* HTML5
* CSS3
* JavaScript
* GitHub
* Cloudflare Pages
* Custom subdomains
* Static asset hosting

## Project Structure

```text
.
├── assets/                 # Logos, preview images, and site icons
├── index.html              # Main site markup
├── script.js               # Project section/card data and rendering logic
├── styles.css              # Dark theme, layout, cards, and footer styling
└── README.md               # Project documentation
```

## Editing Project Cards

Project cards are managed in `script.js`.

Each section has an `id`, `title`, and list of `items`:

```js
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
    ],
  },
];
```

To add a new project, copy an existing object and update:

* `name`
* `description`
* `url`
* `preview`
* `logo`
* `isLive`

## Deployment

The site is deployed with Cloudflare Pages.

Typical update workflow:

```bash
git add .
git commit -m "Update tkimify site"
git push
```

Cloudflare Pages automatically rebuilds and deploys the latest version after each push.
