import AuApp from '@appuniversum/ember-appuniversum/components/au-app';
import AuBodyContainer from '@appuniversum/ember-appuniversum/components/au-body-container';
import AuToolbar from '@appuniversum/ember-appuniversum/components/au-toolbar';
import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuContent from '@appuniversum/ember-appuniversum/components/au-content';
import AuLink from '@appuniversum/ember-appuniversum/components/au-link';
import Menu from '../components/menu';
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

        <AuToolbar
          @reverse={{false}}
          @border="top"
          @skin="tint"
          @size="large"
          @nowrap={{true}}
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

        <section class="au-u-background-gray-100">
          <div class="au-o-layout">
            <AuHeading @level="2" @skin="2">
              Beschikbare documentatie
            </AuHeading>
            <Menu @fullSize={{false}} />
          </div>
        </section>

        <Footer />

      </div>
    </AuBodyContainer>
  </AuApp>
</template>
