import EmberRouter from '@ember/routing/router';
import config from 'pages-vendors/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('docs', function() {
    this.route('submission-api');
    this.route('submission-annotations');
    this.route('publication-annotations');
    this.route('leidinggevenden');
    this.route('rijksregisternummer-api');
    this.route('sparql-endpoint');
    this.route('decision-attachments');
  });

  this.route('route-not-found', {
    path: '/*wildcard'
  });
});
