import { pageTitle } from 'ember-page-title';
import AuApp from '@appuniversum/ember-appuniversum/components/au-app';
import AuBodyContainer from '@appuniversum/ember-appuniversum/components/au-body-container';
import AuContentHeader from '@appuniversum/ember-appuniversum/components/au-content-header';
import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuContent from '@appuniversum/ember-appuniversum/components/au-content';
import Menu from '../components/menu';
import Footer from '../components/footer';

<template>
  {{pageTitle "Index"}}
  <AuApp>
    <AuBodyContainer @scroll={{true}}>
      <AuContentHeader
        @titlePartOne="Vlaanderen"
        @titlePartTwo="is lokaal bestuur"
        @pictureSize="default"
      >
        <img
          sizes="50vw"
          src="assets/images/loket-header-1600.jpg"
          alt="Foto van een laptop met daarop het vlaanderen logo."
        />
      </AuContentHeader>
      <AuContent @skin="default">
        <div class="au-o-region au-o-layout au-u-max-width-medium">
          <AuHeading @level="1" @skin="1">
            Gelinkt Notuleren en Loket: Vendor en API integrator documentatie
          </AuHeading>
          <p class="au-u-para-lead au-u-margin-top">
            Integreer met systemen van Gelinkt Notuleren en Loket. Deze
            documentatie wordt verder aangevuld naarmate er meer API's
            beschikbaar zijn, en naarmate er meer vereisten gedefinieerd worden.
          </p>
        </div>
        <section class="au-u-background-gray-100 au-o-region au-o-region-large">
          <div class="au-o-layout au-o-layout--large">
            <AuHeading @level="2" @skin="2">
              Beschikbare documentatie
            </AuHeading>
            <Menu @fullSize={{true}} />
          </div>
        </section>
      </AuContent>
      <Footer />
    </AuBodyContainer>
  </AuApp>
</template>
