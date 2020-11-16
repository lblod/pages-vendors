import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class SnippetToggleComponent extends Component {
  @tracked showSnippet = false;

  @action
  toggleSnippetVisbility() {
    this.showSnippet = ! this.showSnippet;
  }
}
