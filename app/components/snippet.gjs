import MyCodeBlock from './my-code-block';
import { getCodeSnippet } from 'ember-code-snippet';

<template>
  {{#let (getCodeSnippet @snippetFilename) as |snippet|}}
    <MyCodeBlock @language={{snippet.language}}>{{snippet.source}}</MyCodeBlock>
  {{/let}}
</template>
