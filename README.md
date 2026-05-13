# Shaocheng (Leno) Wu Personal Website

This is a static personal website. Open `index.html` in a browser to view it.

Current assets:

- `assets/leno-profile-photo.jpg`: web-ready profile photo.
- `assets/shaocheng-leno-wu-cv.pdf`: downloadable comprehensive CV.
- `index.html`: homepage content and structure.
- `styles.css`: visual design and responsive layout.
- `script.js`: navigation and section highlighting.

No build step is required.

## Put It Online With GitHub Pages

1. Create a new GitHub repository, for example `leno-website`.
2. Upload everything in this folder to that repository:
   `index.html`, `styles.css`, `script.js`, `assets/`, and `.nojekyll`
3. In GitHub, open the repository settings.
4. Open `Pages`.
5. Under `Build and deployment`, choose:
   `Source` = `Deploy from a branch`
6. Choose:
   `Branch` = `main`
   `Folder` = `/ (root)`
7. Save and wait for GitHub to publish the site.

Your site URL will usually be:

`https://YOUR_GITHUB_USERNAME.github.io/REPOSITORY_NAME/`

Example:

`https://yourname.github.io/leno-website/`

## Why `.nojekyll` Is Included

GitHub Pages sometimes runs Jekyll by default. This site does not need Jekyll, so `.nojekyll` tells GitHub Pages to serve the files directly as a plain static website.
