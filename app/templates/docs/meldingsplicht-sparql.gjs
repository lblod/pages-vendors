import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import AuTable from '@appuniversum/ember-appuniversum/components/au-table';
import { LinkTo } from '@ember/routing';
import CodeBlock from '../../components/code-block';
import CodeInline from '../../components/code-inline';
import Snippet from '../../components/snippet';
import ScrollLink from '../../components/scroll-link';

<template>
  <AuHeading @skin="1" @level="1">Meldingsplicht SPARQL API
    <em>[CONCEPT]</em></AuHeading>

  <p>
    Met deze API is het mogelijk om rechtstreeks SPARQL query's uit te voeren
    tegen een gereduceerde dataset waar nuttige informatie terug te vinden is
    over de toestand van eerder ingestuurde meldingen. Deze API is gebaseerd op
    de
    <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo>. Bekijk ook
    de pagina over de
    <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>
    voor het insturen van meldingen.
  </p>
  <p>
    <strong>Het soort beschikbare gegevens is nog sterk onderhevig aan
      veranderingen. Vertrouw voorlopig (bij het schrijven in 11/2022) nog niet
      te veel op het soort gegevens en de structuur ervan.</strong>
  </p>

  <AuHeading @level="2" @skin="2">Verbinden</AuHeading>
  <p>
    De endpoint voor deze API kan bereikt worden via
  </p>
  <CodeBlock>https://api.loket.lokaalbestuur.vlaanderen.be</CodeBlock>
  <p>
    Ter volledigheid staat hieronder de volledige lijst aan URL's voor het
    inloggen, sturen van query's en het uitloggen respectievelijk.
  </p>
  {{! prettier-ignore }}
  <CodeBlock>https://api.loket.lokaalbestuur.vlaanderen.be/vendor/login
