import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import AuLink from '@appuniversum/ember-appuniversum/components/au-link';
import AuTable from '@appuniversum/ember-appuniversum/components/au-table';
import { LinkTo } from '@ember/routing';
import MyCodeBlock from '../../components/my-code-block';
import MyCodeInline from '../../components/my-code-inline';
import SnippetToggle from '../../components/snippet-toggle';

<template>
  <AuHeading @skin="1" @level="1">
    Berichtencentrum SPARQL API
    <em>[CONCEPT]</em>
  </AuHeading>

  <p>
    Met deze API is het mogelijk om rechtstreeks SPARQL query's uit te voeren om
    Berichten en Conversaties uit te lezen van Loket. ABB is de enige die een
    Conversatie kan initi&euml;ren. Hierop kunnen dan antwoorden gevormd worden
    en ingezonden via de
    <LinkTo @route="docs.berichtencentrum">Berichtencentrum API</LinkTo>. Deze
    API is gebaseerd op de
    <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo>.
  </p>

  <AuHeading @level="2" @skin="2">Verbinden</AuHeading>
  <p>
    De endpoint voor deze API kan bereikt worden via
  </p>
  <MyCodeBlock>https://api.loket.lokaalbestuur.vlaanderen.be</MyCodeBlock>
  <p>
    Ter volledigheid staat hieronder de volledige lijst aan URL's voor het
    inloggen, sturen van query's en het uitloggen respectievelijk.
  </p>
  <MyCodeBlock>https://api.loket.lokaalbestuur.vlaanderen.be/vendor/login
