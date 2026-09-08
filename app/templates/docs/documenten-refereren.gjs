import { pageTitle } from 'ember-page-title';
import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuTable from '@appuniversum/ember-appuniversum/components/au-table';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import AuLink from '@appuniversum/ember-appuniversum/components/au-link';
import CodeInline from '../../components/code-inline';
import Snippet from '../../components/snippet';
import ScrollLink from '../../components/scroll-link';

<template>
  {{pageTitle "Refereren van inzendingen"}}
  <AuHeading @level="1" @skin="1">Refereren van inzendingen</AuHeading>

  <p>
    Bij sommige documenten is het nodig om te refereren naar andere documenten.
    Dit is bijvoorbeeld het geval bij documenttype
    <em>&ldquo;Advies bij jaarrekening eredienstbestuur&rdquo;</em>
    dat kan worden gepubliceerd door een gemeentebestuur. Hierbij moet kunnen
    worden verwezen naar een origineel document van het type
    <em>&ldquo;Jaarrekening&rdquo;</em>
    dat werd opgesteld door een eredienstbestuur, maar eerst werd gebundeld door
    een centraal kerkbestuur onder het documenttype
    <em>&ldquo;Jaarrekeningen van de besturen van de eredienst&rdquo;</em>.
    Hieronder wordt uitgelegd op welke documenttypes dit van toepassing is, hoe
    het model er uit ziet, en hoe documenten en regels kunnen worden opgevraagd.
  </p>

  <p>
    Voor een stap-voor-stap begeleiding van deze flow, met concrete voorbeelden
    voor gemeenten en provincies, zie
    <AuLink @route="docs.refereren-stappenplan">Stappenplan: refereren als
      gemeente of provincie</AuLink>.
  </p>

  <AuHeading @level="2" @skin="2">Documenttypes</AuHeading>

  <p>
    Refereren naar andere documenten is enkel van toepassing bij een aantal
    documenttypes. Verder zijn er 2 manieren om te refereren, met en zonder een
    tussenliggende Artikel, en zijn er uitzonderingen waarbij niet met een
    centraal kerkbestuur hoeft rekening gehouden te worden. Onderstaande
    tabellen geven een overzicht van welk type document kan verwijzen naar welk
    ander type document, vanuit welke soort bestuurseenheid en onder welke vorm
    dit verloopt.
  </p>

  <AuHeading @level="2" @skin="2">Refereren als centraal kerkbestuur</AuHeading>

  <p>
    Als wordt gerefereerd vanuit een centraal kerkbestuur, dan gebeurt dit
    steeds naar een document van een eredienstbestuur. Er worden geen Artikels
    gelinkt aan de referentie, omdat er geen kleuring (Goedkeuring, Aktename,
    Gunstig advies, &hellip;) moet worden meegegeven. In dit geval zal het
    <CodeInline @language="turtle">foaf:Document</CodeInline>
    van de refererende inzending direct verwijzen naar het
    <CodeInline @language="turtle">foaf:Document</CodeInline>
    van het gerefereerde document (in dit geval het document van het
    eredienstbestuur) door middel van het predicaat
    <CodeInline @language="turtle">dct:relation</CodeInline>. Onderstaande
    figuur toont dit simpele model in diagramvorm.
  </p>
  <a
    class="block au-u-text-center"
    href="assets/diagrams/refereren-als-ckb.svg"
  >
    <figure>
      <img
        itemprop="thumbnail"
        src="assets/diagrams/refereren-als-ckb.svg"
        alt="Minimaal model voor refereren als CKB"
      />
      <figcaption class="au-u-text-right">
        Minimaal model voor het refereren als een centraal kerkbestuur
      </figcaption>
    </figure>
  </a>

  <p>
    Onderstaande tabel toont de beschikbare documenttypes die kunnen worden
    gepubliceerd vanuit een centraal kerkbestuur en refereren naar een document
    van een eredienstbestuur en naar welke documenttypes deze dan verwijzen.
  </p>

  <AuTable>
    <:header>
      <tr>
        <th>Type document &hellip;</th>
        <th>&hellip; kan verwijzen naar type document &hellip;</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>
          Jaarrekeningen van de besturen van de eredienst
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitDocumentType/672bf096-dccd-40af-ab60-bd7de15cc461</CodeInline>
        </td>
        <td>
          Jaarrekeningen
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitType/e44c535d-4339-4d15-bdbf-d4be6046de2c</CodeInline>
        </td>
      </tr>
      <tr>
        <td>
          Budgetten(wijzigingen) - Indiening bij representatief orgaan
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitDocumentType/18833df2-8c9e-4edd-87fd-b5c252337349</CodeInline>
        </td>
        <td>
          Budget(wijziging) - Indiening bij centraal bestuur of representatief
          orgaan
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitType/d463b6d1-c207-4c1a-8c08-f2c7dd1fa53b</CodeInline>
        </td>
      </tr>
      <tr>
        <td>
          Budgetten(wijzigingen) - Indiening bij toezichthoudende gemeente of
          provincie
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitDocumentType/ce569d3d-25ff-4ce9-a194-e77113597e29</CodeInline>
        </td>
        <td>
          Budget(wijziging) - Indiening bij centraal bestuur of representatief
          orgaan
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitType/d463b6d1-c207-4c1a-8c08-f2c7dd1fa53b</CodeInline>
        </td>
      </tr>
      <tr>
        <td>
          Meerjarenplannen(wijzigingen) van de besturen van de eredienst
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitDocumentType/2c9ada23-1229-4c7e-a53e-acddc9014e4e</CodeInline>
        </td>
        <td>
          Meerjarenplan(aanpassing)
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitType/f56c645d-b8e1-4066-813d-e213f5bc529f</CodeInline>
        </td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading id="refereren-als-gemeente" @level="2" @skin="2">Refereren als
    gemeentebestuur, provinciebestuur, &hellip;</AuHeading>

  <p>
    Buiten in uitzonderlijke gevallen, zal een gemeente, die naar een document
    van een eredienst wil refereren, dit enkel geldig kunnen doen als er al een
    document bestaat, gepubliceerd door een centraal kerkbestuur, dat ook
    refereert naar datzelfde document van het eredienstbestuur. Dit verloopt dan
    niet via een enkele relatie, gelijk bij het centraal kerkbestuur, maar via
    een tussenliggende entiteit: een
    <CodeInline @language="turtle">besluit:Artikel</CodeInline>. Onderstaand
    diagram toont kort hoe het model voor een verwijzing er uit ziet als dit
    gebeurt vanuit een gemeente, verwijzend naar een document van een
    eredienstbestuur. In grijs staat de referentie van een document vanuit het
    centraal kerkbestuur naar hetzelfde document van het eredienstbestuur, zoals
    hierboven al werd beschreven.
  </p>

  <a
    class="block au-u-text-center"
    href="assets/diagrams/refereren-als-gemeente.svg"
  >
    <figure>
      <img
        itemprop="thumbnail"
        src="assets/diagrams/refereren-als-gemeente.svg"
        alt="Minimaal model voor refereren als gemeente"
      />
      <figcaption class="au-u-text-right">
        Minimaal model voor het refereren als een gemeente
      </figcaption>
    </figure>
  </a>

  <p>
    Onderstaande tabel geeft een overzicht van de documenttypes die kunnen
    worden gepubliceerd door een gemeente, provinciebestuur, &hellip; en die
    verwijzen naar een document van een eredienstbestuur.
  </p>

  <AuTable>
    <:header>
      <tr>
        <th>Type document &hellip;</th>
        <th>&hellip; kan verwijzen naar type document &hellip;</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>
          Advies bij jaarrekening eredienstbestuur
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitType/79414af4-4f57-4ca3-aaa4-f8f1e015e71c</CodeInline>
        </td>
        <td>
          Jaarrekeningen van de besturen van de eredienst
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitDocumentType/672bf096-dccd-40af-ab60-bd7de15cc461</CodeInline>
        </td>
      </tr>
      <tr>
        <td>
          Besluit over budget(wijziging) eredienstbestuur
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitType/df261490-cc74-4f80-b783-41c35e720b46</CodeInline>
        </td>
        <td>
          Budgetten(wijzigingen) - Indiening bij toezichthoudende gemeente of
          provincie
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitDocumentType/ce569d3d-25ff-4ce9-a194-e77113597e29</CodeInline>
        </td>
      </tr>
      <tr>
        <td>
          Besluit over meerjarenplan(aanpassing) eredienstbestuur
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitType/3fcf7dba-2e5b-4955-a489-6dd8285c013b</CodeInline>
        </td>
        <td>
          Meerjarenplannen(wijzigingen) van de besturen van de eredienst
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitDocumentType/2c9ada23-1229-4c7e-a53e-acddc9014e4e</CodeInline>
        </td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3">Artikel model</AuHeading>

  <AuHeading @level="4" @skin="4">
    <CodeInline @language="turtle">besluit:Artikel</CodeInline>
  </AuHeading>

  <p>
    Het Artikel is de tussenliggende entiteit tussen een document van een
    gemeente, provincie, &hellip; dat wil verwijzen naar een document van een
    eredienst. Er wordt een Artikeltype meegegeven als specificatie zoals
    goedkeuring, afkeuring, of het geven van advies.
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
        <td>Artikeltype</td>
        <td><CodeInline @language="turtle">eli:type_document</CodeInline></td>
        <td><CodeInline @language="turtle">skos:Concept</CodeInline></td>
        <td>Specifiek type voor de referentie (bijvoorbeeld "Goedkeuring
          gerefereerde documenten").
          <ScrollLink @scrollToId="artikeltypes">Zie lijst met artikeltypes
            hieronder.</ScrollLink></td>
      </tr>
      <tr>
        <td>Gerefereerd ingezonden document</td>
        <td><CodeInline @language="turtle">eli:has_part</CodeInline></td>
        <td><CodeInline @language="turtle">foaf:Document</CodeInline>
          of
          <CodeInline @language="turtle">besluit:Besluit</CodeInline></td>
        <td>Het ingezonden document waarnaar wordt verwezen. Dit is meestal een
          document van een eredienstbestuur. Vaak een
          <CodeInline @language="turtle">besluit:Besluit</CodeInline>
          maar in sommige gevallen het meer generieke
          <CodeInline @language="turtle">foaf:Document</CodeInline>.</td>
      </tr>
      <tr>
        <td>Volgorde</td>
        <td><CodeInline @language="turtle">sh:order</CodeInline></td>
        <td><CodeInline @language="turtle">xsd:Integer</CodeInline></td>
        <td>(Optioneel) Volgorde binnen de artikels.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading id="artikeltypes" @level="3" @skin="3">Artikeltypes</AuHeading>

  <p>
    Als wordt gerefereerd naar een ander document onder vorm van een Artikel,
    kan in sommige gevallen een specificatie worden gegeven aan de verwijzing.
    Onderstaande tabel geeft een overzicht van de mogelijke types:
  </p>

  <AuTable>
    <:header>
      <tr>
        <th>Artikeltype URI</th>
        <th>Beschrijving</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>
          <CodeInline
          >http://data.lblod.info/concepts/ArtikelTypes/03bb19a1-5ada-4098-830e-936c1da367f5</CodeInline>
        </td>
        <td>
          Aanpassing gerefereerde documenten.
        </td>
      </tr>
      <tr>
        <td>
          <CodeInline
          >http://data.lblod.info/concepts/ArtikelTypes/080def57-72ce-4f32-b3f9-369009644fd2</CodeInline>
        </td>
        <td>
          Goedkeuring gerefereerde documenten.
        </td>
      </tr>
      <tr>
        <td>
          <CodeInline
          >http://data.lblod.info/concepts/ArtikelTypes/5e1beb14-142b-4394-b302-6648ad6f3e00</CodeInline>
        </td>
        <td>
          Aktename gerefereerde documenten.
        </td>
      </tr>
      <tr>
        <td>
          <CodeInline
          >http://data.lblod.info/concepts/ArtikelTypes/773343c9-55a4-4aaa-942c-e3a048b35c1f</CodeInline>
        </td>
        <td>
          Niet goedkeuring gerefereerde documenten.
        </td>
      </tr>
      <tr>
        <td>
          <CodeInline
          >http://data.lblod.info/concepts/ArtikelTypes/9a54a930-7dd6-4ff2-a4b1-ee403f7cda5c</CodeInline>
        </td>
        <td>
          Gunstig advies gerefereerde documenten.
        </td>
      </tr>
      <tr>
        <td>
          <CodeInline
          >http://data.lblod.info/concepts/ArtikelTypes/c47c6ac9-1628-4378-9689-8caa7c6d7968</CodeInline>
        </td>
        <td>
          Ongunstig advies gerefereerde documenten.
        </td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3">Uitzonderingen</AuHeading>

  <p>
    Er zijn twee documenttypes waarvoor een uitzondering bestaat. Bij deze
    documenttypes zal de gemeente, provincie, &hellip; direct kunnen verwijzen
    naar een document gepubliceerd door een eredienstbestuur zonder dat hiervoor
    een document van een centraal kerkbestuur ook naar het document van het
    eredienstbestuur moet refereren. Hiervoor wordt het model gebruikt zoals bij
    <ScrollLink @scrollToId="refereren-als-gemeente">Refereren als
      gemeentebestuur, provinciebestuur, &hellip;</ScrollLink>, maar dan waarbij
    <strong>het Artikel geen type</strong>
    heeft. Het gaat om de volgende documenttypes:
  </p>

  <AuTable>
    <:header>
      <tr>
        <th>Type document &hellip;</th>
        <th>&hellip; kan verwijzen naar type document &hellip;</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>
          Schorsing beslissing eredienstbesturen
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitType/b25faa84-3ab5-47ae-98c0-1b389c77b827</CodeInline>
        </td>
        <td>
          Notulen
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitDocumentType/8e791b27-7600-4577-b24e-c7c29e0eb773</CodeInline>
        </td>
      </tr>
      <tr>
        <td>
          Opvragen bijkomende inlichtingen eredienstbesturen (met als gevolg
          stuiting termijn)
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitDocumentType/24743b26-e0fb-4c14-8c82-5cd271289b0e</CodeInline>
        </td>
        <td>
          Notulen
          <br />
          <CodeInline
          >https://data.vlaanderen.be/id/concept/BesluitDocumentType/8e791b27-7600-4577-b24e-c7c29e0eb773</CodeInline>
        </td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="2" @skin="2">Documenttypes opvragen (voorbeeld)</AuHeading>

  <p>
    Het is mogelijk om de documenttypes en hun verwezen documenttype, die
    hierboven in tabel werden gezet, dynamisch op te vragen. De regels omtrent
    refereren werden in model gebracht zodat ze door middel van query's kunnen
    worden bevraagd. Dit verloopt via SPARQL query's op Centrale Vindplaats.
    <AuLink @route="docs.centrale-vindplaats-sparql">Refereer naar de
      documentatie daarover voor het uitvoeren van SPARQL query's.</AuLink>
  </p>

  <p>
    Het is belangrijk op te merken dat men bij het bestaan van een centraal
    kerkbestuur, en indien dit relevant is voor het soort document, verwijst
    naar het centraal kerkbestuur als bron van het gerefereerde document,
    terwijl in werkelijkheid het eredienstbestuur het originele document heeft
    gepubliceerd. Dit is nodig om een onderscheid te kunnen maken van sommige
    gevallen waar het bestaan van een centraal kerkbestuur irrelevant is.
  </p>

  <p>
    Als voorbeeld willen we weten naar welk documenttype van een
    eredienstbestuur kan worden verwezen, gezien we verwijzen vanuit een
    gemeente, en we weten dat er een centraal kerkbestuur bestaat. Onderstaande
    SPARQL query toont dit voorbeeld, waar we zoeken naar documenten van een
    centraal kerkbestuur, terwijl het originele document werd opgesteld door een
    eredienstbestuur.
  </p>

  <Snippet
    @snippetFilename="refereren/voorbeeld-opvragen-documenttypes.sparql"
  />

  <AuHeading @level="3" @skin="3">Model</AuHeading>

  <p>
    Hieronder volgt het model voor de regels voor verwijzigingen.
  </p>

  <AuHeading @level="4" @skin="4">
    <CodeInline @language="turtle">ref:ReferencingRule</CodeInline>
  </AuHeading>

  <p>
    Elke regel toont door welk soort bestuurseenheid een bepaald type document
    kan worden opgesteld, naar welk ander type document dit kan verwijzen en
    welk soort bestuurseenheid verantwoordelijk is voor het origineel opstellen
    van, of doorsturen van, dit document.
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
        <td>Domein</td>
        <td><CodeInline @language="turtle">rdfs:domain</CodeInline></td>
        <td><CodeInline @language="turtle">skos:Concept</CodeInline></td>
        <td>Type van het document dat verwijst naar een andere document.</td>
      </tr>
      <tr>
        <td>Bereik</td>
        <td><CodeInline @language="turtle">rdfs:range</CodeInline></td>
        <td><CodeInline @language="turtle">skos:Concept</CodeInline></td>
        <td>Type van een document naar waar kan worden verwezen.</td>
      </tr>
      <tr>
        <td>Beslisbaar door</td>
        <td><CodeInline
            @language="turtle"
          >lblodBesluit:decidableBy</CodeInline></td>
        <td><CodeInline
            @language="turtle"
          >organisatie:BestuurseenheidClassificatieCode</CodeInline>
          of
          <CodeInline @language="turtle">skos:Concept</CodeInline></td>
        <td>Soort van bestuurseenheid dat de verwijzing maakt.</td>
      </tr>
      <tr>
        <td>Verwezen document beslisbaar door</td>
        <td><CodeInline
            @language="turtle"
          >lblodBesluit:referredDecidableBy</CodeInline></td>
        <td><CodeInline
            @language="turtle"
          >organisatie:BestuurseenheidClassificatieCode</CodeInline>
          of
          <CodeInline @language="turtle">skos:Concept</CodeInline></td>
        <td>Soort van bestuurseenheid die het originele document heeft
          gepubliceerd, waarnaar wordt verwezen.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="2" @skin="2">Opvragen van refereerbare documenten
    (voorbeeld)</AuHeading>

  <p>
    Het is uiteraard mogelijk om refereerbare documenten op te vragen. Dit
    gebeurt via de Vendor API, waarvoor men geauthoriseerde toegang nodig heeft.
    Refereer hiervoor naar
    <AuLink @route="docs.vendor-sparql">de documentatie over de Vendor API</AuLink>,
    of
    <AuLink @route="docs.erediensten-toezichtsdatabank-sparql">Erediensten
      Toezichtsdatabank SPARQL API</AuLink>
    voor toegang tot documenten van erediensten.
  </p>

  <p>
    Na het verkrijgen van toegang tot de Vendor API kunnen SPARQL query's worden
    uitgevoerd om lijsten van documenten op te vragen van een bepaald type om
    naar te kunnen refereren. Als eerste voorbeeld willen we als een centraal
    kerkbestuur een document opstellen dat een "Jaarrekening" van "Kerkfabriek
    St.-Lambertus" bundelt voor indiening bij de gemeente Grobbendonk. Hiervoor
    moeten we zoeken naar inzendingen van het eredienstbestuur van het juiste
    type. Als eerste zal een query moeten worden opgesteld om het juiste type
    document te bekomen, zoals in een vorig voorbeeld beschreven, of kan worden
    gekeken in de bovenstaande tabellen. Hierna vormen we een query zoals het
    voorbeeld hieronder.
  </p>

  <Snippet @snippetFilename="refereren/voorbeeld-ckb-grobbendonk.sparql" />

  <p>
    Op zich is deze query niets speciaals, behalve dat we een extra keer
    controleren dat het centraal kerkbestuur effectief instaat voor dit
    eredienstbestuur. Deze voorbeeldquery dient als basis voor meer uitgebreide
    query's. Het is uiteraard mogelijk om meer dan alleen de inzenddatum van het
    document op te vragen. Refereer hiervoor verder naar de Vendor API.
  </p>

  <p>
    Als tweede voorbeeld zullen we als gemeente "Grobbendonk" zoeken naar
    documenten "Jaarrekening" die gebundeld werden door een centraal
    kerkbestuur, origineel opgesteld door de "Kerkfabriek St.-Lambertus", waar
    als gemeente naar kan verwezen worden. Onderstaande query voert opnieuw een
    check uit tussen tussen gemeente, centraal kerkbestuur en het
    eredienstbestuur, om ervoor te zorgen dat we enkel kunnen verwijzen naar
    documenten waarvoor het centraal kerkbestuur het originele document al heeft
    gebundeld. Deze query geld opnieuw als basis voor meer uitgebreide query's.
  </p>

  <Snippet @snippetFilename="refereren/voorbeeld-gemeente-grobbendonk.sparql" />

  <AuHeading @skin="2" @level="2">Gebruikte prefixen</AuHeading>

  <AuTable @size="small">
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
        <td><CodeInline>pav:</CodeInline></td>
        <td><AuLinkExternal
            href="http://purl.org/pav/"
          >http://purl.org/pav/</AuLinkExternal></td>
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
        <td><CodeInline>besluit:</CodeInline></td>
        <td><AuLinkExternal
            href="http://data.vlaanderen.be/ns/besluit#"
          >http://data.vlaanderen.be/ns/besluit#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>organisatie:</CodeInline></td>
        <td><AuLinkExternal
            href="http://lblod.data.gift/vocabularies/organisatie/"
          >http://lblod.data.gift/vocabularies/organisatie/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>eli:</CodeInline></td>
        <td><AuLinkExternal
            href="http://data.europa.eu/eli/ontology#"
          >http://data.europa.eu/eli/ontology#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>skos:</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/2004/02/skos/core#"
          >http://www.w3.org/2004/02/skos/core#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>sh:</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/ns/shacl#"
          >http://www.w3.org/ns/shacl#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>ref:</CodeInline></td>
        <td><AuLinkExternal
            href="http://lblod.data.gift/vocabularies/referencing/"
          >http://lblod.data.gift/vocabularies/referencing/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>lblodBesluit:</CodeInline></td>
        <td><AuLinkExternal
            href="http://lblod.data.gift/vocabularies/besluit/"
          >http://lblod.data.gift/vocabularies/besluit/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>foaf:</CodeInline></td>
        <td><AuLinkExternal
            href="http://xmlns.com/foaf/0.1/"
          >http://xmlns.com/foaf/0.1/</AuLinkExternal></td>
      </tr>
    </:body>
  </AuTable>
</template>
