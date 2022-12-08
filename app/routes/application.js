import Route from '@ember/routing/route';
import { setup } from 'ember-prism';

export default class ApplicationRoute extends Route {
  beforeModel() {
    setup();
  }
}