https://api.loket.lokaalbestuur.vlaanderen.be/vendor/sparql
https://api.loket.lokaalbestuur.vlaanderen.be/vendor/logout</MyCodeBlock>
  <p>
    <strong>Bekijk zeker de pagina over de
      <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo>
      om te leren hoe de SPARQL API werkt!</strong>
  </p>

  <AuHeading @level="2" @skin="2">Sturen van query's</AuHeading>
  <p>
    Het soort query's die door deze API kan beantwoord worden kan sterk
    vari&euml;ren. Het is mogelijk om alle Conversaties en Berichten uit te
    lezen die op de bestuurseenheid van toepassing zijn en om daarop te filteren
    met de volledige vrijheid van SPARQL. Elk Bericht heeft zijn bijlagen met de
    nodige URL voor het downloaden ervan. Bij het inzenden van een nieuw Bericht
    (zoals beschreven in
    <LinkTo @route="docs.berichtencentrum">Berichtencentrum API</LinkTo>) wordt
    er JSON teruggegeven die een URI bevat voor de Job waarin de melding zal
    worden verwerkt. Deze kan worden gebruikt als onderwerp of voorwerp in
    SPARQL query's om doelgericht informatie op te vragen over de verwerking van
    het nieuwe Bericht.
  </p>

  <AuHeading @level="3" @skin="3">Voorbeelden</AuHeading>
  <AuHeading @level="4" @skin="4">Opvragen berichten ABB</AuHeading>
  <p>
    De onderstaande SPARQL query toont hoe verzonden berichten van ABB naar een
    specifiek bestuur die recenter zijn dan een specifieke datum opgevraagd
    kunnen worden. Voor elk bericht halen we ook de (optionele) URL('s) naar de
    bijlage(n) op. Noteer dat de URI van ABB de volgende is:
    <MyCodeInline
    >http://data.lblod.info/id/bestuurseenheden/141d9d6b-54af-4d17-b313-8d1c30bc3f5b</MyCodeInline>
  </p>
  <SnippetToggle
    @snippetFilename="berichtencentrum-sparql/voorbeeld-berichten-na-datum.sparql"
  />

  <AuHeading @level="4" @skin="4">Opvolgen van de ingestuurde melding</AuHeading>
  <p>
    De onderstaande SPARQL query toont hoe u de status van de aangemaakt Job kan
    opvolgen. Noteer: gegeven de verwerking van een melding een asynchroon
    proces is kan het even duren alvorens informatie over de Job beschikbaar is.
    Het staat wel vast dat de informatie ooit beschikbaar wordt. Na de melding
    kan er dus al gerust opgevraagd worden.
  </p>
  <SnippetToggle
    @snippetFilename="berichtencentrum-sparql/voorbeeld-job-status.sparql"
  />

  <AuHeading @level="4" @skin="4">Script voor opvolgen melding</AuHeading>
  <p>
    Het volgend voorbeeld is een Bash script dat een sequentie van calls
    uitvoert om een melding op te volgen. Noteer: het gaat om een zeer
    na&iuml;eve interpretatie, zeker niet aan te raden in productie.
  </p>
  <SnippetToggle
    @snippetFilename="berichtencentrum-sparql/voorbeeld-melding-opvolgen.sh"
  />

  <AuHeading @level="4" @skin="4">Script voor downloaden bijlage</AuHeading>
  <p>
    Het volgend voorbeeld illustreert een sequentie van calls om een bijlage te
    ontdekken en te downloaden. Noteer: Het ontdekken van de bijlagen kan hier
    op vele manieren, en veel effici&euml;nter met andere SPARQL query's. Noteer
    nog steeds: het gaat om een zeer na&iuml;eve interpretatie, zeker niet aan
    te raden in productie.
  </p>
  <SnippetToggle
    @snippetFilename="berichtencentrum-sparql/voorbeeld-bijlage-downloaden.sh"
  />

  <AuHeading @level="2" @skin="2">Model van beschikbare data</AuHeading>

  <a
    class="block au-u-text-right"
    href="assets/diagrams/berichtencentrum-sparql.svg"
  >
    <figure>
      <img
        itemprop="thumbnail"
        src="assets/diagrams/berichtencentrum-sparql.svg"
        alt="Diagram van beschikbare gegevens"
      />
      <figcaption>
        Diagram van Linked Data van beschikbare gegevens in het endpoint
      </figcaption>
    </figure>
  </a>

  <p>
    In boven- en onderstaand model wordt gebruik gemaakt van volgende prefixen.
  </p>

  <AuTable>
    <:header>
      <tr>
        <th>Prefix</th>
        <th>URI</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td><MyCodeInline>adms</MyCodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/ns/adms#"
          >http://www.w3.org/ns/adms#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>besluit</MyCodeInline></td>
        <td><AuLinkExternal
            href="http://data.vlaanderen.be/ns/besluit#"
          >http://data.vlaanderen.be/ns/besluit#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>dcterms</MyCodeInline></td>
        <td><AuLinkExternal
            href="http://purl.org/dc/terms/"
          >http://purl.org/dc/terms/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>skos</MyCodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/2004/02/skos/"
          >http://www.w3.org/2004/02/skos/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>nfo</MyCodeInline></td>
        <td><AuLinkExternal
            href="http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#"
          >http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>nie</MyCodeInline></td>
        <td><AuLinkExternal
            href="http://www.semanticdesktop.org/ontologies/2007/01/19/nie#"
          >http://www.semanticdesktop.org/ontologies/2007/01/19/nie#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>schema</MyCodeInline></td>
        <td>
          <AuLinkExternal
            href="http://schema.org/"
          >http://schema.org/</AuLinkExternal>
          <br />
          Noteer: geen
          <em>http<strong>s</strong></em>!
        </td>
      </tr>
      <tr>
        <td><MyCodeInline>rdf</MyCodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
          >http://www.w3.org/1999/02/22-rdf-syntax-ns#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>xsd</MyCodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/2001/XMLSchema#"
          >http://www.w3.org/2001/XMLSchema#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>cogs</MyCodeInline></td>
        <td><AuLinkExternal
            href="http://vocab.deri.ie/cogs#"
          >http://vocab.deri.ie/cogs#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>oslc</MyCodeInline></td>
        <td><AuLinkExternal
            href="http://open-services.net/ns/core#"
          >http://open-services.net/ns/core#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>task</MyCodeInline></td>
        <td><AuLinkExternal
            href="http://redpencil.data.gift/vocabularies/tasks/"
          >http://redpencil.data.gift/vocabularies/tasks/</AuLinkExternal></td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3"><MyCodeInline
    >schema:Conversation</MyCodeInline></AuHeading>
  <p>
    Bundelt
    <MyCodeInline>schema:Message</MyCodeInline>
    rond een specifiek topic. Gesprek, Thread.
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
        <td>hasPart</td>
        <td><MyCodeInline>schema:hasPart</MyCodeInline></td>
        <td><MyCodeInline>schema:Message</MyCodeInline></td>
        <td>Verwijst naar het gelinkt bericht aan de conversatie</td>
      </tr>
      <tr>
        <td>about</td>
        <td><MyCodeInline>schema:about</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Beschrijft het topic van het gesprek</td>
      </tr>
      <tr>
        <td>Identificator</td>
        <td><MyCodeInline>schema:identifier</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>
          De interne referentie van ABB.
        </td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3"><MyCodeInline
    >schema:Message</MyCodeInline></AuHeading>
  <p>
    Bericht. De entiteit die de effectieve communicatie bevat.
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
        <td>type</td>
        <td><MyCodeInline>dcterms:type</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>
          Een string die samenvat wat de type communicatie is.
          <br />
          Voorbeelden hiervan zijn &ldquo;Kennisgeving
          toezichtsbeslissing&rdquo; of &ldquo;Opvraging&rdquo;
          <br />
          Noteer hierbij dat het bestuur dit veld
          <em>niet</em>
          hoeft te publiceren.
          <br />
          Alle berichten die binnenkomen vanuit een bestuur zullen automatisch
          het label &ldquo;Reactie&rdquo; krijgen.
        </td>
      </tr>
      <tr>
        <td>hasPart</td>
        <td><MyCodeInline>nie:hasPart</MyCodeInline></td>
        <td><MyCodeInline>nfo:FileDataObject</MyCodeInline></td>
        <td>Verwijst naar het bijbehorende document of bestand van het bericht,
          zoals een bijlage.</td>
      </tr>
      <tr>
        <td>sender</td>
        <td><MyCodeInline>schema:sender</MyCodeInline></td>
        <td><MyCodeInline>besluit:Bestuurseenheid</MyCodeInline></td>
        <td>
          Verwijst naar de zender of afzender van het bericht.
          <br />
          Zie voorbeelden
          <AuLink @route="docs.centrale-vindplaats-sparql">SPARQL endpoint</AuLink>
          voor query's.
        </td>
      </tr>
      <tr>
        <td>recipient</td>
        <td><MyCodeInline>schema:recipient</MyCodeInline></td>
        <td><MyCodeInline>besluit:Bestuurseenheid</MyCodeInline></td>
        <td>
          Verwijst naar de ontvanger van het bericht.
          <br />
          In de prakijk ABB met vaste URI
          <br />
          <MyCodeInline
          >&lt;http://data.lblod.info/id/bestuurseenheden/141d9d6b-54af-4d17-b313-8d1c30bc3f5b&gt;</MyCodeInline>
        </td>
      </tr>
      <tr>
        <td>text</td>
        <td><MyCodeInline>schema:text</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>
          De tekst of inhoud van het bericht.
          <br />
          Dit veld kan opgemaakte tekst bevatten, dit wordt doorgegeven als
          HTML.
        </td>
      </tr>
      <tr>
        <td>dateSent</td>
        <td><MyCodeInline>schema:dateSent</MyCodeInline></td>
        <td><MyCodeInline>xsd:dateTime</MyCodeInline></td>
        <td>
          Datum en tijd waarop het bericht is verzonden.<br />
          In de praktijk, wanneer de gebruiker op &ldquo;Versturen&rdquo;
          geklikt heeft.<br />
          Dit is niet de datum van ontvangest bij ABB.<br />
          (Verdere discussie zal nodig zijn om uit te klaren welke timestamp
          rechtsgeldig is voor de termijnen)
        </td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3"><MyCodeInline
    >nfo:FileDataObject</MyCodeInline></AuHeading>
  <p>
    Deze klasse wordt gebruikt om bijlagen te annoteren.
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
        <td>created</td>
        <td><MyCodeInline>dcterms:created</MyCodeInline></td>
        <td><MyCodeInline>xsd:dateTime</MyCodeInline></td>
        <td>Datum en tijd waarop het bestand is gecre&euml;erd.</td>
      </tr>
      <tr>
        <td>url</td>
        <td><MyCodeInline>nie:url</MyCodeInline></td>
        <td><MyCodeInline>xsd:anyURI</MyCodeInline></td>
        <td>De locatie van het bestand die gebruikt zal worden om opgehaald te
          worden</td>
      </tr>
      <tr>
        <td>modified</td>
        <td><MyCodeInline>dcterms:modified</MyCodeInline></td>
        <td><MyCodeInline>xsd:dateTime</MyCodeInline></td>
        <td>Datum en tijd waarop het bestand voor het laatst is gewijzigd.</td>
      </tr>
      <tr>
        <td>fileName</td>
        <td><MyCodeInline>nfo:fileName</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>De mensleesbare naam van het bestand.</td>
      </tr>
      <tr>
        <td>status</td>
        <td><MyCodeInline>adms:status</MyCodeInline></td>
        <td><MyCodeInline>skos:Concept</MyCodeInline></td>
        <td>
          De status gebruikt bij ABB om de voortgang van de download van de file
          op te volgen.
          <br />
          De mogelijke statussen vindt u (voorlopig)
          <AuLinkExternal
            href="https://github.com/lblod/download-url-service#file-download-statuses"
          >hier</AuLinkExternal>
          <br />
          Noteer: deze property wordt genegeerd indien het bestuur dit
          publiceert.
        </td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3"><MyCodeInline
    >cogs:Job</MyCodeInline></AuHeading>
  <p>
    Job. Een instantie van deze klasse houdt bij wat de status van de
    ingestuurde melding is.
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
        <td>status</td>
        <td><MyCodeInline>adms:status</MyCodeInline></td>
        <td><MyCodeInline>skos:Concept</MyCodeInline></td>
        <td>
          Status van de job. Mogelijke waarden zijn
          <br />
          <ul>
            <li><MyCodeInline
              >http://redpencil.data.gift/id/concept/JobStatus/busy</MyCodeInline></li>
            <li><MyCodeInline
              >http://redpencil.data.gift/id/concept/JobStatus/scheduled</MyCodeInline></li>
            <li><MyCodeInline
              >http://redpencil.data.gift/id/concept/JobStatus/success</MyCodeInline></li>
            <li><MyCodeInline
              >http://redpencil.data.gift/id/concept/JobStatus/failed</MyCodeInline></li>
          </ul>

        </td>
      </tr>
      <tr>
        <td>created</td>
        <td><MyCodeInline>dct:created</MyCodeInline></td>
        <td><MyCodeInline>xsd:dateTime</MyCodeInline></td>
        <td>Tijdstip van creatie</td>
      </tr>
      <tr>
        <td>modified</td>
        <td><MyCodeInline>dct:modified</MyCodeInline></td>
        <td><MyCodeInline>xsd:dateTime</MyCodeInline></td>
        <td>Tijdstip van laatste update</td>
      </tr>
      <tr>
        <td>subject</td>
        <td><MyCodeInline>dct:subject</MyCodeInline></td>
        <td><MyCodeInline>schema:Message</MyCodeInline></td>
        <td>Het bericht waaraan de job verbonden is</td>
      </tr>
      <tr>
        <td>error</td>
        <td><MyCodeInline>task:error</MyCodeInline></td>
        <td><MyCodeInline>oslc:Error</MyCodeInline></td>
        <td>
          Meer informatie over de fout in geval van de fout
          <br />
          <MyCodeInline
          >http://redpencil.data.gift/id/concept/JobStatus/failed</MyCodeInline>
        </td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3"><MyCodeInline
    >oslc:Error</MyCodeInline></AuHeading>
  <p>
    Deze klasse beschrijft een error. In dit geval zal deze gelinkt zijn met
    <MyCodeInline>cogs:Job</MyCodeInline>.
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
        <td>bericht</td>
        <td><MyCodeInline>oslc:message</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Beschrijving van de fout</td>
      </tr>
    </:body>
  </AuTable>
</template>
