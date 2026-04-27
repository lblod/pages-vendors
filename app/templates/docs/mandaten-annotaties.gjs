import { pageTitle } from 'ember-page-title';
import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import AuTable from '@appuniversum/ember-appuniversum/components/au-table';
import CodeInline from '../../components/code-inline';
import SnippetToggle from '../../components/snippet-toggle';

<template>
  {{pageTitle "Mandatendatabank"}}
  <AuHeading @level="1" @skin="1">Mandatendatabank</AuHeading>
  <p>
    Het lokaal mandatenbeheer en de mandatendatabank bevat de mandatarissen van
    de lokale besturen (gemeenten, OCMWs, districten en provincies). Deze
    databank volgt een uitbreiding op het applicatieprofiel
    <AuLinkExternal
      href="https://data.vlaanderen.be/doc/applicatieprofiel/mandatendatabank/"
    >mandatendatabank</AuLinkExternal>.
  </p>
  <p>
    Dit document beschrijft deze uitbreiding.
    <AuLinkExternal
      href="https://drive.google.com/file/d/1fGkae_PGUZVHehHA33ratebByMtEu2W0/view?usp=drive_link"
    >
      Een class-diagram</AuLinkExternal>
    dat deze uitbreiding weergeeft is ook beschikbaar. De stabiliteit van
    predicaten en types verschilt naar gelang de prefix. De
    <CodeInline>ext</CodeInline>
    prefix wordt gebruikt voor interne uitbreidingen en is het minst stabiel. De
    <CodeInline>lmb</CodeInline>
    prefix wordt gebruikt voor stabielere uitbreidingen die ook hergebruikt
    kunnen worden in het bredere LBLOD eco-systeem.
  </p>
  <p>
    Opgelet! Sommige predicaten volgen de originele versie van het
    applicatieprofiel. Voorlopig wordt dit zo gehouden omdat de verschillende
    vendors dit model ook volgen. Bij publicatie worden beide versies van de uri
    aangeboden. Dit is het geval voor:
  </p>
  <ul>
    <li><CodeInline @language="turtle">mandaat:isTijdspecialisatieVan</CodeInline>: dit is officieel
      <CodeInline @language="turtle">generiek:isTijdspecialisatieVan</CodeInline></li>
    <li><CodeInline>generiek</CodeInline>: deze prefix wordt met http gebruikt in de applicatie, maar in
      werkelijkheid is het een https prefix</li>
    <li><CodeInline @language="turtle">besluit:classificatie</CodeInline>: dit is officieel <CodeInline @language="turtle">org:classification</CodeInline></li>
  </ul>
  <p>
    Het lokaal mandatenbeheer heeft ook een
    <AuLinkExternal
      href="https://abb-vlaanderen.gitbook.io/handleiding-lokaal-mandatenbeheer"
    >
      gebruikershandleiding</AuLinkExternal>. Deze kan extra verheldering
    brengen over hoe de concepten in dit document in de praktijk gebruikt
    worden.
  </p>
  <AuHeading @level="2" @skin="2">LDES feeds</AuHeading>
  <p>
    Het lokaal mandatenbeheer biedt verschillende LDES streams aan. Meer
    informatie over deze streams is terug te vinden in
    <a
      href="https://github.com/lblod/app-lokaal-mandatenbeheer/blob/master/docs/LDES.md"
      target="_blank"
      rel="noopener noreferrer"
    >de source code documentatie.</a>
  </p>

  <AuHeading @level="2" @skin="2">Secure SPARQL endpoint</AuHeading>
  <p>
    Het lokaal mandatenbeheer biedt een secure sparql endpoint aan op de url
    <a
      href="https://mandatenbeheer.lokaalbestuur.vlaanderen.be/vendor/sparql"
      rel="noopener noreferrer"
      target="_blank"
    >
      https://mandatenbeheer.lokaalbestuur.vlaanderen.be/vendor/sparql</a>. Dit
    endpoint is beveiligd via de
    <a
      href="https://github.com/lblod/vendor-login-service"
      target="_blank"
      rel="noopener noreferrer"
    >vendor login service</a>
    met dezelfde credentials als de credentials gebruikt in Loket. De procedure
    om deze aan te vragen staat beschreven in de documentatie van Loket.
  </p>

  <AuHeading @level="2" @skin="2">Automatische doorstroom van informatie</AuHeading>
  <p>
    De informatie beheerd in lokaal mandatenbeheer stroomt automatisch voort
    naar Loket en van daar naar de Mandatendatabank en de centrale vindplaats.
    Mandatarissen in de draft status stromen niet automatisch door.
  </p>
  <p>
    Gevoelige persoonsgegevens als rijksregisternummers, geslachten en
    geboortedatums stromen ook niet door.
  </p>

  <AuHeading @level="2" @skin="2">Gebruikte prefixen</AuHeading>
  <AuTable>
    <:header>
      <tr>
        <th>Prefix</th>
        <th>URI</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td><CodeInline>adres</CodeInline></td>
        <td><AuLinkExternal
            href="https://data.vlaanderen.be/ns/adres#"
          >https://data.vlaanderen.be/ns/adres#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>besluit</CodeInline></td>
        <td><AuLinkExternal
            href="http://data.vlaanderen.be/ns/besluit#"
          >http://data.vlaanderen.be/ns/besluit#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>ext</CodeInline></td>
        <td><AuLinkExternal
            href="http://mu.semte.ch/vocabularies/ext/"
          >http://mu.semte.ch/vocabularies/ext/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>foaf</CodeInline></td>
        <td><AuLinkExternal
            href="http://xmlns.com/foaf/0.1/"
          >http://xmlns.com/foaf/0.1/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>lblodlg</CodeInline></td>
        <td><AuLinkExternal
            href="http://data.lblod.info/vocabularies/leidinggevenden/"
          >http://data.lblod.info/vocabularies/leidinggevenden/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>locn</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/ns/locn#"
          >http://www.w3.org/ns/locn#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>lmb</CodeInline></td>
        <td><AuLinkExternal
            href="http://lblod.data.gift/vocabularies/lmb/"
          >http://lblod.data.gift/vocabularies/lmb/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>mandaat</CodeInline></td>
        <td><AuLinkExternal
            href="http://data.vlaanderen.be/ns/mandaat#"
          >http://data.vlaanderen.be/ns/mandaat#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>person</CodeInline></td>
        <td><AuLinkExternal
            href="https://data.vlaanderen.be/ns/persoon#"
          >https://data.vlaanderen.be/ns/persoon#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>persoon</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/ns/person#"
          >http://www.w3.org/ns/person#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>org</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/ns/org#"
          >http://www.w3.org/ns/org#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>schema</CodeInline></td>
        <td><AuLinkExternal
            href="http://schema.org/"
          >http://schema.org/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><CodeInline>xsd</CodeInline></td>
        <td><AuLinkExternal
            href="http://www.w3.org/2001/XMLSchema#"
          >http://www.w3.org/2001/XMLSchema#</AuLinkExternal></td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="2" @skin="2">Entiteiten</AuHeading>

  <AuHeading @level="3" @skin="3">Besluit</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @language="turtle">besluit:Besluit</CodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Een besluit zoals gedefinieerd in het
    <a
      href="https://data.vlaanderen.be/doc/applicatieprofiel/besluit-publicatie/#Besluit"
      rel="noopener noreferrer"
      target="_blank"
    >besluit-publicatie</a>. In de implementatie is dit concept samengevoegd
    met
    <CodeInline @language="turtle">besluit:Rechtsgrond</CodeInline>. Enkel de eigenschappen die
    relevant zijn voor de Mandatendatabank worden hieronder beschreven.
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
        <td>bekrachtigt aanstelling van</td>
        <td><CodeInline @language="turtle">mandaat:bekrachtigtAanstellingVan</CodeInline></td>
        <td><CodeInline @language="turtle">mandaat:Mandataris</CodeInline></td>
        <td>De Mandataris waarvan de aanstelling bekrachtigd wordt door dit
          besluit. Een bekrachtigde mandataris kan een link hebben naar een
          Besluit als dat besluit (voldoende) beschreven is in gelinkte data.
          Mandatarissen kunnen echter ook manueel bekrachtigd worden.</td>
      </tr>
      <tr>
        <td>bekrachtigt ontslag van</td>
        <td><CodeInline @language="turtle">mandaat:bekrachtigtOntslagVan</CodeInline></td>
        <td><CodeInline @language="turtle">mandaat:Mandataris</CodeInline></td>
        <td>De Mandataris waarvan het mandaat door dit besluit beëindigd wordt.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="4" @skin="4">Voorbeeld</AuHeading>
  <SnippetToggle @snippetFilename="mandaten-annotaties/besluit.turtle" />

  <AuHeading @level="3" @skin="3">Bestuursorgaan (in bestuursperiode)</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @language="turtle">besluit:Bestuursorgaan</CodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Een bestuursorgaan, eventueel beperkt tot een bepaalde bestuursperiode.
    Dezelfde klasse wordt gebruikt om een Bestuursorgaan weer te geven als om
    een Bestuursorgaan in de tijd weer te geven. Het onderscheid tussen beide
    wordt gemaakt door de eigenschap
    <CodeInline @language="turtle">besluit:isTijdspecialisatieVan</CodeInline>
    waarmee een Bestuursorgaan in de tijd verwijst naar zijn bestuursorgaan.
    Daarnaast wordt de
    <CodeInline @language="turtle">besluit:classificatie</CodeInline>
    enkel gespecificeerd op een Bestuursorgaan, niet op een Bestuursorgaan in de
    tijd. Een Bestuursorgaan in de tijd heeft een
    <CodeInline @language="turtle">mandaat:bindingStart</CodeInline>
    en een
    <CodeInline @language="turtle">mandaat:bindingEinde</CodeInline>. Deze eigenschappen geven aan
    wanneer het Bestuursorgaan in de tijd actief is. Indien een Bestuursorgaan
    in de tijd geen
    <CodeInline @language="turtle">mandaat:bindingEinde</CodeInline>
    heeft, is het Bestuursorgaan in de tijd nog steeds actief. Enkel
    Bestuursorganen in de tijd zijn gekoppeld aan instanties van de klasse
    <CodeInline @language="turtle">mandaat:Mandaat</CodeInline>. Dat betekent dus ook dat de URI
    van bijvoorbeeld een burgemeester mandaat verandert per bestuursperiode. De
    classificatie code (<CodeInline @language="turtle">org:role</CodeInline>) blijft wel dezelfde
    uiteraard.
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
        <td>bevat</td>
        <td><CodeInline @language="turtle">org:hasPost</CodeInline></td>
        <td><CodeInline @language="turtle">mandaat:Mandaat</CodeInline></td>
        <td>Een mandaat dat binnen dit bestuursorgaan in de tijd bekleed kan
          worden. Een mandaat kan op deze manier deel zijn van verschillende
          Bestuursorganen in de tijd. Zo is het Burgemeester mandaat steeds deel
          van het Bestuursorgaan Burgemeester en het Bestuursorgaan College van
          Burgemeester en Schepenen.</td>
      </tr>
      <tr>
        <td>bindingStart</td>
        <td><CodeInline @language="turtle">mandaat:bindingStart</CodeInline></td>
        <td><CodeInline @language="turtle">xsd:dateTime</CodeInline></td>
        <td>Het tijdstip waar op dit Bestuursorgaan in de tijd actief
          wordt/werd.</td>
      </tr>
      <tr>
        <td>bindingEinde</td>
        <td><CodeInline @language="turtle">mandaat:bindingEinde</CodeInline></td>
        <td><CodeInline @language="turtle">xsd:dateTime</CodeInline></td>
        <td>Het tijdstip waar op dit Bestuursorgaan in de tijd niet langer
          actief wordt/werd.</td>
      </tr>
      <tr>
        <td>classificatie</td>
        <td><CodeInline @language="turtle">besluit:classificatie</CodeInline></td>
        <td><CodeInline @language="turtle">skos:Concept</CodeInline></td>
        <td>De classificatie van het bestuursorgaan. Bijvoorbeeld Gemeenteraad,
          of Burgemeester.</td>
      </tr>
      <tr>
        <td>isTijdspecialisatieVan</td>
        <td><CodeInline @language="turtle">mandaat:isTijdspecialisatieVan</CodeInline></td>
        <td><CodeInline @language="turtle">besluit:Bestuursorgaan</CodeInline></td>
        <td>Het bestuursorgaan waarvan dit Bestuursorgaan in de tijd een
          specialisatie is.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="4" @skin="4">Voorbeeld</AuHeading>
  <SnippetToggle @snippetFilename="mandaten-annotaties/bestuursorgaan.turtle" />

  <AuHeading @level="3" @skin="3">Fractie</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @language="turtle">mandaat:Fractie</CodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Een politieke fractie binnen een bestuursorgaan. Mandatarissen zijn gelinkt
    aan een fractie via een instantie van de
    <CodeInline @language="turtle">org:Membership</CodeInline>
    klasse. Binnen één legislatuur kan een persoon enkel lid zijn van 1
    politieke fractie en eventueel 1 'onafhankelijke' fractie. Dergelijke
    onafhankelijke fracties hebben telkens maar 1 persoon die er lid van is
    (eventueel via meerdere Mandatarissen als de persoon meerdere mandaten heeft
    of er statusveranderingen zijn in de opname van het mandaat, zoals een
    verandering in rangorde).
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
        <td>naam</td>
        <td><CodeInline @language="turtle">regorg:legalName</CodeInline></td>
        <td><CodeInline @language="turtle">string</CodeInline></td>
        <td>De naam van de fractie</td>
      </tr>
      <tr>
        <td>bestuursorganen in tijd</td>
        <td><CodeInline @language="turtle">org:memberOf</CodeInline></td>
        <td><CodeInline @language="turtle">besluit:Bestuursorgaan</CodeInline></td>
        <td>De Bestuursorganen in de tijd waar de fractie deel van uitmaakt.</td>
      </tr>
      <tr>
        <td>fractietype</td>
        <td><CodeInline @language="turtle">ext:isFractietype</CodeInline></td>
        <td><CodeInline @language="turtle">skos:Concept</CodeInline></td>
        <td>het type van de fractie, hetzij samenstellingsverband
          <CodeInline
          >http://data.vlaanderen.be/id/concept/Fractietype/Samenwerkingsverband</CodeInline>,
          hetzij onafhankelijk
          <CodeInline
          >http://data.vlaanderen.be/id/concept/Fractietype/Onafhankelijk</CodeInline>.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="4" @skin="4">Voorbeeld</AuHeading>
  <SnippetToggle @snippetFilename="mandaten-annotaties/fractie.turtle" />

  <AuHeading @level="3" @skin="3">Lidmaatschap</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @language="turtle">org:Membership</CodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    De voorstelling van het lidmaatschap van een mandataris aan een fractie. De
    start en het einde van het lidmaatschap komen steeds overeen met de start en
    de einddatum van de Mandataris aangezien er bij verandering van fractie een
    nieuwe Mandataris wordt aangemaakt.
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
        <td>binnen fractie</td>
        <td><CodeInline @language="turtle">org:organisation</CodeInline></td>
        <td><CodeInline @language="turtle">mandaat:Fractie</CodeInline></td>
        <td>De fractie waar de mandataris lid van is</td>
      </tr>
      <tr>
        <td>lid gedurende</td>
        <td><CodeInline @language="turtle">org:memberDuring</CodeInline></td>
        <td><CodeInline @language="turtle">m8g:PeriodOfTime</CodeInline></td>
        <td>De periode waarin de mandataris lid is van de fractie. Deze periode
          zal altijd overeenkomen met de
          <CodeInline @language="turtle">mandaat:start</CodeInline>
          en
          <CodeInline @language="turtle">mandaat:einde</CodeInline>
          van de Mandataris. In de applicatie Lokaal Mandatenbeheer zal het
          tijdsinterval dan ook niet opgeslagen worden, het wordt bij publicatie
          berekend.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="4" @skin="4">Voorbeeld</AuHeading>
  <SnippetToggle @snippetFilename="mandaten-annotaties/lidmaatschap.turtle" />

  <AuHeading @level="3" @skin="3">Mandaat</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @language="turtle">mandaat:Mandaat</CodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Een mandaat dat bekleed kan worden binnen een Bestuursorgaan in de tijd. De
    opname van een mandaat wordt voorgesteld door een
    <CodeInline @language="turtle">mandaat:Mandataris</CodeInline>.
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
        <td>bestuursfunctie</td>
        <td><CodeInline @language="turtle">org:role</CodeInline></td>
        <td><CodeInline @language="turtle">skos:Concept</CodeInline></td>
        <td>De bestuursfunctie code van het mandaat, bijvoorbeeld
          Gemeenteraadslid of Burgemeester.</td>
      </tr>
      <tr>
        <td>aantal houders</td>
        <td><CodeInline @language="turtle">mandaat:aantalHouders</CodeInline></td>
        <td><CodeInline @language="turtle">xsd:integer</CodeInline></td>
        <td>Het minimum aantal houders voor het mandaat.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="4" @skin="4">Voorbeeld</AuHeading>
  <SnippetToggle @snippetFilename="mandaten-annotaties/mandaat.turtle" />

  <AuHeading @level="3" @skin="3">Mandataris</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @language="turtle">mandaat:Mandataris</CodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Een persoon in zijn rol als houder van een mandaat.
  </p>
  <p>
    Een Mandataris is een geversioneerde entiteit. Dat betekent dat wanneer er
    zich veranderingen voordoen in de opname van een Mandaat door een Persoon,
    er een nieuwe instantie van Mandataris zal aangemaakt worden. De oude
    Mandataris krijgt een einddatum van het moment van de aanpassing, met als
    waarden de oude status van de Mandataris en er wordt een nieuwe Mandataris
    instantie gemaakt met als startdatum het moment van de verandering en de
    nieuwe waarden. Op deze manier wordt er een historiek gecreëerd van hoe de
    Mandataris verandert doorheen de tijd, zonder dat er informatie verloren
    gaat.
  </p>
  <p>
    Er moet een nieuwe Mandataris aangemaakt worden wanneer:
  </p>
  <ul>
    <li>De mandataris van bestuurlijke status verandert (e.g. de mandataris
      raakt verhinderd)</li>
    <li>De mandataris van fractie verandert (e.g. de mandataris wordt
      onafhankelijk)</li>
    <li>De mandataris van rangorde verandert (e.g. de mandataris schuift een
      plaatsje op omdat een andere mandataris vervangen wordt)</li>
    <li>De mandataris een ander mandaat opneemt (e.g. de aangewezen burgemeester
      wordt nu burgemeester)</li>
    <li>Het mandaat opgenomen wordt door een andere persoon</li>
  </ul>
  <p>
    Het is mogelijk dat er incorrecte gegevens werden ingegeven voor een
    Mandataris, bijvoorbeeld een verkeerde startdatum. In dat geval moet er geen
    nieuwe Mandataris aangemaakt worden, de gegevens waren immers foutief en
    moeten niet bijgehouden worden. De bestaande Mandataris krijgt dan gewoon
    een nieuwe, correcte startdatum.
  </p>
  <p>
    Sommige organen hebben naast leden ook een voorzitter. Bij de gemeenteraad
    en raad van maatschappelijk welzijn moet de voorzitter ook steeds lid zijn
    van het orgaan, hij of zij heeft dus telkens 2 mandaten met dezelfde start
    en einddatums.
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
        <td>bekleedt</td>
        <td><CodeInline @language="turtle">org:holds</CodeInline></td>
        <td><CodeInline @language="turtle">mandaat:Mandaat</CodeInline></td>
        <td>Het mandaat dat deze mandataris bekleedt.</td>
      </tr>
      <tr>
        <td>start</td>
        <td><CodeInline @language="turtle">mandaat:start</CodeInline></td>
        <td><CodeInline @language="turtle">xsd:dateTime</CodeInline></td>
        <td>Tijdstip vanaf wanneer de mandataris het mandaat opneemt. Dit
          tijdstip wordt gezet op het begin van de dag, er is immers niet
          voldoende precisie bij het verzamelen/annoteren van de gegevens om tot
          op het uur/de minuut exact dit tijdstip te bepalen.</td>
      </tr>
      <tr>
        <td>einde</td>
        <td><CodeInline @language="turtle">mandaat:einde</CodeInline></td>
        <td><CodeInline @language="turtle">xsd:dateTime</CodeInline></td>
        <td>Tijdstip vanaf wanneer de mandataris de bestuursfunctie niet langer
          opneemt. Dit tijdstip wordt gezet op het einde van de dag (23:59:59),
          er is immers niet voldoende precisie bij het verzamelen/annoteren van
          de gegevens om tot op het uur/de minuut exact dit tijdstip te bepalen.</td>
      </tr>
      <tr>
        <td>status</td>
        <td><CodeInline @language="turtle">mandaat:status</CodeInline></td>
        <td><CodeInline @language="turtle">skos:Concept</CodeInline></td>
        <td>De bestuurlijke status van de Mandataris. Dit kan gaan om Effectief
          (<CodeInline
          >http://data.vlaanderen.be/id/concept/MandatarisStatusCode/21063a5b-912c-4241-841c-cc7fb3c73e75</CodeInline>),
          Verhinderd (<CodeInline
          >http://data.vlaanderen.be/id/concept/MandatarisStatusCode/c301248f-0199-45ca-b3e5-4c596731d5fe</CodeInline>),
          Waarnemend (<CodeInline
          >http://data.vlaanderen.be/id/concept/MandatarisStatusCode/e1ca6edd-55e1-4288-92a5-53f4cf71946a</CodeInline>),
          of Titelvoerend (<CodeInline
          >http://data.vlaanderen.be/id/concept/MandatarisStatusCode/aacb3fed-b51d-4e0b-a411-f3fa641da1b3</CodeInline>).</td>
      </tr>
      <tr>
        <td>rangorde</td>
        <td><CodeInline @language="turtle">mandaat:rangorde</CodeInline></td>
        <td><CodeInline @language="turtle">xsd:string</CodeInline></td>
        <td>De rangorde van de mandataris als string. Voor gemeenteraadsleden is
          dit bijvoorbeeld 'eerste lid', voor schepenen 'zesde schepen'. Enkel
          voor gemeenteraadsleden en schepenen is er een rangorde verplicht.
        </td>
      </tr>
      <tr>
        <td>beleidsdomein</td>
        <td><CodeInline @language="turtle">mandaat:beleidsdomein</CodeInline></td>
        <td><CodeInline @language="turtle">skos:Concept</CodeInline></td>
        <td>De beleidsdomeinen van een mandataris. Een mandataris kan meerdere
          beleidsdomeinen hebben. Enkel burgemeesters en schepenen hebben
          beleidsdomeinen. Opgelet: lokale besturen kunnen zelf nieuwe concepten
          definiëren als beleidsdomein, dat betekent dat er bijvoorbeeld
          meerdere beleidsdomeinen kunnen zijn met dezelfde naam.
        </td>
      </tr>
      <tr>
        <td>lidmaatschap</td>
        <td><CodeInline @language="turtle">org:hasMembership</CodeInline></td>
        <td><CodeInline @language="turtle">besluit:Bestuursorgaan</CodeInline></td>
        <td>Het lidmaatschap van de mandataris. Er is altijd exact 1
          lidmaatschap per mandataris.</td>
      </tr>
      <tr>
        <td>publicatiestatus</td>
        <td><CodeInline @language="turtle">lmb:hasPublicationStatus</CodeInline></td>
        <td><CodeInline @language="turtle">skos:Concept</CodeInline></td>
        <td>De publicatie status van de Mandataris. Dit kan gaan om Draft (<CodeInline
          >http://data.lblod.info/id/concept/MandatarisPublicationStatusCode/588ce330-4abb-4448-9776-a17d9305df07</CodeInline>),
          Niet Bekrachtigd (<CodeInline
          >http://data.lblod.info/id/concept/MandatarisPublicationStatusCode/d3b12468-3720-4cb0-95b4-6aa2996ab188</CodeInline>),
          of Bekrachtigd (<CodeInline
          >http://data.lblod.info/id/concept/MandatarisPublicationStatusCode/9d8fd14d-95d0-4f5e-b3a5-a56a126227b6</CodeInline>).</td>
      </tr>
      <tr>
        <td>is bestuurlijke alias van</td>
        <td><CodeInline @language="turtle">mandaat:isBestuurlijkeAliasVan</CodeInline></td>
        <td><CodeInline @language="turtle">person:Person</CodeInline></td>
        <td>De persoon die het mandaat opneemt.</td>
      </tr>

    </:body>
  </AuTable>
  <AuHeading @level="4" @skin="4">Voorbeeld</AuHeading>
  <SnippetToggle @snippetFilename="mandaten-annotaties/mandataris.turtle" />

  <AuHeading @level="3" @skin="3">Persoon</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline @language="turtle">person:Person</CodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Natuurlijk persoon. Overgenomen uit het
    <AuLinkExternal
      href="https://data.vlaanderen.be/doc/applicatieprofiel/mandatendatabank/#Persoon"
    >
      OSLO applicatieprofiel mandatendatabank</AuLinkExternal>.
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
        <td>achternaam</td>
        <td><CodeInline @language="turtle">foaf:familyName</CodeInline></td>
        <td><CodeInline @language="turtle">xsd:string</CodeInline></td>
        <td>De familienaam van de persoon.</td>
      </tr>
      <tr>
        <td>alternatieve naam</td>
        <td><CodeInline @language="turtle">foaf:name</CodeInline></td>
        <td><CodeInline @language="turtle">xsd:string</CodeInline></td>
        <td>Een roepnaam van de persoon. Indien aanwezig is het aan te raden
          deze naam te gebruiken voor visualisaties in plaats van voornaam en
          familienaam.</td>
      </tr>
      <tr>
        <td>gebruikte voornaam</td>
        <td><CodeInline @language="turtle">persoon:gebruikteVoornaam</CodeInline></td>
        <td><CodeInline @language="turtle">xsd:string</CodeInline></td>
        <td>De te gebruiken voornaam van alle officiële voornamen van de
          persoon.</td>
      </tr>
    </:body>
  </AuTable>
  <AuHeading @level="4" @skin="4">Voorbeeld</AuHeading>
  <SnippetToggle @snippetFilename="mandaten-annotaties/persoon.turtle" />
</template>
