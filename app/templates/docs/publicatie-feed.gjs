import { pageTitle } from 'ember-page-title';
import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import CodeInline from '../../components/code-inline';
import SnippetToggle from '../../components/snippet-toggle';
import Snippet from '../../components/snippet';

<template>
  {{pageTitle "Publicatie Events ontsluiten via LDES"}}
  <AuHeading @level="1" @skin="1">Publicatie Events ontsluiten via LDES</AuHeading>
  <p>
    Gepubliceerde documenten kunnen meermaals geupdated worden. Door externe
    systemen gerichter te laten opvragen wordt de load op de publicatieomgeving
    en bij de consumenten beperkt. Een Linked Data Event Stream (LDES) laat je
    toe om te publiceren welke URLs geupdated zijn zodat consumenten gericht
    komen opvragen.
  </p>
  <p>
    LDES is een standaardformaat wat toe laat entiteiten en wijzigingen in
    tijdreeksen te publiceren als een gestructureerde datastroom. In het kader
    van een publicatieplatform kan een LDES-feed gebruikt worden om publicaties,
    inclusief hun locatie, type en publicatiedatum, op een efficiënte en
    schaalbare manier beschikbaar te stellen. Zo kunnen systemen die Linked Data
    verzamelen (harvesters) eenvoudig de gepubliceerde documenten vinden op het
    publicatieplatform. Dit document biedt een technische introductie voor
    ontwikkelaars die een LDES-feed willen toevoegen aan een publicatieplatform.
  </p>

  <AuHeading @level="2" @skin="2" id="inhoud-van-de-feed">Inhoud van de feed</AuHeading>
  <p>
    Een LDES-feed is gebaseerd op de RDF-datastructuur en wordt meestal
    aangeboden via een JSON-LD of Turtle representatie. De basiscomponenten van
    een LDES-feed zijn:
  </p>
  <ul>
    <li><CodeInline @language="turtle">Tree:Node</CodeInline>: Een subverzameling van de stream
      (paginering).</li>
    <li><CodeInline @language="turtle">Tree:Relation</CodeInline>: Biedt links naar voorgaande of
      volgende pagina’s.</li>
    <li><CodeInline @language="turtle">LDES:EventStream</CodeInline>: Een sequentie van wijzigingen
      over tijd.</li>
  </ul>

  <p>Elke publicatie wordt als een entiteit weergegeven met minimaal:</p>
  <ul>
    <li><CodeInline @language="turtle">dct:isVersionOf</CodeInline>: Unieke identificatie van de
      publicatie.</li>
    <li><CodeInline @language="turtle">prov:atLocation</CodeInline>: Locatie (URL) van de
      publicatie.</li>
    <li><CodeInline @language="turtle">dct:type</CodeInline>: Type van de publicatie, uit de
      <AuLinkExternal
        href="https://data.vlaanderen.be/doc/concept/BesluitDocumentType/"
      >BesluitDocumentType codelijst</AuLinkExternal>.
    </li>
    <li><CodeInline @language="turtle">prov:generatedAtTime</CodeInline>: Publicatiedatum van het
      document.</li>
  </ul>

  <p>
    LDES kan aangeboden worden in meerdere serializaties, in dit document gaan
    we uit van text/turtle serializatie, maar ook JSON-LD is mogelijk. Op het
    einde van het document worden er voorbeelden voorzien in beide formaten.
  </p>

  <AuHeading @level="3" @skin="3" id="algemene-structuur">Algemene structuur</AuHeading>
  <p>
    Een Linked Data Event Stream (LDES) (ldes:EventStream) is een verzameling
    (rdfs:subClassOf tree:Collection) van onveranderlijke objecten, waarbij elk
    object wordt beschreven met behulp van een set RDF-triples.
  </p>
  <Snippet @snippetFilename="publicatie-ldes/metadata-structure.turtle" />
  <ul>
    <li><CodeInline @language="turtle">ldes:timestampPath</CodeInline>
      verwijst naar het predicate dat gebruikt wordt in de member om de
      timestamp van de data te vinden. In dit geval de publicatiedatum van het
      document</li>
    <li><CodeInline @language="turtle">ldes:versionOfPath</CodeInline>
      verwijst naar het predicate dat wordt gebruikt om te definiëren dat een
      tree:member van een ldes:EventStream een versie is van een rdf-document.
      (zie "Versionering")</li>
    <li><CodeInline @language="turtle">tree:shape</CodeInline>
      linkt naar de verwachte vorm van de members en wordt gebruikt voor
      validatie. Deze mag linken naar de shape gepubliceerd op
      <AuLinkExternal
        href="https://lblod.github.io/pages-vendors/assets/shacl/shacl-submission.ttl#DocumentShape"
      >deze pagina</AuLinkExternal>. Indien de feed meer data bevat dan de
      minimale set hier beschreven, kan ook een eigen shape gespecifieerd
      worden.</li>
    <li><CodeInline @language="turtle">tree:member</CodeInline>
      duidt op een member in de verzameling, in dit geval een gepubliceerd
      document.</li>
    <li><CodeInline @language="turtle">tree:view</CodeInline>
      Linkt naar de huidige node (pagina) in de collectie (zie fragmentering en
      paginering).</li>
  </ul>

  <AuHeading @level="3" @skin="3" id="fragmentering-en-paginering">Fragmentering
    en paginering</AuHeading>
  <p>
    Als een feed te groot wordt om in één keer op te halen, kan deze worden
    opgedeeld in kleinere stukken (fragmenten). Dit gebeurt volgens de
    <AuLinkExternal href="https://treecg.github.io/specification/">
      TREE-specificatie</AuLinkExternal>, die verschillende manieren biedt om
    data op te splitsen en te doorzoeken. Zo kan de implementator kiezen om
    bijvoorbeeld publicaties in stijgende of dalende volgorde van publicatie te
    publiceren.
  </p>

  <p>
    Elk individueel fragment is wederom gepubliceerd op een URL. LDES clients
    behandelen deze individuele documenten. Om te weten of een pagina gewijzigd
    is worden de HTTP cache headers gebruikt. Het is sterk aangewezen op een
    fragment wat niet meer kan wijzigen op een vaste URL te plaatsen en via HTTP
    Cache headers aan te geven dat het document niet meer kan wijzigen.
  </p>

  <AuHeading @level="4" @skin="4">Voorbeeld in dalende volgorde (nieuwste
    eerst): pagina 1</AuHeading>
  <SnippetToggle @snippetFilename="publicatie-ldes/fragment.turtle" />
  <p>
    Elke pagina (<CodeInline @language="turtle">tree:Node</CodeInline>) gebruikt TREE-relaties om
    te navigeren door de publicaties op basis van hun tijdstempel. De
    <CodeInline @language="turtle">tree:LessThanRelation</CodeInline>
    verwijst naar de volgende pagina (page=2), die events bevat met een
    prov:generatedAtTime kleiner dan "2025-03-22T00:00:00Z".
  </p>

  <AuHeading @level="4" @skin="4">Voorbeeld in dalende volgorde (nieuwste
    eerst): pagina 2</AuHeading>
  <SnippetToggle @snippetFilename="publicatie-ldes/fragment-2.turtle" />
  <p>
    De relaties
    <CodeInline @language="turtle">tree:GreaterThanOrEqualToRelation</CodeInline>
    en
    <CodeInline @language="turtle">tree:LessThanRelation</CodeInline>
    definiëren een bereik voor page=2. In dit geval kunnen we dus publicaties
    met een timestamp tussen 2025-03-22T00:00:00Z en 2025-03-11T12:00:00Z
    verwachten op pagina 2. Voor oudere publicaties wordt verwezen naar pagina
    3, voor nieuwere naar pagina 1.
  </p>
  <AuHeading
    @level="3"
    @skin="3"
    id="annotatie-publicaties-document-types"
  >Versionering</AuHeading>
  <p>
    Als een publicatie wordt geupdate, dan wordt de publicatie nogmaals op de
    feed gezet. Dit is een nieuwe member met eigen identifier, die naar de
    "echte" identifier linkt via de
    <CodeInline @language="turtle">dct:isVersionOf</CodeInline>
    relatie. De member krijgt dan een nieuwe
    <CodeInline @language="turtle">prov:generatedAtTime</CodeInline>.
  </p>
  <SnippetToggle @snippetFilename="publicatie-ldes/version-of.turtle" />
  <p>
    In bovenstaande voorbeeld werd de besluitenlijst op
    https://vlavirgem.be/web/BesluitenLijst_Vast%20bureau_13-03-2025.html
    geupdate met een nieuwe versie vanwege een typfout. De publicatie staat nu 2
    keer op de feed: eenmaal op de originele publicatiedatum, en eenmaal met de
    laatste publicatiedatum op 28 Maart 2025.
  </p>

  <AuHeading @level="4" @skin="4">Volledig voorbeeld (turtle)</AuHeading>
  <SnippetToggle @snippetFilename="publicatie-ldes/full-example.turtle" />
  <AuHeading @level="4" @skin="4">Volledig voorbeeld (JSON-LD)</AuHeading>
  <SnippetToggle @snippetFilename="publicatie-ldes/full-example.json" />
</template>
