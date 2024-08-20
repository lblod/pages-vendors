# pages-vendors

Contents of https://lblod.github.io/pages-vendors/, which contains Vendor and
API integrator documentation related to the LBLOD project.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd pages-vendors`
* `npm install`

To run the diagram generation, you will need installed on you system:

* `sed`
* GraphViz `dot`
* GNU `make`

## Running / Development

**Optional step:** run the diagram generation. Not needed if you haven't made
changes to the diagram source. Do this with

  `make all`

in the `DiagramsSource` folder.

* `ember serve`
* Visit your app at
  [http://localhost:4200/pages-vendors/](http://localhost:4200/pages-vendors/).
* Visit your tests at
  [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more
details

### Linting

* `npm run lint`
* `npm run lint:fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

This application is hosted on GitHub by commiting a new build to the `gh-pages`
branch. There exist tools to automate the process, but they have consistently
been broken. Instead, we use a manual process that is luckily not too
difficult:

* Make sure you have re-built the diagrams if you have made changes to them
  - `make all` in the `DiagramsSource` folder (see above)
* Run a production build: `ember build --environment production`
  - Built files are now in the `dist` folder
* Checkout the `gh-pages` branch: `git switch gh-pages`
* Move and replace the following files from the `dist` folder into the branch
  root:
  - `@appuniversum`
  - `assets`
  - `index.html`
  - `robots.txt`
  
  You can use these commands from the root:
  - `rm -rf \@appuniversum/ assets/ index.html robots.txt`
  - `cp -r dist/\@appuniversum/ dist/assets/ dist/index.html dist/robots.txt .`
* Make sure there still is the (empty) `.nojekyll` file
* Add only the above files/folders to a Git commit
* Commit with a message for the new deploy and push

Hopefully, your new changes are now hosted on [the public
pages](https://lblod.github.io/pages-vendors/).

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://cli.emberjs.com/release/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
