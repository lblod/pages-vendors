import Prism from 'prismjs';
import Component from '@glimmer/component';
import { modifier } from 'ember-modifier';

export default class CodeInline extends Component {
  get language() {
    return this.args.language ?? 'markup';
  }

  get languageClass() {
    return `language-${this.language}`;
  }

  highlight = modifier((element) => {
    Prism.highlightElement(element);
  });

  <template>
    <code
      ...attributes
      class="{{this.languageClass}}"
      {{this.highlight}}
    >{{yield}}</code>
  </template>
}
