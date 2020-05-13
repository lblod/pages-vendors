import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('docs', function() {
    this.route('submission-api');
    this.route('submission-annotations');
    this.route('publication-annotations');
    this.route('leidinggevenden');
    this.route('rijksregisternummer-api');
  });
  this.route('sparql-endpoint');
});

export default Router;
