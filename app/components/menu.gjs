import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuCard from '@appuniversum/ember-appuniversum/components/au-card';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import AuLink from '@appuniversum/ember-appuniversum/components/au-link';

export default <template>
  <AuHeading @level="3" @skin="3" class="au-u-margin-top">Structuur</AuHeading>
  <nav class="au-u-padding-top au-u-padding-bottom au-o-grid au-o-grid--small">
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="pencil"
      @route="docs.meldingsplicht-annotaties"
      @title="Annotaties voor automatische meldingen"
      @content="Annotaties die gebruikt worden bij automatische meldingen van besluiten en documenten."/>
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="pencil"
      @route="docs.publicatie-annotaties"
      @title="Annotaties voor publicaties"
      @content="Annotaties die gebruikt worden bij de publicatie van Besluiten en documenten opdat ze automatisch geharvest kunnen worden."/>
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="pencil"
      @route="docs.bijlagen-annotaties"
      @title="Annotaties voor bijlagen bij een Besluit"
      @content="Beschrijft hoe verschillende soorten bijlagen bij een besluit geannoteerd kunnen worden."/>
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="pencil"
      @href="https://data.vlaanderen.be/doc/applicatieprofiel/besluit-publicatie/"
      @title="Besluit Publicatie"
      @content="Dit applicatieprofiel definieert een specificatie voor de publicatie van notulen en besluiten van bestuursorgaan."
      @external={{true}}/>
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="pencil"
      @route="docs.mandaten-annotaties"
      @title="Mandatendatabank"
      @content="Dit applicatieprofiel definieert een specificatie voor een gelinkte mandatendatabank op basis van gelinkte besluiten."/>
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="pencil"
      @route="docs.leidinggevenden-annotaties"
      @title="Leidinggevendendatabank"
      @content="De leidinggevenden databank volgt het applicatieprofiel mandatendatabank, maar werd uitgebreid met enkele subklassen en eigenschappen."/>
  </nav>

  <AuHeading @level="3" @skin="3" class="au-u-margin-top">Insturen</AuHeading>
  <nav class="au-u-padding-top au-u-padding-bottom au-o-grid au-o-grid--small">
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="upload"
      @route="docs.meldingsplicht"
      @title="Meldingsplicht API"
      @content="Deel van een API om een nieuwe melding aan te maken in Loket voor Lokale Besturen op basis van een publicatie. Indien al de nodige velden ingevuld zijn, kan de melding automatisch verzonden worden."/>
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="upload"
      @route="docs.berichtencentrum"
      @title="Berichtencentrum API"
      @subtitle="[CONCEPT]"
      @content="Deel van een API om de module Berichtencentrum te integreren. Het opsturen van berichten door middel van het publiceren van een RDFa document en het melden van de publieke URL."/>
  </nav>

  <AuHeading @level="3" @skin="3" class="au-u-margin-top">Opvragen</AuHeading>
  <nav class="au-u-padding-top au-u-padding-bottom au-o-grid au-o-grid--small">
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.vendor-sparql"
      @title="Vendor SPARQL API"
      @content="Generieke documentatie voor het uitvoeren van SPARQL query's via de Vendor SPARQL API, van toepassing op verscheidene applicaties."/>
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.meldingsplicht-sparql"
      @title="Meldingsplicht SPARQL API"
      @subtitle="[CONCEPT]"
      @content="Het opvragen van statusgegevens over eerder uitgevoerde meldingen in Loket via de Vendor SPARQL API."/>
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.berichtencentrum-sparql"
      @title="Berichtencentrum SPARQL API"
      @subtitle="[CONCEPT]"
      @content="Het opvragen van Berichten en Conversaties in Loket met oog op integratie via de Vendor SPARQL API."/>
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.erediensten-toezichtsdatabank-sparql"
      @title="Erediensten Toezichtsdatabank SPARQL API"
      @subtitle="[CONCEPT]"
      @content="Het opvragen van Besluiten over Erediensten via de Vendor SPARQL API."/>
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.rijksregisternummer-api"
      @title="Rijksregisternummer naar Persoon URI API"
      @content="Bevragen van de URI van een persoon op basis van diens rijksregisternummer en bestuurseenheid."/>
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.centrale-vindplaats-sparql"
      @title="Centrale Vindplaats SPARQL endpoint"
      @content="Endpoint om met SPARQL publieke data te bevragen."/>
    <MenuCard
      class="au-o-grid__item au-u-1-3@medium au-u-1-2@small"
      @fullSize={{@fullSize}}
      @badgeIcon="download"
      @route="docs.publicatie-feed"
      @title="Publicaties events via LDES"
      @content="Publicatie Events ontsluiten via LDES"/>
  </nav>
</template>

const MenuCard = <template>
  <div ...attributes>
    <AuCard
      @flex={{true}}
      @textCenter={{false}}
      @shadow={{true}}
      @size="small"
      @standOut={{false}}
      @expandable={{false}}
      @isExpanded={{true}}
      @isOpenInitially={{true}}
      @manualControl={{false}}
      as |c|>
      <c.header
        @badgeIcon={{@badgeIcon}}
        @badgeSkin="brand"
        @badgeSize="default">
        <AuHeading @level="2" @skin="4">
          {{@title}}
        </AuHeading>
        <p>
          {{@subtitle}}
        </p>
      </c.header>
      <c.content>
        {{#if @fullSize}}
          <p>
            {{@content}}
          </p>
        {{/if}}
      </c.content>
      <c.footer class="au-u-text-right">
        {{#if @external}}
          <AuLinkExternal
            href={{@href}}
            @skin="button"
            @icon="external"
            @iconAlignment="right"
            @hideText={{false}}
            @width="default"
            @active={{false}}>
            Open externe documentatie
          </AuLinkExternal>
        {{else}}
          <AuLink
            @route={{@route}}
            @skin="button"
            @icon="chevron-right"
            @iconAlignment="right"
            @hideText={{false}}
            @width="default"
            @active={{false}}>
            Open documentatie
          </AuLink>
        {{/if}}
      </c.footer>
    </AuCard>
  </div>
</template>
