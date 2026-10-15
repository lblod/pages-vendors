import AuApp from '@appuniversum/ember-appuniversum/components/au-app';
import AuBodyContainer from '@appuniversum/ember-appuniversum/components/au-body-container';
import AuContentHeader from '@appuniversum/ember-appuniversum/components/au-content-header';
import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuContent from '@appuniversum/ember-appuniversum/components/au-content';
import Footer from '../components/footer';
import * as M from '../components/menu-items';
// import Menu from '../components/menu';

<template>
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
        <div class="au-c-content au-o-region au-o-layout au-u-max-width-medium">
          <AuHeading @level="1" @skin="1">
            Gelinkt Notuleren en Loket: Vendor en API integrator documentatie
          </AuHeading>
          <p class="au-u-para-lead au-u-margin-top">
            Integreer met systemen van Gelinkt Notuleren en Loket. Deze
            documentatie wordt verder aangevuld naarmate er meer API's
            beschikbaar zijn, en naarmate er meer vereisten gedefinieerd worden.
          </p>
        </div>
        <section class="au-u-background-gray-100 au-o-region">
          <div class="au-c-content au-o-layout au-u-max-width-medium">
            <AuHeading @level="2" @skin="2">
              Meldingsplicht
            </AuHeading>

            <!--TODO: Intro-->

            <AuHeading @level="3" @skin="3">
              Structureren van RDF documenten
            </AuHeading>

            <!--TODO: description-->

            <M.MenuGrid>
              <M.meldingsplicht_annotaties />
              <M.publicatie_annotaties />
              <M.bijlagen_annotaties />
              <M.besluit_publicatie_external />
            </M.MenuGrid>

            <!--TODO: doel, en flow van gegevens-->

            <AuHeading @level="3" @skin="3">
              Insturen
            </AuHeading>
            <M.MenuGrid>
              <M.meldingsplicht />
            </M.MenuGrid>

            <AuHeading @level="3" @skin="3">
              Opvragen
            </AuHeading>
            <M.MenuGrid>
              <M.vendor_sparql />
              <M.meldingsplicht_sparql />
              <M.erediensten_toezichtsdatabank_sparql />
            </M.MenuGrid>

            <AuHeading @level="3" @skin="3">
              Refereren tussen documenten
            </AuHeading>
            <M.MenuGrid>
              <M.documenten_refereren />
            </M.MenuGrid>

            <AuHeading @level="2" @skin="2">
              Berichtencentrum
            </AuHeading>
            <p class="au-u-para-lead">
              Lokale besturen en ABB kunnen beveiligde berichten uitwisselen. Het Loket voor Lokale Besturen biedt een API aan waarop deze functionaliteit geïntegreerd kan worden in beide richtingen.
            </p>

            <AuHeading @level="3" @skin="3">
              Insturen
            </AuHeading>
            <p>
              Als antwoord op een bestaand bericht uit een bestaande conversatie kan een nieuw bericht worden <em>gemeld</em>. Als externe partij wordt gevraagd om een bericht op het web ter beschikking te stellen als een RDFa document, eventueel met bijlagen. Dit kan achter beveiligde toegang, zodat het document niet publiek toegankelijk hoeft te zijn. Vervolgens moeten de URL, en authenticatiemethode worden ingezonden in Loket, zodat Loket het bericht kan crawlen. Onderstaand document beschrijft in meer detail hoe dit verloopt.
            </p>
            <M.MenuGrid>
              <M.berichtencentrum />
            </M.MenuGrid>

            <AuHeading @level="3" @skin="3">
              Opvragen
            </AuHeading>
            <p>
              Vanuit ABB wordt een conversatie gestart en een bericht in de conversatie geplaatst, met een bestuur als bestemmeling. Als bestuur krijg je de mogelijkheid om dit bericht te lezen, en een antwoord te formuleren, eventueel met bijlage. Als externe partij is het mogelijk om periodiek berichten op te halen voor het gebruik ervan in eigen applicaties. Dit gebeurt door middel van een beveiligde SPARQL API. Lees in het eerste document hieronder in het algemeen hoe een beveiligde SPARQL API werkt, en lees in het tweede document verder hoe dit concreter kan worden toegepast om berichten uit het Berichtencentrum op Loket uit te lezen.
            </p>
            <M.MenuGrid>
              <M.vendor_sparql />
              <M.berichtencentrum_sparql />
            </M.MenuGrid>

            <AuHeading @level="2" @skin="2">
              Overige applicatieprofielen
            </AuHeading>
            <M.MenuGrid>
              <M.mandaten_annotaties />
              <M.leidinggevenden_annotaties />
            </M.MenuGrid>

            <AuHeading @level="2" @skin="2">
              Overige data endpoints
            </AuHeading>
            <M.MenuGrid>
              <M.rijksregisternummer_api />
              <M.centrale_vindplaats_sparql />
              <M.publicatie_feed />
            </M.MenuGrid>
          </div>
        </section>
      </AuContent>
      <Footer />
    </AuBodyContainer>
  </AuApp>
</template>
