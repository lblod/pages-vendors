import CodeInline from './code-inline';

<template>
  <pre><CodeInline
      ...attributes
      @language={{@language}}
    >{{yield}}</CodeInline></pre>
</template>
