import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'pages-vendors/config/environment';

export default class ApplicationRoute extends Route {
  @service plausible;

  async beforeModel() {
    this.startAnalytics();
  }

  startAnalytics() {
    let { domain, apiHost } = ENV.plausible;

    if (
      domain !== '{{ANALYTICS_APP_DOMAIN}}' &&
      apiHost !== '{{ANALYTICS_API_HOST}}'
    ) {
      this.plausible.enable({
        domain,
        apiHost,
        hashMode: true,
      });
    }
  }
}
