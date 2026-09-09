import { pageTitle } from 'ember-page-title';
import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuAlert from '@appuniversum/ember-appuniversum/components/au-alert';
import AuTable from '@appuniversum/ember-appuniversum/components/au-table';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import { LinkTo } from '@ember/routing';
import CodeInline from '../../components/code-inline';
import Snippet from '../../components/snippet';

<template>
  {{pageTitle
    "Stappenplan: refereren als gemeente of provincie naar een document van een eredienstbestuur zonder centraal bestuur"
  }}
  <AuHeading @level="1" @skin="1">Stappenplan: refereren als gemeente of
    provincie naar een document van een eredienstbestuur zonder centraal bestuur</AuHeading>

  <AuAlert @skin="info" @icon="pencil" @closeable={{false}}>
    <p>Deze pagina is nog volop in ontwikkeling. Feedback? Contacteer ons
      gerust!</p>
  </AuAlert>

  <p>
    Deze pagina begeleidt je, als vendor van een gemeente of provincie, stap
    voor stap door het publiceren van een besluit dat verwijst naar een document
    van een eredienstbestuur
    <strong>zonder centraal bestuur van de eredienst (CKB)</strong>, en door het
    terugvinden van het exacte document waarnaar je moet verwijzen. Eén publieke
    query (stap 3) vertelt je in welke flow je zit. Heeft je eredienstbestuur
    wél een CKB, dan geldt een andere flow: zie het
    <LinkTo @route="docs.refereren-stappenplan-eredienst-met-ckb">stappenplan
      voor een eredienstbestuur met centraal bestuur</LinkTo>.
  </p>

  <p>
    Merk op dat hele eredienstfamilies nooit een CKB hebben (protestantse,
    israëlitische en anglicaanse eredienstbesturen); ook sommige kerkfabrieken
    en islamitische of orthodoxe besturen hebben er geen. Voor al die is deze
    pagina de normale flow, geen uitzondering.
  </p>

  <p>
    Doorheen de hele pagina wordt hetzelfde voorbeeld gevolgd: gemeente
    Londerzeel publiceert een
    <em>"Advies bij jaarrekening eredienstbestuur"</em>
    over de jaarrekening van de Christengemeente Londerzeel (een protestantse
    gemeente, zonder CKB). Alle voorbeelden zijn uitvoerbaar met deze
    voorbeeldwaarden. Waar je eigen waarden moeten worden ingevuld, staat dit in
    de tekst vermeld. De volledige regels voor het refereren (welk type besluit
    kan verwijzen naar welk type document) staan op de pagina
    <LinkTo @route="docs.documenten-refereren">Refereren van inzendingen</LinkTo>.
  </p>

  <AuHeading @level="2" @skin="2">Wat je nodig hebt voor je begint</AuHeading>

  <ol>
    <li>
      <strong>Een vendoraccount</strong>: je publisher URI en sleutel,
      geregistreerd voor de Meldingsplicht API en voor de Vendor SPARQL API van
      de Databank Erediensten. Dezelfde combinatie van publisher URI en sleutel
      werkt voor beide.
    </li>
    <li>
      <strong>De URI van je bestuurseenheid.</strong>
      Stap 1 toont hoe je die terugvindt als je ze nog niet kent.
    </li>
    <li>
      <strong>Het document van het eredienstbestuur.</strong>
      Je besluit kan enkel verwijzen naar een document dat al bestaat in de
      Databank Erediensten: het eredienstbestuur heeft zijn document (bv. de
      jaarrekening) ingezonden. In deze flow is er geen CKB en geen bundel: het
      eredienstbestuur dient het document zelf in, en dat document is wat je
      besluit refereert. Als vendor van de gemeente kan je het niet aanmaken.
      Als de zoekquery in stap 6 niets teruggeeft, heeft het eredienstbestuur
      nog niet ingediend. Probeer later opnieuw.
      <ul>
        <li>
          Voor testdoeleinden kan je deze voorwaarde zelf vervullen: op de
          testomgeving
          <CodeInline>https://loket.vendor-test.lblod.info</CodeInline>
          maak je het nodige document aan. Een
          <AuLinkExternal
            href="/videos/aanmaak-jaarverslag-eredienst-zonder-ckb.webm"
            @icon="external"
          >voorbeeldfilmpje</AuLinkExternal>
          toont hoe je dat doet.
        </li>
      </ul>
    </li>
  </ol>

  <AuHeading @level="2" @skin="2">Overzicht van de stappen</AuHeading>

  <p>
    De query's in de stappen 1 tot en met 4 worden publiek uitgevoerd op de
    Centrale Vindplaats. Voor het uitvoeren van SPARQL query's op dat endpoint,
    zie de pagina over het
    <LinkTo @route="docs.centrale-vindplaats-sparql">Centrale Vindplaats SPARQL
      endpoint</LinkTo>. Het inloggen en het sturen van query's via de Vendor
    SPARQL API staat uitgelegd op de pagina over de
    <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo>.
  </p>

  <AuTable>
    <:header>
      <tr>
        <th>Stap</th>
        <th>Wat doe je?</th>
        <th>Endpoint</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>1</td>
        <td>Zoek de URI van je eigen bestuurseenheid</td>
        <td>Centrale Vindplaats (publiek)</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Zoek de eredienstbesturen waar je bestuur bij betrokken is</td>
        <td>Centrale Vindplaats (publiek)</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Controleer dat het eredienstbestuur geen centraal bestuur heeft</td>
        <td>Centrale Vindplaats (publiek)</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Controleer naar welk documenttype je besluit mag verwijzen</td>
        <td>Centrale Vindplaats (publiek)</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Log in op de Vendor SPARQL API</td>
        <td>
          <CodeInline>/vendor/login</CodeInline>
          van de Databank Erediensten
        </td>
      </tr>
      <tr>
        <td>6</td>
        <td>Vind het document waarnaar je mag verwijzen</td>
        <td>
          <CodeInline>/vendor/sparql</CodeInline>
          van de Databank Erediensten
        </td>
      </tr>
      <tr>
        <td>7</td>
        <td>Publiceer het besluit en dien het in</td>
        <td>Eigen website + Meldingsplicht API</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="2" @skin="2">Endpoints</AuHeading>

  <p>
    De voorbeelden op deze pagina gebruiken de testomgeving: daar krijgt een
    vendor zijn account en sleutel. Werk je in productie, vervang dan de hosts
    door de productieomgeving uit de tabel. Merk op dat de data op de
    testomgeving niet dezelfde is als de productiedata.
  </p>

  <AuTable>
    <:header>
      <tr>
        <th>Omgeving</th>
        <th>Databank Erediensten (stappen 5 en 6)</th>
        <th>Loket (stap 7)</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>Test</td>
        <td>
          <CodeInline
          >https://databankerediensten.vendor-test.lblod.info</CodeInline>
        </td>
        <td>
          <CodeInline>https://loket.vendor-test.lblod.info</CodeInline>
        </td>
      </tr>
      <tr>
        <td>Productie</td>
        <td>
          <CodeInline
          >https://databankerediensten.lokaalbestuur.vlaanderen.be</CodeInline>
        </td>
        <td>
          <CodeInline>https://api.loket.lokaalbestuur.vlaanderen.be</CodeInline>
        </td>
      </tr>
    </:body>
  </AuTable>

  <p>
    De publieke query's in de stappen 1 tot en met 4 draaien op de Centrale
    Vindplaats,
    <CodeInline>https://centrale-vindplaats.lblod.info/sparql</CodeInline>. Dit
    endpoint is publiek en heeft geen aparte omgeving.
  </p>

  <p>
    Onderstaand diagram vat de volledige flow samen: wie dient wat in, welke
    stappen doorloop je als vendor, en via welke endpoints.
  </p>

  <a
    class="block au-u-text-center"
    href="assets/diagrams/stappenplan-no-cb.drawio.svg"
  >
    <figure>
      <img
        itemprop="thumbnail"
        src="assets/diagrams/stappenplan-no-cb.drawio.svg"
        alt="Flowdiagram van het stappenplan zonder centraal bestuur: van de inzending van het eredienstbestuur, via de publieke stappen op de Centrale Vindplaats en de login en zoekstappen op de Vendor SPARQL API, tot het indienen van het advies via de Meldingsplicht API"
      />
      <figcaption class="au-u-text-right">
        De volledige flow van dit stappenplan
      </figcaption>
    </figure>
  </a>

  <AuHeading @level="2" @skin="2">Stap 1: Zoek de URI van je eigen
    bestuurseenheid (publiek)</AuHeading>

  <p>
    Vervang
    <CodeInline>londerzeel</CodeInline>
    door je eigen gemeente en behoud de filter op de classificatie: die houdt
    besturen met dezelfde naam uit elkaar (bv. het OCMW). Voor een provincie
    gebruik je de classificatiecode
    <CodeInline>.../5ab0e9b8a3b2ca7c5e000000</CodeInline>
    in plaats van
    <CodeInline>...5ab0e9b8a3b2ca7c5e000001</CodeInline>.
  </p>

  <Snippet
    @snippetFilename="refereren-stappenplan-zonder-ckb/stap-1-zoek-eigen-bestuurseenheid.sparql"
  />

  <p>
    Je ziet nu precies één rij: je bestuurseenheid en zijn URI. Voor het
    voorbeeld is dat
    <CodeInline
    >http://data.lblod.info/id/bestuurseenheden/169b6bfa2d8ee340f266af26d1a6055182214082dca720b8817d3893692f3068</CodeInline>.
  </p>

  <AuHeading @level="2" @skin="2">Stap 2: Zoek de eredienstbesturen waar je
    bestuur bij betrokken is (publiek)</AuHeading>

  <p>
    Dit toont elk eredienstbestuur waarvoor je bestuur toezichthouder (of
    anderszins betrokken) is. Vervang de URI van de bestuurseenheid door je
    eigen URI (uit stap 1).
  </p>

  <Snippet
    @snippetFilename="refereren-stappenplan-zonder-ckb/stap-2-betrokken-eredienstbesturen.sparql"
  />

  <p>
    Je krijgt één rij per eredienstbestuur, met zijn naam en classificatie. De
    lijst kan beide flows mengen. In het voorbeeld: vier kerkfabrieken en CKB
    Londerzeel (die hebben een CKB, dus voor hen geldt het
    <LinkTo @route="docs.refereren-stappenplan-eredienst-met-ckb">stappenplan
      met centraal bestuur</LinkTo>), en de Christengemeente Londerzeel, die er
    geen heeft. Kies het eredienstbestuur waarover je besluit gaat. Voorbeeld:
    Christengemeente Londerzeel,
    <CodeInline
    >http://data.lblod.info/id/besturenVanDeEredienst/635935898DE5818A7C9F42F0</CodeInline>.
  </p>

  <AuHeading @level="2" @skin="2">Stap 3: Controleer dat het eredienstbestuur
    geen centraal bestuur heeft (publiek)</AuHeading>

  <p>
    Vervang de
    <CodeInline>besturenVanDeEredienst</CodeInline>
    URI door het eredienstbestuur uit stap 2.
  </p>

  <Snippet
    @snippetFilename="refereren-stappenplan-zonder-ckb/stap-3-ckb-relatie.sparql"
  />

  <p>
    <strong>Geen rij betekent dat je in de juiste handleiding zit.</strong>
    Er is geen centraal bestuur dat documenten bundelt voor dit
    eredienstbestuur, dus je besluit verwijst rechtstreeks naar zijn document.
    Een rij betekent dat er toch een CKB is: gebruik dan het
    <LinkTo @route="docs.refereren-stappenplan-eredienst-met-ckb">stappenplan
      met centraal bestuur</LinkTo>.
  </p>

  <AuHeading @level="2" @skin="2">Stap 4: Controleer naar welk documenttype je
    besluit mag verwijzen (publiek)</AuHeading>

  <p>
    De regels voor het refereren zijn publieke data. Deze query beantwoordt de
    vraag: voor mijn type besluit, beslist door mijn soort bestuur, naar welk
    documenttype mag ik verwijzen als het document afkomstig is van het
    eredienstbestuur zelf? Vervang het BesluitType door je eigen type besluit,
    en de classificatiecodes door de jouwe (eerste regel: Gemeente, tweede
    regel: Bestuur van de eredienst
    <CodeInline>66ec74fd-8cfc-4e16-99c6-350b35012e86</CodeInline>, de klasse van
    het eredienstbestuur; voor een provincie gebruik je
    <CodeInline>...5ab0e9b8a3b2ca7c5e000000</CodeInline>).
  </p>

  <Snippet
    @snippetFilename="refereren-stappenplan-zonder-ckb/stap-4-verwijsbaar-documenttype.sparql"
  />

  <p>
    Voor het voorbeeldadvies is het antwoord BesluitType
    <CodeInline
    >https://data.vlaanderen.be/id/concept/BesluitType/e44c535d-4339-4d15-bdbf-d4be6046de2c</CodeInline>
    "Jaarrekening": het type van het eigen document van het eredienstbestuur.
    Dit documenttype-URI heb je nodig in de zoekquery in stap 6.
  </p>

  <AuHeading @level="2" @skin="2">Stap 5: Log in op de Vendor SPARQL API</AuHeading>

  <p>
    De organisatie is de bestuurseenheid waarvoor je handelt (uit stap 1). De
    sessie cookie wordt bewaard in
    <CodeInline>CookieJar.tsv</CodeInline>; elke query in stap 6 hergebruikt die
    cookie. Bekijk zeker de pagina over de
    <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo>
    om te leren hoe het inloggen werkt.
  </p>

  <Snippet
    @snippetFilename="refereren-stappenplan-zonder-ckb/stap-5-login.sh"
  />

  <p>
    Een sessiedocument (<CodeInline>mu.semte.ch/sessions/...</CodeInline>)
    betekent dat je bent ingelogd.
  </p>

  <AuHeading @level="2" @skin="2">Stap 6: Vind het document waarnaar je mag
    verwijzen</AuHeading>

  <p>
    Dit is de query die je uitvoert voor je het besluit opstelt: "naar welke
    documenten kan ons volgende besluit verwijzen?". Ze geeft, voor de
    eredienstbesturen waar je bestuur bij betrokken is, hun eigen ingezonden
    documenten terug van het type uit stap 4. In deze flow ziet je login de
    inzending van het eredienstbestuur rechtstreeks: zonder centraal bestuur is
    er geen bundel, het document van het eredienstbestuur zelf is wat je
    terugkrijgt. Vervang de gemeente-URI en het BesluitType door je eigen
    waarden (uit stappen 1 en 4). De query wordt gestuurd naar
    <CodeInline
    >https://databankerediensten.vendor-test.lblod.info/vendor/sparql</CodeInline>
    met dezelfde sessie cookie als bij het inloggen. Meer voorbeelden van
    query's op deze databank staan op de pagina over de
    <LinkTo @route="docs.erediensten-toezichtsdatabank-sparql">Erediensten
      Toezichtsdatabank SPARQL API</LinkTo>.
  </p>

  <Snippet
    @snippetFilename="refereren-stappenplan-zonder-ckb/stap-6-refereerbare-documenten.sparql"
  />

  <p>
    Wat je terugkrijgt:
  </p>
  <ul>
    <li>
      <CodeInline>?eredienstSubmission</CodeInline>
      /
      <CodeInline>?eredienstSubmissionSentDate</CodeInline>: de eigen inzending
      van het eredienstbestuur van het document.
    </li>
    <li>
      <CodeInline>?eredienst</CodeInline>: om welk eredienstbestuur het gaat.
    </li>
    <li>
      <CodeInline>?eredienstDocument</CodeInline>: het document (bv. de
      jaarrekening).
      <strong>Dit is de URI waarnaar je Artikel zal verwijzen</strong>
      (stap 7).
    </li>
  </ul>

  <p>
    Onthoud het volgende:
  </p>
  <ul>
    <li>
      <strong>In één lijst kunnen eredienstbesturen van beide flows voorkomen.</strong>
      Is je bestuur ook betrokken bij eredienstbesturen die wél een CKB hebben
      (in het voorbeeld: de vier kerkfabrieken), dan kunnen hun documenten je
      via de CKB-bundel bereiken. Voor die eredienstbesturen gebruik je het
      <LinkTo @route="docs.refereren-stappenplan-eredienst-met-ckb">stappenplan
        met centraal bestuur</LinkTo>; de controle in stap 3 per
      eredienstbestuur houdt de twee uit elkaar.
    </li>
  </ul>

  <AuHeading @level="2" @skin="2">Stap 7: Publiceer het besluit en dien het in</AuHeading>

  <p>
    Publiceer het besluit als een RDFa-pagina op je website. Dit zijn de
    onderdelen die uitmaken voor het refereren (je eigen URI's vul je in waar
    aangegeven;
    <CodeInline>eli:refers_to</CodeInline>
    neemt de
    <CodeInline>?eredienstDocument</CodeInline>
    uit stap 6):
  </p>

  <Snippet
    @snippetFilename="refereren-stappenplan-zonder-ckb/stap-7-artikel-rdfa.html"
  />

  <p>
    De artikeltype-concepten (gebruik het type dat bij je Artikel past):
  </p>

  <AuTable>
    <:header>
      <tr>
        <th>Artikeltype</th>
        <th>URI</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>Gunstig advies</td>
        <td>
          <CodeInline
          >http://data.lblod.info/concepts/ArtikelTypes/9a54a930-7dd6-4ff2-a4b1-ee403f7cda5c</CodeInline>
        </td>
      </tr>
      <tr>
        <td>Ongunstig advies</td>
        <td>
          <CodeInline
          >http://data.lblod.info/concepts/ArtikelTypes/c47c6ac9-1628-4378-9689-8caa7c6d7968</CodeInline>
        </td>
      </tr>
      <tr>
        <td>Goedkeuring</td>
        <td>
          <CodeInline
          >http://data.lblod.info/concepts/ArtikelTypes/080def57-72ce-4f32-b3f9-369009644fd2</CodeInline>
        </td>
      </tr>
      <tr>
        <td>Niet goedkeuring</td>
        <td>
          <CodeInline
          >http://data.lblod.info/concepts/ArtikelTypes/773343c9-55a4-4aaa-942c-e3a048b35c1f</CodeInline>
        </td>
      </tr>
      <tr>
        <td>Aktename</td>
        <td>
          <CodeInline
          >http://data.lblod.info/concepts/ArtikelTypes/5e1beb14-142b-4394-b302-6648ad6f3e00</CodeInline>
        </td>
      </tr>
      <tr>
        <td>Aanpassing</td>
        <td>
          <CodeInline
          >http://data.lblod.info/concepts/ArtikelTypes/03bb19a1-5ada-4098-830e-936c1da367f5</CodeInline>
        </td>
      </tr>
    </:body>
  </AuTable>

  <p>
    Daarna dien je het in via de Meldingsplicht API (je eigen gegevens; de
    organisatie is de bestuurseenheid waarvoor je handelt). Hoe de
    Meldingsplicht API werkt, staat op de pagina over de
    <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>.
  </p>

  <Snippet
    @snippetFilename="refereren-stappenplan-zonder-ckb/stap-7-melding.sh"
  />

  <p>
    <CodeInline>href</CodeInline>
    is de bereikbare pagina met de RDFa hierboven;
    <CodeInline>submittedResource</CodeInline>
    is de URI van het besluit uit die RDFa.
  </p>

  <p>
    Behoud de URI van het besluit altijd stabiel: de hele referentieketen en
    alle latere query's steunen erop. Verandert de URI, dan breken de
    verwijzingen naar en van je document.
  </p>

  <AuHeading @level="2" @skin="2">Provincies</AuHeading>

  <p>
    De flow is identiek voor een provincie. Vervang:
  </p>
  <ul>
    <li>
      de classificatiecode in de stappen 1 en 4 door de Provincie-code
      <CodeInline
      >http://data.vlaanderen.be/id/concept/BestuurseenheidClassificatieCode/5ab0e9b8a3b2ca7c5e000000</CodeInline>;
    </li>
    <li>
      de gemeente-URI in de stappen 2, 5 en 6 door de URI van je provincie.
    </li>
  </ul>
  <p>
    Al de rest (betrokken besturen, CKB-controle, zoeken, publiceren) blijft
    ongewijzigd.
  </p>

  <AuHeading @level="2" @skin="2">Hulp</AuHeading>

  <p>
    Vragen over de Databank Erediensten of deze flow? Stel ze op het
    Matrix-helpkanaal:
    <AuLinkExternal
      href="https://chat.semantic.works/#/room/#LBLOD-vendor-support:chat.semantic.works"
    >https://chat.semantic.works/#/room/#LBLOD-vendor-support:chat.semantic.works</AuLinkExternal>.
  </p>
</template>
