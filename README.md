# tkimify Project Directory

A compact static homepage for linking to project subdomains like `startingfive.tkimify.com`.

## Edit projects

Open `script.js` and edit the `projects` array:

```js
{
  name: "Starting Five",
  description: "Draft the best team in an auction-style basketball draft",
  url: "https://startingfive.tkimify.com",
  preview: "assets/preview-starting-five-live.png",
  logo: "assets/starting-five-logo.png",
  isLive: true,
}
```

To add another card, copy that object, paste it below, and change:

- `name`
- `description`
- `url`
- `preview`
- `logo` if the project has its own icon
- `isLive`

Put new images in the `assets/` folder and reference them as `assets/your-file-name.png`.

## Deploy to a real domain

This is a static site, so it can be hosted on Cloudflare Pages, Vercel, Netlify, GitHub Pages, or any basic web host.

For Cloudflare Pages:

1. Upload these files to a GitHub repo.
2. In Cloudflare Pages, create a new project from that repo.
3. Use no build command.
4. Set the output directory to `/` or leave it blank, depending on the Cloudflare UI.
5. Add your custom domain, such as `tkimify.com`, in Cloudflare Pages.
6. Keep project apps on subdomains like `startingfive.tkimify.com`.

## Preview screenshots

The current Starting Five card uses a saved screenshot image. Browsers cannot reliably take live screenshots of another site from static frontend code.

Best setup later: use a GitHub Action with Playwright to screenshot each live subdomain and save the image into `assets/` during deploy.
