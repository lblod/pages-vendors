import AuApp from '@appuniversum/ember-appuniversum/components/au-app';
import AuBodyContainer from '@appuniversum/ember-appuniversum/components/au-body-container';
import AuToolbar from '@appuniversum/ember-appuniversum/components/au-toolbar';
import AuContent from '@appuniversum/ember-appuniversum/components/au-content';
import AuLink from '@appuniversum/ember-appuniversum/components/au-link';
import Footer from '../components/footer';

<template>
  <AuApp>
    <AuBodyContainer id="scroll-to-top-container" @scroll={{true}}>
      <div>
        <AuToolbar
          @reverse={{false}}
          @border="bottom"
          @skin="tint"
          @size="large"
          @nowrap={{true}}
          class="docs-sticky-back-toolbar"
        >
          <AuLink
            @route="index"
            @skin="primary"
            @icon="chevron-left"
            @iconAlignment="left"
          >
            Terug naar overzicht
          </AuLink>
        </AuToolbar>

        <AuContent
          class="au-o-region au-o-layout au-u-max-width-medium"
          @skin="default"
        >
          {{outlet}}
        </AuContent>

        <Footer />

      </div>
    </AuBodyContainer>
  </AuApp>
</template>
