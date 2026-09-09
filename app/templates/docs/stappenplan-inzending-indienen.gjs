import { pageTitle } from 'ember-page-title';
import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuTable from '@appuniversum/ember-appuniversum/components/au-table';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import { LinkTo } from '@ember/routing';
import CodeInline from '../../components/code-inline';
import CodeBlock from '../../components/code-block';
import Snippet from '../../components/snippet';

<template>
  {{pageTitle "Stappenplan: een inzending indienen en opvolgen"}}
  <AuHeading @level="1" @skin="1">Stappenplan: een inzending indienen en
    opvolgen</AuHeading>

  <p>
    Deze pagina begeleidt je, als vendor van een lokaal bestuur, stap voor stap
    door de volledige flow van een automatische melding: je publiceert een
    document op de website van het bestuur, meldt het aan via de
    <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>, en volgt
    daarna de verwerking op via de
    <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo>
    tot je inzending de status
    <em>"verstuurd"</em>
    heeft. Eén keer uitgevoerd, heb je het patroon voor elke meldingsplichtige
    publicatie.
  </p>

  <p>
    Doorheen de hele pagina wordt hetzelfde voorbeeld gevolgd: de vendor van
    Gemeente Mechelen dient een
    <em>besluitenlijst</em>
    in van de gemeenteraad. Alle voorbeelden zijn uitvoerbaar met deze
    voorbeeldwaarden. Waar je eigen waarden moeten worden ingevuld, staat dit in
    de tekst vermeld. Welke annotaties je op de gepubliceerde pagina kan
    gebruiken, staat op de pagina over de
    <LinkTo @route="docs.meldingsplicht-annotaties">annotaties voor automatische
      melding</LinkTo>.
  </p>

  <AuHeading @level="2" @skin="2">Wat je nodig hebt voor je begint</AuHeading>

  <ol>
    <li>
      <strong>Een vendoraccount</strong>: je publisher URI en geheime sleutel.
      Dezelfde combinatie werkt voor de Meldingsplicht API en de Vendor SPARQL
      API. Je vraagt ze aan zoals beschreven in de sectie "Authenticatie" op de
      pagina over de
      <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>.
    </li>
    <li>
      <strong>De URI van je bestuurseenheid.</strong>
      Die stuur je bij elke call mee als
      <CodeInline>organization</CodeInline>.
    </li>
    <li>
      <strong>Een gepubliceerde, geannoteerde pagina.</strong>
      Het document staat als RDFa op een URL die publiek bereikbaar is, met een
      geldige, complete SSL-certificaatketen, en alle annotaties beschikbaar
      zonder JavaScript.
    </li>
    <li>
      <strong>Stabiele URI's.</strong>
      De URI van je document verandert nooit meer. De hele verwerking en alle
      latere opvragingen steunen erop.
    </li>
  </ol>

  <AuHeading @level="2" @skin="2">Overzicht van de stappen</AuHeading>

  <p>
    Het aanmelden gebeurt via
    <CodeInline
    >https://api.loket.lokaalbestuur.vlaanderen.be/melding</CodeInline>, het
    opvolgen via
    <CodeInline>/vendor/login</CodeInline>,
    <CodeInline>/vendor/sparql</CodeInline>
    en
    <CodeInline>/vendor/logout</CodeInline>
    van dezelfde host. Hoe de Meldingsplicht API werkt, staat op de pagina over
    de
    <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>; het
    inloggen en het sturen van query's via de Vendor SPARQL API op de pagina
    over de
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
        <td>Publiceer het document als RDFa-pagina</td>
        <td>Eigen website van het bestuur</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Dien de melding in</td>
        <td>Meldingsplicht API</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Log in op de Vendor SPARQL API</td>
        <td>
          <CodeInline>/vendor/login</CodeInline>
          van het Loket
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>Volg de status van je inzending op</td>
        <td>
          <CodeInline>/vendor/sparql</CodeInline>
          van het Loket
        </td>
      </tr>
      <tr>
        <td>5</td>
        <td>Log uit</td>
        <td>
          <CodeInline>/vendor/logout</CodeInline>
          van het Loket
        </td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="2" @skin="2">Stap 1: Publiceer het document als RDFa-pagina</AuHeading>

  <p>
    Publiceer de pagina op de website van het bestuur. Dit is een minimale
    besluitenlijst die door de volledige flow komt; je eigen URI's vul je in
    waar aangegeven. Alle mogelijke annotaties en het volledige model staan op
    de pagina over de
    <LinkTo @route="docs.meldingsplicht-annotaties">annotaties voor automatische
      melding</LinkTo>.
  </p>

  <Snippet
    @snippetFilename="stappenplan-inzending-indienen/stap-1-besluitenlijst-rdfa.html"
  />

  <p>
    Controleer vóór het melden dat de pagina publiek bereikbaar is en de
    annotaties bevat; de verwerking kan de pagina anders niet ophalen:
  </p>

  <Snippet
    @snippetFilename="stappenplan-inzending-indienen/stap-1-controleer-pagina.sh"
  />

  <p>
    Krijg je geen output, dan is de pagina niet bereikbaar of ontbreken de
    annotaties.
  </p>

  <AuHeading @level="2" @skin="2">Stap 2: Dien de melding in via de
    Meldingsplicht API</AuHeading>

  <p>
    Eén melding per document.
    <CodeInline>href</CodeInline>
    is de URL van de pagina uit stap 1;
    <CodeInline>submittedResource</CodeInline>
    is de URI van het document zelf uit die RDFa (je eigen gegevens; de
    organisatie is de bestuurseenheid waarvoor je handelt). Hoe de
    Meldingsplicht API werkt, staat op de pagina over de
    <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>.
  </p>

  <Snippet
    @snippetFilename="stappenplan-inzending-indienen/stap-2-melding.sh"
  />

  <p>
    Een geslaagde melding antwoordt met HTTP 201 en volgende body:
  </p>
  {{! prettier-ignore }}
  <CodeBlock @language="json">{ "submission": "http://data.lblod.info/submissions/31b7b6a0-2c85-11ee-aac3-018db9894181", "job": "http://data.lblod.info/id/automatic-submission-job/31ca2d30-2c85-11ee-aac3-018db9894181" }</CodeBlock>

  <p>
    <strong>Bewaar de
      <CodeInline>submission</CodeInline>
      URI</strong>: die heb je in stap 4 nodig om de status op te volgen. De
    <CodeInline>job</CodeInline>
    URI is de interne verwerking van het Loket; zij is niet zichtbaar via de
    vendor API's, je hoeft er niets mee te doen.
  </p>

  <p>
    Standaard wordt de inzending meteen verzonden als de data volledig is. Wil
    je de inzending eerst als concept laten staan, voeg dan een
    <CodeInline>status</CodeInline>-property toe aan de body met één van deze
    URI's:
  </p>

  <AuTable>
    <:header>
      <tr>
        <th>Status</th>
        <th>URI</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>Concept</td>
        <td>
          <CodeInline
          >http://lblod.data.gift/concepts/79a52da4-f491-4e2f-9374-89a13cde8ecd</CodeInline>
        </td>
      </tr>
      <tr>
        <td>Inzendbaar</td>
        <td>
          <CodeInline
          >http://lblod.data.gift/concepts/f6330856-e261-430f-b949-8e510d20d0ff</CodeInline>
        </td>
      </tr>
    </:body>
  </AuTable>

  <p>
    De verwerking gebeurt asynchroon en duurt in normale omstandigheden enkele
    minuten.
  </p>

  <AuHeading @level="2" @skin="2">Stap 3: Log in op de Vendor SPARQL API</AuHeading>

  <p>
    De login vraagt dezelfde gegevens als je melding: de bestuurseenheid als
    <CodeInline>organization</CodeInline>, en je publisher URI en sleutel. De
    sessie cookie wordt in
    <CodeInline>CookieJar.tsv</CodeInline>
    bewaard; alle volgende requests hergebruiken die cookie. Bekijk zeker de
    pagina over de
    <LinkTo @route="docs.vendor-sparql">Vendor SPARQL API</LinkTo>
    om te leren hoe het inloggen werkt.
  </p>

  <Snippet @snippetFilename="stappenplan-inzending-indienen/stap-3-login.sh" />

  <p>
    Het antwoord is een JSON-LD sessiedocument (<CodeInline
    >mu.semte.ch/sessions/...</CodeInline>). Je bent nu ingelogd en ziet enkel
    de data van de bestuurseenheid uit je login.
  </p>

  <AuHeading @level="2" @skin="2">Stap 4: Volg de status van je inzending op</AuHeading>

  <p>
    Dit is de opvolgquery: geef de
    <CodeInline>submission</CodeInline>
    URI uit stap 2 mee. Ze toont de status, en vanaf de inzending verstuurd is
    ook de verzenddatum, de gegenereerde formuliergegevens en het geharveste
    document. De query wordt gestuurd naar
    <CodeInline
    >https://api.loket.lokaalbestuur.vlaanderen.be/vendor/sparql</CodeInline>
    met dezelfde sessie cookie als bij het inloggen. Meer voorbeelden van
    query's op inzendingen staan op de pagina over de
    <LinkTo @route="docs.meldingsplicht-sparql">Meldingsplicht SPARQL API</LinkTo>.
  </p>

  <Snippet
    @snippetFilename="stappenplan-inzending-indienen/stap-4-status-inzending.sparql"
  />

  <p>
    De mogelijke statussen:
  </p>

  <AuTable>
    <:header>
      <tr>
        <th>Status</th>
        <th>URI</th>
        <th>Betekenis</th>
      </tr>
    </:header>
    <:body>
      <tr>
        <td>Concept</td>
        <td>
          <CodeInline
          >http://lblod.data.gift/concepts/79a52da4-f491-4e2f-9374-89a13cde8ecd</CodeInline>
        </td>
        <td>Nog niet verzonden. Of je vroeg er zelf om, of de data van het
          document is onvolledig en wacht op aanvulling.</td>
      </tr>
      <tr>
        <td>Inzendbaar</td>
        <td>
          <CodeInline
          >http://lblod.data.gift/concepts/f6330856-e261-430f-b949-8e510d20d0ff</CodeInline>
        </td>
        <td>Klaar om verzonden te worden.</td>
      </tr>
      <tr>
        <td>Verstuurd</td>
        <td>
          <CodeInline
          >http://lblod.data.gift/concepts/9bd8d86d-bb10-4456-a84e-91e9507c374c</CodeInline>
        </td>
        <td>Aangekomen in het Loket. Vanaf nu zijn
          <CodeInline>?sentDate</CodeInline>,
          <CodeInline>?formData</CodeInline>
          en
          <CodeInline>?submissionDocument</CodeInline>
          gevuld.</td>
      </tr>
    </:body>
  </AuTable>

  <p>
    Twee zaken om te onthouden:
  </p>
  <ul>
    <li>
      <strong>Nog geen rijen is geen fout.</strong>
      De verwerking van je melding is asynchroon en de vendordata wordt in
      batches doorgegeven. Het is normaal dat je inzending pas enkele minuten na
      de melding opduikt. Poll om de halve minuut en geef het pas op na een
      kwartier of langer.
    </li>
    <li>
      <strong>Werk met de URI, niet met het label.</strong>
      Het label van een status kan veranderen; de URI blijft. Vergelijk in je
      code op de URI's uit de tabel.
    </li>
  </ul>

  <p>
    Is de status
    <em>verstuurd</em>, dan is je inzending volledig verwerkt en zit ze in het
    Loket.
  </p>

  <AuHeading @level="3" @skin="3">Extra: je inzending terugvinden zonder
    submission-URI</AuHeading>

  <p>
    Verlies je de
    <CodeInline>submission</CodeInline>
    URI uit stap 2, dan vind je de inzending terug via het document zelf (<CodeInline
    >submittedResource</CodeInline>):
  </p>

  <Snippet
    @snippetFilename="stappenplan-inzending-indienen/terugvinden-via-document-uri.sparql"
  />

  <p>
    of via de URL van de gepubliceerde pagina (<CodeInline>href</CodeInline>):
  </p>

  <Snippet
    @snippetFilename="stappenplan-inzending-indienen/terugvinden-via-pagina-url.sparql"
  />

  <AuHeading @level="2" @skin="2">Stap 5: Log uit</AuHeading>

  <p>
    Sluit de sessie af met een
    <CodeInline>DELETE</CodeInline>
    op de logout-URL met dezelfde cookie. Een geslaagde logout antwoordt met
    HTTP 204 en een lege body.
  </p>

  <Snippet
    @snippetFilename="stappenplan-inzending-indienen/stap-5-uitloggen.sh"
  />

  <AuHeading @level="2" @skin="2">Als het misloopt</AuHeading>

  <ul>
    <li>
      <strong>HTTP 401 op
        <CodeInline>/melding</CodeInline>
        of
        <CodeInline>/vendor/login</CodeInline></strong>: de combinatie van je
      publisher URI, sleutel en
      <CodeInline>organization</CodeInline>
      wordt niet herkend. Controleer alle drie.
    </li>
    <li>
      <strong>Je inzending verschijnt niet in de vendor API</strong>: controleer
      of de gepubliceerde pagina publiek bereikbaar is (zie stap 1), of de
      SSL-certificaatketen volledig is, en of de annotaties niet afhangen van
      JavaScript. Kan de verwerking de pagina niet ophalen, dan blijft er niets
      over om op te volgen.
    </li>
    <li>
      <strong>De status blijft
        <em>concept</em></strong>: de geannoteerde data van je document is
      onvolledig. Verbeter de annotaties op de pagina en meld opnieuw. Een
      inzending die nog niet verzonden is, kan ook verwijderd worden met een
      <CodeInline>POST</CodeInline>
      naar
      <CodeInline
      >https://api.loket.lokaalbestuur.vlaanderen.be/delete-melding</CodeInline>
      (zie de pagina over de
      <LinkTo @route="docs.meldingsplicht">Meldingsplicht API</LinkTo>).
    </li>
    <li>
      <strong>Lege queryresultaten na een geslaagde login</strong>: je bent
      ingelogd voor een andere bestuurseenheid dan degene waarvan je de
      inzending wilt zien. De
      <CodeInline>organization</CodeInline>
      uit je login bepaalt wat je ziet.
    </li>
  </ul>

  <AuHeading @level="2" @skin="2">Hulp</AuHeading>

  <p>
    Vragen over deze flow? Stel ze op het Matrix-helpkanaal:
    <AuLinkExternal
      href="https://chat.semantic.works/#/room/#LBLOD-vendor-support:chat.semantic.works"
    >https://chat.semantic.works/#/room/#LBLOD-vendor-support:chat.semantic.works</AuLinkExternal>,
    of mail naar
    <AuLinkExternal
      href="mailto:digitaalABB@vlaanderen.be"
    >digitaalABB@vlaanderen.be</AuLinkExternal>.
  </p>
</template>
