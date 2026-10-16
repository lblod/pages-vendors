# pages-vendors

Contents of https://lblod.github.io/pages-vendors/, which contains Vendor and
API integrator documentation related to the LBLOD project.

## Prerequisites

You will need the following things properly installed on your computer.

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (with npm)
- [Google Chrome](https://google.com/chrome/)

## Installation

- `git clone <repository-url>` this repository
- `cd pages-vendors`
- `npm install`

To run the diagram generation, you will need installed on you system:

- `sed`
- GraphViz `dot`
- GNU `make`

## Running / Development

**Optional step:** run the diagram generation. Not needed if you haven't made
changes to the diagram source. Do this with

`make all`

in the `DiagramsSource` folder.

Then, run the app live with Vite using:

- `npm run start`
- Visit your app at
  [http://localhost:4200/](http://localhost:4200/).
- Visit your tests at
  [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `npm exec ember help generate` for more details

### Running Tests

- `npm run test`

### Linting

- `npm run lint`
- `npm run lint:fix`

### Building

- `npm run build_development` (development)
- `npm run build` (production)

If you have made a build for development or production, and you want to test
with a simple file web server, then you need a hack. The set-up for Vite, in
combination with what is expected for Github Pages, is a little broken. In the
`/dist` folder, copy all the files and folders and place copies in a new
`/dist/pages-vendors` folder. Then start your favourite simple web server and
navigate to it like normal. You have to do this because Vite is configured to
serve assets from a `pages-vendors` folder, to match the way Github Pages hosts
these files. The reason this hack works is because it makes all files available
on the root *and* the prefixed path, so it is always going to find what it
wants.

### Deploying

This application is hosted on GitHub by committing a new build to the `gh-pages`
branch. There exist tools to automate the process, but they have consistently
been broken. Instead, we use a manual process that is luckily not too
difficult:

- Make sure you have re-built the diagrams if you have made changes to them
  - `make all` in the `DiagramsSource` folder (see above)
- Run a production build: `npm run build`
  - Built files are now in the `dist` folder
- Checkout the `gh-pages` branch: `git switch gh-pages`
  - Double-check you are on `gh-pages` before copying anything
    (`git branch --show-current`). Copying while on a source branch commits
    build output into the source tree.
- Move and _replace_ the built files from the `dist` folder into the branch
  root
  - Only replace these files/folders:
    - `@appuniversum`
    - `@embroider`
    - `assets`
    - `videos`
    - `index.html`
    - `robots.txt`
  - You can use these commands from the root:
    - `rm -rf \@appuniversum/ \@embroider/ assets/ videos/ index.html robots.txt`
    - `cp -r dist/\@appuniversum/ dist/\@embroider/ dist/assets/ dist/videos/ dist/index.html dist/robots.txt .`
- Make sure there still is the (empty) `.nojekyll` file
- Add only the above files/folders to a Git commit
- Commit with a message for the new deploy and push

Hopefully, your new changes are now hosted on [the public
pages](https://lblod.github.io/pages-vendors/).

## Further Reading / Useful Links

- [ember.js](https://emberjs.com/)
- [Vite](https://vite.dev)
- Development Browser Extensions
  - [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  - [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