https://api.loket.lokaalbestuur.vlaanderen.be/vendor/sparql
https://api.loket.lokaalbestuur.vlaanderen.be/vendor/logout
  </CodeBlock>
  <p>
    <strong>Bekijk zeker de pagina over de
      <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo>
      om te leren hoe de SPARQL API werkt!</strong>
  </p>

  <AuHeading @level="2" @skin="2">Sturen van query's</AuHeading>
  <p>
    Bij het inzenden van een nieuwe melding (zoals beschreven in
    <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>) wordt er
    JSON teruggegeven die een URI bevat voor de melding (Submission) en de Job
    waarin de melding zal worden verwerkt. Deze kunnen worden gebruikt als
    onderwerp of voorwerp in SPARQL query's om doelgericht informatie op te
    vragen.
  </p>

  <AuHeading @level="3" @skin="3">Voorbeelden van query's</AuHeading>
  <p>
    Hieronder staan een aantal voorbeelden van SPARQL query's die naar het
    endpoint kunnen worden verstuurd.
  </p>

  <AuHeading @level="4" @skin="4">Oplijsten meldingen</AuHeading>
  <p>
    Met dit eerste voorbeeld worden er 100 eerder verrichtte meldingen
    opgevraagd. Met de verkregen URI's kan men query's gelijk die in volgende
    voorbeelden opstellen.
  </p>
  <Snippet
    @snippetFilename="meldingsplicht-sparql/meldingen-eerste-100.sparql"
  />

  <AuHeading @level="4" @skin="4">Status via Submission URI</AuHeading>
  <p>
    Aan de hand van dit voorbeeld kan de status van een ingestuurde melding
    (Submission) worden opgevraagd. Hiervoor wordt de URI gebruikt van de
    Submission die als antwoord werd gegeven op de melding aanvraag. Zie
    <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>.
  </p>
  <Snippet
    @snippetFilename="meldingsplicht-sparql/voorbeeld-melding-status-submission-uri.sparql"
  />
  <p>
    <strong>Noteer:</strong>
    voor de status is aangeraden om steeds met de URI te werken. Het label kan
    veranderen, maar het achterliggende concept (i.e. de URI) niet.
  </p>
  <p>
    <strong>Noteer:</strong>
    de status voor een inzending kan &ldquo;verzonden&rdquo; of
    &ldquo;concept&rdquo; zijn. Een inzending in &ldquo;concept&rdquo; vereist
    nog manuele interventie door onvolledigheid van het document alvorens het
    officieel kan worden ingediend, waarna het de status &ldquo;verzonden&rdquo;
    krijgt. Indien er ingestuurd werd met status &ldquo;verzonden&rdquo; en de
    status blijft hangen op &ldquo;concept&rdquo;, is er hoogst waarschijnlijk
    iets mis met de gegevens van het document. Je kan steeds terecht bij op
    <AuLinkExternal
      href="digitaalABB@vlaanderen.be"
      @icon="mail"
    >digitaalABB@vlaanderen.be</AuLinkExternal>
    voor hulp. Verder op deze pagina worden de URI's voor de status opgelijst.
  </p>

  <AuHeading @level="4" @skin="4">Status via document URI</AuHeading>
  <p>
    De status opvragen van een Submission kan eveneens via de document URI. Deze
    URI werd door de vendor meegegeven als URI van het werkelijke RDF document
    in de HTML pagina die ter beschikking werd gesteld. Deze URI wordt
    <CodeInline>submittedResource</CodeInline>
    genoemd bij de melding in
    <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>.
  </p>
  <Snippet
    @snippetFilename="meldingsplicht-sparql/voorbeeld-melding-status-document-uri.sparql"
  />

  <AuHeading @level="4" @skin="4">Status via URL van downloadpagina</AuHeading>
  <p>
    Ten slotte is het ook mogelijk om de status van een Submission op te vragen
    via de URL van de downloadpagina. (Dit is een URL, geen URI.) Deze URL werd
    eveneens door de vendor meegegeven bij het inzenden van een melding en werd
    <CodeInline>href</CodeInline>
    genoemd.
  </p>
  <Snippet
    @snippetFilename="meldingsplicht-sparql/voorbeeld-melding-status-href.sparql"
  />
  <p>
    <strong>Pas op: deze methode van opvragen van informatie over de Submission
      is niet ideaal!</strong>
    Het is mogelijk dat er meerdere RDF documenten verwerkt staan in dezelfde
    HTML pagina. Bijgevolg kunnen er dus meerdere Submissions worden aangemaakt
    voor dezelfde URL, steeds met een verschillende document URI. In dat geval
    zal je bij het opvragen van informatie over de Submissions dus een
    combinatie zien van de gegevens van alle Submissions op die HTML pagina.
  </p>

  <AuHeading @level="2" @skin="2">Diagram van beschikbare data</AuHeading>
  <a
    class="block au-u-text-center"
    href="assets/diagrams/meldingsplicht-sparql.svg"
  >
    <figure>
      <img
        itemprop="thumbnail"
        src="assets/diagrams/meldingsplicht-sparql.svg"
        alt="Diagram van beschikbare gegevens"
      />
      <figcaption class="au-u-text-right">
        Diagram van Linked Data van beschikbare gegevens in het endpoint
      </figcaption>
    </figure>
  </a>

  <AuHeading @level="2" @skin="2">Model van beschikbare gegevens</AuHeading>
  <p>
    Onderstaande tabel beschrijft de prefixes gebruikt in dit document en
    onderstaand model.
  </p>
  <AuTable @size="default">
    <:header>
      <tr>
        <th>Prefix</th>
        <th>URI</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td><CodeInline>rdf:</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          >http://www.w3.org/1999/02/22-rdf-syntax-ns#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>xsd:</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/2001/XMLSchema#"
          >http://www.w3.org/2001/XMLSchema#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>meb:</CodeInline></td>
        <td><AuLinkExternal
            href="http://rdf.myexperiment.org/ontologies/base/"
          >http://rdf.myexperiment.org/ontologies/base/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>mu:</CodeInline></td>
        <td><AuLinkExternal
            href="http://mu.semte.ch/vocabularies/core/"
          >http://mu.semte.ch/vocabularies/core/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>prov:</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/ns/prov#"
          >http://www.w3.org/ns/prov#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>dct:</CodeInline></td>
        <td><AuLinkExternal
            href="http://purl.org/dc/terms/"
          >http://purl.org/dc/terms/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>adms:</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/ns/adms#"
          >http://www.w3.org/ns/adms#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>pav:</CodeInline></td>
        <td><AuLinkExternal
            href="http://purl.org/pav/"
          >http://purl.org/pav/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>nie:</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.semanticdesktop.org/ontologies/2007/01/19/nie#"
          >http://www.semanticdesktop.org/ontologies/2007/01/19/nie#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>nfo:</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#"
          >http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>nmo:</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#"
          >http://www.semanticdesktop.org/ontologies/2007/03/22/nmo#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>ext:</CodeInline></td>
        <td><AuLinkExternal
            href="http://mu.semte.ch/vocabularies/ext/"
          >http://mu.semte.ch/vocabularies/ext/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>am:</CodeInline></td>
        <td><AuLinkExternal
            href="http://lblod.data.gift/vocabularies/automatische-melding/"
          >http://lblod.data.gift/vocabularies/automatische-melding/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>sec:</CodeInline></td>
        <td><AuLinkExternal
            href="http://lblod.data.gift/vocabularies/security/"
          >http://lblod.data.gift/vocabularies/security/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>besluit:</CodeInline></td>
        <td><AuLinkExternal
            href="http://data.vlaanderen.be/ns/besluit#"
          >http://data.vlaanderen.be/ns/besluit#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>foaf:</CodeInline></td>
        <td><AuLinkExternal
            href="http://xmlns.com/foaf/0.1/"
          >http://xmlns.com/foaf/0.1/</AuLinkExternal></td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3"><CodeInline
    >meb:Submission</CodeInline></AuHeading>
  <p>
    Een Submission is de inzending voor een document; de zogezegde
    &ldquo;gebeurtenis&rdquo; van het inzenden van dat document. Hier kan
    bijvoorbeeld de status van het inzendingsproces en het tijdstip van
    inzending worden teuggevonden. Onderstaande eigenschappen zijn niet de enige
    die terug te vinden zijn, maar zijn de meest belangrijke. Overige
    eigenschappen zijn mogelijk niet altijd beschikbaar, gebruik met
    voorzichtigheid.
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Naam</th>
        <th>URI</th>
        <th>Verwacht type</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>Gecre&euml;erd op</td>
        <td><CodeInline>dct:created</CodeInline></td>
        <td><CodeInline>xsd:dateTime</CodeInline></td>
        <td>Tijdstip waarop deze inzending werd gemaakt.</td>
      </tr>
      <tr>
        <td>Bewerkt op</td>
        <td><CodeInline>dct:modified</CodeInline></td>
        <td><CodeInline>xsd:dateTime</CodeInline></td>
        <td>Tijdstip waarop deze inzending laatst werd gewijzigd.</td>
      </tr>
      <tr>
        <td>Gecre&euml;erd door</td>
        <td><CodeInline>pav:createdBy</CodeInline></td>
        <td><CodeInline>besluit:Bestuurseenheid</CodeInline></td>
        <td>Voor/door welk bestuurseenheid de inzending werd gemaakt. Een derde
          partij kan een inzending maken via een applicatie voor deze
          bestuurseenheid.</td>
      </tr>
      <tr>
        <td>Verzonden op</td>
        <td><CodeInline>nmo:sentDate</CodeInline></td>
        <td><CodeInline>xsd:dateTime</CodeInline></td>
        <td>Tijdstip waarop de inzending succesvol werd verzonden naar het
          Loket.</td>
      </tr>
      <tr>
        <td>Ingezonden door</td>
        <td><CodeInline>pav:providedBy</CodeInline></td>
        <td><CodeInline>ext:Vendor</CodeInline></td>
        <td>URI van de vendor applicatie die de inzending maakte. Via de Vendor
          API mogen geen inzendingen van andere vendors gezien worden.</td>
      </tr>
      <tr>
        <td>Status</td>
        <td><CodeInline>adms:status</CodeInline></td>
        <td><CodeInline>ext:SubmissionDocumentStatus</CodeInline>
          en
          <CodeInline>skos:Concept</CodeInline></td>
        <td>Status van de inzending. Zie onderaan onder hoofdstuk
          <ScrollLink
            @scrollToId="documentstatussen-inzendingen"
          >Documentstatussen inzendingen</ScrollLink>.</td>
      </tr>
      <tr>
        <td>Genereerde dit inzendingsformulier</td>
        <td><CodeInline>prov:generated</CodeInline></td>
        <td><CodeInline>am:FormData</CodeInline></td>
        <td>Formuliergegevens die werden gegenereerd op basis van de inzending.
          Indien volledig wordt dit dossier automatisch verzonden naar het
          Loket.</td>
      </tr>
      <tr>
        <td>Document ter onderwerp</td>
        <td><CodeInline>dct:subject</CodeInline></td>
        <td><CodeInline>ext:SubmissionDocument</CodeInline>
          en
          <CodeInline>foaf:Document</CodeInline></td>
        <td>RDFa document dat werd ingezonden door de vendor. Dit document werd
          automatisch omgezet tot
          <CodeInline>am:FormData</CodeInline>
          om te versturen.</td>
      </tr>
      <tr>
        <td>Downloadlocatie</td>
        <td><CodeInline>prov:atLocation</CodeInline></td>
        <td><CodeInline>xsd:anyURI</CodeInline></td>
        <td>Locatie (URL) van het HTML RDFa document, ingezonden door de vendor,
          waar het
          <CodeInline>ext:SubmissionDocument</CodeInline>
          kan worden teruggevonden en worden gedownload.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading
    id="documentstatussen-inzendingen"
    @level="2"
    @skin="2"
  >Documentstatussen inzendingen</AuHeading>
  <p>
    Onderstaande tabel verduidelijkt de URI's die worden gebruikt om de status
    van een ingezonden document aan te duiden.
  </p>
  <AuTable @size="default">
    <:header>
      <tr>
        <th>URI</th>
        <th>Label</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td><CodeInline
          >http://lblod.data.gift/concepts/79a52da4-f491-4e2f-9374-89a13cde8ecd</CodeInline></td>
        <td>Concept</td>
      </tr>
      <tr>
        <td><CodeInline
          >http://lblod.data.gift/concepts/9bd8d86d-bb10-4456-a84e-91e9507c374c</CodeInline></td>
        <td>Verzonden</td>
      </tr>
      <tr>
        <td><CodeInline
          >http://lblod.data.gift/concepts/f6330856-e261-430f-b949-8e510d20d0ff</CodeInline></td>
        <td>Inzendbaar</td>
      </tr>
    </:body>
  </AuTable>
</template>
