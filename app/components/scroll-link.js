import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ScrollLinkComponent extends Component {
  @action
  performScroll(event) {
    const element = document.getElementById(this.args.scrollToId);
    if (element) element.scrollIntoView();
    event.preventDefault();
  }
}
