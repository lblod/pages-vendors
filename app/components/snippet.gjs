import CodeBlock from './code-block';
import { getCodeSnippet } from 'ember-code-snippet';

<template>
  {{#let (getCodeSnippet @snippetFilename) as |snippet|}}
    <CodeBlock
      @language={{if @languageoverride @languageoverride snippet.language}}
    >{{snippet.source}}</CodeBlock>
  {{/let}}
</template>
