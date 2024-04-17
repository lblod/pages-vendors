import EmberRouter from '@ember/routing/router';
import config from 'pages-vendors/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('docs', function () {
    //Data annotaties
    this.route('meldingsplicht-annotaties');
    this.route('publicatie-annotaties');
    this.route('bijlagen-annotaties');
    this.route('leidinggevenden-annotaties');
    //Insturen
    this.route('meldingsplicht');
    this.route('berichtencentrum');
    //Opvragen
    this.route('vendor-sparql');
    this.route('meldingsplicht-sparql');
    this.route('berichtencentrum-sparql');
    this.route('rijksregisternummer-api');
    this.route('centrale-vindplaats-sparql');
  });

  this.route('route-not-found', {
    path: '/*wildcard',
  });
});
