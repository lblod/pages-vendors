import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import AuLink from '@appuniversum/ember-appuniversum/components/au-link';
import AuTable from '@appuniversum/ember-appuniversum/components/au-table';
import MyCodeInline from '../../components/my-code-inline';
import SnippetToggle from '../../components/snippet-toggle';
import ScrollLink from '../../components/scroll-link';

<template>
  <AuHeading @level="1" @skin="1">Annotaties voor automatische melding</AuHeading>
  <p>
    Lokale besturen publiceren beslissingen die via de Toezicht module in het
    Loket voor Lokale Besturen gemeld moeten worden. Loket voor Lokale Besturen
    biedt een API aan waarop publicaties van beslissingen gemeld kunnen worden,
    waarna ze automatisch geharvest zullen worden en toevoegd worden als nieuwe
    melding in Loket voor Lokale Besturen. Dit document beschrijft de annotaties
    die gebruikt worden voor automatische melding.
  </p>

  <AuHeading @level="2" @skin="2">Gebruikte prefixen</AuHeading>
  <AuTable @size="default">
    <:header>
      <tr>
        <th>Prefix</th>
        <th>URI</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>meb</td>
        <td>
          <a
            href="http://rdf.myexperiment.org/ontologies/base/"
          >http://rdf.myexperiment.org/ontologies/base/</a>
        </td>
      </tr>
      <tr>
        <td>pav</td>
        <td>
          <a href="http://purl.org/pav/">http://purl.org/pav/</a>
        </td>
      </tr>
      <tr>
        <td>dct</td>
        <td>
          <a href="http://purl.org/dc/terms/">http://purl.org/dc/terms/</a>
        </td>
      </tr>
      <tr>
        <td>lblodBesluit</td>
        <td>
          <a
            href="http://lblod.data.gift/vocabularies/besluit/"
          >http://lblod.data.gift/vocabularies/besluit/</a>
        </td>
      </tr>
      <tr>
        <td>adms</td>
        <td>
          <a href="http://www.w3.org/ns/adms">http://www.w3.org/ns/adms#</a>
        </td>
      </tr>
      <tr>
        <td>muAccount</td>
        <td>
          <a
            href="http://mu.semte.ch/vocabularies/account/"
          >http://mu.semte.ch/vocabularies/account/</a>
        </td>
      </tr>
      <tr>
        <td>eli</td>
        <td>
          <a
            href="http://data.europa.eu/eli/ontology"
          >http://data.europa.eu/eli/ontology#</a>
        </td>
      </tr>
      <tr>
        <td>org</td>
        <td>
          <a href="http://www.w3.org/ns/org">http://www.w3.org/ns/org#</a>
        </td>
      </tr>
      <tr>
        <td>elod</td>
        <td>
          <a
            href="http://linkedeconomy.org/ontology"
          >http://linkedeconomy.org/ontology#</a>
        </td>
      </tr>
      <tr>
        <td>nie</td>
        <td>
          <a
            href="http://www.semanticdesktop.org/ontologies/2007/01/19/nie"
          >http://www.semanticdesktop.org/ontologies/2007/01/19/nie#</a>
        </td>
      </tr>
      <tr>
        <td>prov</td>
        <td>
          <a href="http://www.w3.org/ns/prov">http://www.w3.org/ns/prov#</a>
        </td>
      </tr>
      <tr>
        <td>nfo</td>
        <td>
          <a
            href="http://www.semanticdesktop.org/ontologies/2007/03/22/nfo"
          >http://www.semanticdesktop.org/ontologies/2007/03/22/nfo#</a>
        </td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="2" @skin="2">Entiteiten</AuHeading>
  <AuHeading @level="3" @skin="3">Submission</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>meb:Submission</MyCodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    De inzending van een meldingsplichtige publicatie. Een inzending wordt
    ingestuurd door een (externe) partij en leidt tot een (automatische)
    verwerking van het gepubliceerde document.
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
        <td>organization</td>
        <td><MyCodeInline>pav:createdBy</MyCodeInline></td>
        <td><MyCodeInline>besluit:Bestuurseenheid</MyCodeInline></td>
        <td>Bestuurseenheid die de publicatie gemaakt heeft.</td>
      </tr>
      <tr>
        <td>publisher</td>
        <td><MyCodeInline>pav:providedBy</MyCodeInline></td>
        <td><MyCodeInline>foaf:Agent</MyCodeInline></td>
        <td>Partij die de melding uitvoert.</td>
      </tr>
      <tr>
        <td>submittedResource</td>
        <td><MyCodeInline>dct:subject</MyCodeInline></td>
        <td><MyCodeInline>foaf:Document</MyCodeInline>
          (meestal
          <MyCodeInline>besluit:Besluit</MyCodeInline>)</td>
        <td>Beslissing/document dat gemeld wordt.</td>
      </tr>
      <tr>
        <td>status</td>
        <td><MyCodeInline>adms:status</MyCodeInline></td>
        <td><MyCodeInline>skos:Concept</MyCodeInline></td>
        <td>Status van de melding.</td>
      </tr>
      <tr>
        <td>href</td>
        <td><MyCodeInline>prov:atLocation</MyCodeInline></td>
        <td><MyCodeInline>rdfs:Resource</MyCodeInline></td>
        <td>URL waarop het document gepubliceerd is.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3">Vendor</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>foaf:Agent</MyCodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    (Externe) partij die een melding kan sturen.
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
        <td>name</td>
        <td><MyCodeInline>foaf:name</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Naam van de agent.</td>
      </tr>
      <tr>
        <td>key</td>
        <td><MyCodeInline>muAccount:key</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Sleutel waarmee geverifieerd kan worden of de agent een inzending
          mag insturen in naam van een andere organizatie.</td>
      </tr>
      <tr>
        <td>canActOnBehalfOf</td>
        <td><MyCodeInline>muAccount:canActOnBehalfOf</MyCodeInline></td>
        <td><MyCodeInline>besluit:Bestuurseenheid</MyCodeInline></td>
        <td>Bestuurseenheden in wiens naam de agent een melding mag insturen.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3" id="submitted-resource">Submitted resource</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>foaf:Document</MyCodeInline>
    (meestal
    <MyCodeInline>besluit:Besluit</MyCodeInline>)
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Gepubliceerde beslissing/document dat het onderwerp is van de melding.
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
        <td><MyCodeInline>rdf:type</MyCodeInline></td>
        <td><MyCodeInline>rdfs:Class</MyCodeInline></td>
        <td>Type van het besluit. Concept uit een van volgende concept schemes:
          <AuLinkExternal
            href="https://data.vlaanderen.be/id/conceptscheme/BesluitType"
          >https://data.vlaanderen.be/id/conceptscheme/BesluitType</AuLinkExternal><AuLinkExternal
            href="https://data.vlaanderen.be/id/conceptscheme/BesluitDocumentType"
          >https://data.vlaanderen.be/id/conceptscheme/BesluitDocumentType</AuLinkExternal></td>
      </tr>
      <tr>
        <td>publicationDate</td>
        <td><MyCodeInline>eli:date_publication</MyCodeInline></td>
        <td><MyCodeInline>xsd:date</MyCodeInline></td>
        <td>De offici&euml;le publicatiedatum van het besluit.</td>
      </tr>
      <tr>
        <td>passedBy</td>
        <td><MyCodeInline>eli:passed_by</MyCodeInline></td>
        <td><MyCodeInline>besluit:Bestuursorgaan</MyCodeInline></td>
        <td>Het bestuursorgaan dat de beslissing goedgekeurd heeft.
          <br />(Het gaat over bestuursorgaan in bestuursperiode, zie ook
          voorbeelden)</td>
      </tr>
      <tr>
        <td>subject</td>
        <td><MyCodeInline>eli:is_about</MyCodeInline></td>
        <td><MyCodeInline>foaf:Agent</MyCodeInline></td>
        <td>Agent (organisatie, bestuurseenheid) waarover de beslissing handelt.
          <br /><strong>Zie onderaan bij "Extra informatie" over
            <ScrollLink @scrollToId="linken-bestuurseenheid">Linken naar
              Bestuurseenheid bij sommige Besluittypes</ScrollLink>.</strong></td>
      </tr>
      <tr>
        <td>reportYear</td>
        <td><MyCodeInline>elod:financialYear</MyCodeInline></td>
        <td><MyCodeInline>xsd:gYear</MyCodeInline></td>
        <td>Het boekjaar waarover de beslissing handelt.</td>
      </tr>
      <tr>
        <td>firstDateInForce</td>
        <td><MyCodeInline>eli:first_date_entry_in_force</MyCodeInline></td>
        <td><MyCodeInline>xsd:date</MyCodeInline></td>
        <td>De datum waarop de regelgeving van kracht wordt.</td>
      </tr>
      <tr>
        <td>dateNoLongerInForce</td>
        <td><MyCodeInline>eli:date_no_longer_in_force</MyCodeInline></td>
        <td><MyCodeInline>xsd:date</MyCodeInline></td>
        <td>De laatste dag waarop de regelgeving nog van kracht is.</td>
      </tr>
      <tr>
        <td>authenticityType</td>
        <td><MyCodeInline>lblodBesluit:authenticityType</MyCodeInline></td>
        <td><MyCodeInline>skos:Concept</MyCodeInline></td>
        <td>
          Authenticiteit van de ingestuurde beslissing. Zie
          <AuLinkExternal
            href="https://github.com/lblod/codelists/blob/master/authenticitytype.ttl"
          >hier</AuLinkExternal>
          voor de URI's van de concepten.
        </td>
      </tr>
      <tr>
        <td>chartOfAccount</td>
        <td><MyCodeInline>lblodBesluit:chartOfAccount</MyCodeInline></td>
        <td><MyCodeInline>skos:Concept</MyCodeInline></td>
        <td>
          Code uit het Minimaal Algemeen Rekeningstelsel (MAR) waar in de
          beslissing naar verwezen wordt. Zie
          <AuLinkExternal
            href="https://github.com/lblod/codelists/blob/master/minimal-belgian-chart-of-accounts.ttl"
          >hier</AuLinkExternal>
          voor de URI's van de concepten.
        </td>
      </tr>
      <tr>
        <td>taxRate</td>
        <td><MyCodeInline>lblodBesluit:taxRate</MyCodeInline></td>
        <td><MyCodeInline>lblodBesluit:TaxRate</MyCodeInline></td>
        <td>Aanslagvoet die in de beslissing bepaald wordt.</td>
      </tr>
      <tr>
        <td>hasAdditionalTaxRate</td>
        <td><MyCodeInline>lblodBesluit:hasAdditionalTaxRate</MyCodeInline></td>
        <td><MyCodeInline>xsd:boolean</MyCodeInline></td>
        <td>Duidt aan of er nog bijkomende aanslagvoeten zijn dan deze
          beschreven in de beslissing.</td>
      </tr>
      <tr>
        <td>description</td>
        <td><MyCodeInline>dct:description</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Beschrijving bij de beslissing.</td>
      </tr>
      <tr>
        <td>comment</td>
        <td><MyCodeInline>rdfs:comment</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Opmerking bij de beslissing.</td>
      </tr>
      <tr>
        <td>link</td>
        <td><MyCodeInline>dct:hasPart</MyCodeInline></td>
        <td><MyCodeInline>rdfs:Resource</MyCodeInline></td>
        <td>URL van gerelateerd document dat een logisch onderdeel is van het
          besluit.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3">Aanslagvoet</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>lblodBesluit:TaxRate &lt; schema:UnitPriceSpecification</MyCodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Percentage waarop de belasting berekend wordt.
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
        <td>amount</td>
        <td><MyCodeInline>schema:price</MyCodeInline></td>
        <td><MyCodeInline>xsd:float</MyCodeInline></td>
        <td>Geldbedrag dat per eenheid gerekend wordt.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3">Bestuurseenheid</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>besluit:Bestuurseenheid</MyCodeInline>
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
        <td>classificatie</td>
        <td><MyCodeInline>besluit:classificatie</MyCodeInline></td>
        <td><MyCodeInline>skos:Concept</MyCodeInline></td>
        <td>Classificatie van de bestuurseenheid.</td>
      </tr>
      <tr>
        <td>naam</td>
        <td><MyCodeInline>skos:prefLabel</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Naam van de bestuurseenheid.</td>
      </tr>
      <tr>
        <td>identifier</td>
        <td><MyCodeInline>dct:identifier</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Identificator van de bestuurseenheid (vb. ondernemingsnummer).</td>
      </tr>
      <tr>
        <td>bestuursorgaan</td>
        <td><MyCodeInline>besluit:bestuurt</MyCodeInline></td>
        <td><MyCodeInline>besluit:Bestuursorgaan</MyCodeInline></td>
        <td>Bestuursorgaan die door de bestuurseenheid bestuurd wordt.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3">Bestuursorgaan</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>besluit:Bestuursorgaan</MyCodeInline>
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
        <td>classificatie</td>
        <td><MyCodeInline>besluit:classificatie</MyCodeInline></td>
        <td><MyCodeInline>skos:Concept</MyCodeInline></td>
        <td>Het type bestuursorgaan.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3">Behandeling van Agendapunt</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>besluit:BehandelingVanAgendapunt</MyCodeInline>
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
        <td>onderwerp</td>
        <td><MyCodeInline>dct:subject</MyCodeInline></td>
        <td><MyCodeInline>besluit:Agendapunt</MyCodeInline></td>
        <td>Het onderwerp van de activiteit.</td>
      </tr>
      <tr>
        <td>besluit</td>
        <td><MyCodeInline>prov:generated</MyCodeInline></td>
        <td><MyCodeInline>besluit:Besluit</MyCodeInline></td>
        <td>Een besluit dat is opgemaakt naar aanleiding van de behandeling van
          het agendapunt.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="3" @skin="3">Agendapunt</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>besluit:Agendapunt</MyCodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Eigenschappen</AuHeading>
  <p>
    Geen relevante eigenschappen.
  </p>
  <AuHeading @level="3" @skin="3">Zitting</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>besluit:Zitting</MyCodeInline>
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
        <td>agendapunt</td>
        <td><MyCodeInline>besluit:behandelt</MyCodeInline></td>
        <td><MyCodeInline>besluit:Agendapunt</MyCodeInline></td>
        <td>Een formeel vastgelegd agendapunt van de zitting.</td>
      </tr>
      <tr>
        <td>gestartOpTijdstip</td>
        <td><MyCodeInline>prov:startedAtTime</MyCodeInline></td>
        <td><MyCodeInline>xsd:dateTime</MyCodeInline></td>
        <td>Tijdstip waarop de zitting begint.</td>
      </tr>
      <tr>
        <td>bestuursorgaan</td>
        <td><MyCodeInline>besluit:isGehoudenDoor</MyCodeInline></td>
        <td><MyCodeInline>besluit:Bestuursorgaan</MyCodeInline></td>
        <td>Duidt aan door welk orgaan de zitting is gehouden.</td>
      </tr>
      <tr>
        <td>notulen</td>
        <td><MyCodeInline>besluit:heeftNotulen</MyCodeInline></td>
        <td><MyCodeInline>foaf:Document</MyCodeInline></td>
        <td>Notulen van de zitting.</td>
      </tr>
      <tr>
        <td>besluitenlijst</td>
        <td><MyCodeInline>besluit:heeftBesluitenlijst</MyCodeInline></td>
        <td><MyCodeInline>foaf:Document</MyCodeInline></td>
        <td>Besluitenlijst van de zitting.</td>
      </tr>
      <tr>
        <td>agenda</td>
        <td><MyCodeInline>besluit:heeftAgenda</MyCodeInline></td>
        <td><MyCodeInline>foaf:Document</MyCodeInline></td>
        <td>Agenda van de zitting.</td>
      </tr>
      <tr>
        <td>uittreksel</td>
        <td><MyCodeInline>besluit:heeftUittreksel</MyCodeInline></td>
        <td><MyCodeInline>foaf:Document</MyCodeInline></td>
        <td>Uittreksel van een besluit van de zitting.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="2" @skin="2">Voorbeelden</AuHeading>

  <AuHeading @level="3" @skin="3">Minimale Besluitenlijst</AuHeading>
  <SnippetToggle
    @snippetFilename="meldingsplicht-annotaties/voorbeeld-besluitenlijst.html"
  />

  <AuHeading @level="3" @skin="3">Besluitenlijst met resultaat van de stemming</AuHeading>
  <SnippetToggle
    @snippetFilename="meldingsplicht-annotaties/voorbeeld-besluitenlijst-met-stemming.html"
  />

  <AuHeading @level="3" @skin="3">Budget</AuHeading>
  <SnippetToggle
    @snippetFilename="meldingsplicht-annotaties/voorbeeld-budget.html"
  />

  <AuHeading @level="3" @skin="3">Reglement</AuHeading>
  <SnippetToggle
    @snippetFilename="meldingsplicht-annotaties/voorbeeld-reglement.html"
  />

  <AuHeading @level="2" @skin="2">Extra informatie</AuHeading>

  <AuHeading @level="3" @skin="3" id="linken-bestuurseenheid">Linken naar
    Bestuurseenheid bij sommige Besluittypes</AuHeading>

  <p>
    Bij sommige besluiten is het nodig om te refereren naar een Bestuurseenheid.
    Hierbij gaat het bijvoorbeeld over de besluiten met volgende types:
  </p>
  <ul>
    <li>Advies jaarrekening</li>
    <li>Besluit over budget(wijziging)</li>
    <li>Besluit over meerjarenplan(aanpassing)</li>
    <li>Schorsingsbesluit</li>
    <li>Stuiten</li>
    <li>Aanvraag desaffectatie presbyteria/kerken</li>
  </ul>
  <p>
    Om vanuit het Besluit te refereren naar de betreffende Bestuurseenheid via
    de URI, gebruik het RDF predicaat
    <MyCodeInline>eli:is_about</MyCodeInline>. Zie eveneens bij de bovenstaande
    tabel onder
    <ScrollLink @scrollToId="submitted-resource">Submitted Resource</ScrollLink>
    voor nog meer eigenschappen voor Besluiten.
  </p>
  <p>
    Onderstaande query kan gebruikt worden om gerelateerde
    Eredienstbestuurseenheden te vinden voor een gegeven Bestuurseenheid.
    Vervang in onderstaande query de URI voor het Bestuurseenheid met de URI van
    de betreffende eenheid. Voer deze SPARQL query uit op de
    <AuLink @route="docs.centrale-vindplaats-sparql">Centrale Vindplaats</AuLink>.
  </p>
  <SnippetToggle
    @snippetFilename="meldingsplicht-annotaties/voorbeeld-verkrijg-bestuurseenheden.sparql"
  />

  <AuHeading @level="4" @skin="4">Voorbeeld</AuHeading>
  <p>
    Beschouw onderstaand voorbeeld van Besluit waarin wordt verwezen naar een
    betreffende Bestuurseenheid, direct als eigenschap van het Besluit.
  </p>
  <SnippetToggle
    @snippetFilename="meldingsplicht-annotaties/voorbeeld-rdfa-met-link-bestuurseenheid.html"
  />

  <AuHeading @level="3" @skin="3">Datetime strings</AuHeading>
  <p>
    Bij het verwerken van de
    <MyCodeInline>xsd:dateTime</MyCodeInline>
    strings wordt het volgende ondersteund:
    <br />
    Het gaat over een subset van de ISO-8601 specificatie. Het formaat moet zijn
  </p>
  <ul>
    <li>Datum: "YYYY-MM-DD"</li>
    <li>Tijdsspecificatie: "YYYY-MM-DDTHH:mm:ss.SSSS" met "T" als separator</li>
    <li>Offset (tov UTC) met het volgende formaat: +-HH:mm, +-HHmm, +-HH of Z</li>
  </ul>
  <AuHeading @level="4" @skin="4">Voorbeelden van aanvaarde
    <MyCodeInline>xsd:dateTime</MyCodeInline>
    strings</AuHeading>
  <ul>
    <li>'2020-05-14T06:36:05.7540Z'</li>
    <li>'2020-05-14T06:36:05.7540+01:10'</li>
    <li>'2020-05-14T06:36:05.7540+01'</li>
    <li>'2020-05-14T06:36:05.7540-0130'</li>
  </ul>
  <AuHeading @level="2" @skin="2">Meldingsplicht API</AuHeading>
  <p>
    Bekijk de API die vendors kunnen gebruiken om besluiten te melden:
    <AuLink @route="docs.meldingsplicht">Meldingsplicht API</AuLink>.
  </p>
</template>
