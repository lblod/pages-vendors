import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import AuTable from '@appuniversum/ember-appuniversum/components/au-table';
import CodeInline from '../../components/code-inline';

<template>
  <AuHeading @level="1" @skin="1">Leidinggevendendatabank</AuHeading>
  <p>
    De leidinggevenden databank bevat de leidinggevenden van de lokale besturen
    en hun verzelfstandigde entiteiten. Deze databank volgt een uitbreiding op
    het applicatieprofiel
    <AuLinkExternal
      href="https://data.vlaanderen.be/doc/applicatieprofiel/mandatendatabank/"
    >
      mandatendatabank</AuLinkExternal>. Dit document beschrijft deze
    uitbreiding.
  </p>

  <AuHeading @level="2" @skin="2">Overzicht</AuHeading>
  <img
    src="assets/images/leidinggevenden.jpg"
    alt="leidinggevend UML diagram"
  />

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
  <AuHeading @level="3" @skin="3">Adresvoorstelling</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline>locn:Address</CodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Leesbare voorstelling met enkel de basisgegevens van het adres, bedoeld voor
    het gebruik van een adres als attribuut van een ander object. Overgenomen
    uit
    <AuLinkExternal
      href="https://data.vlaanderen.be/doc/applicatieprofiel/adresregister/#Adresvoorstelling"
    >
      OSLO applicatieprofiel adresregister</AuLinkExternal>.
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
        <td>adres-register-uri</td>
        <td><CodeInline>adres:verwijstNaar</CodeInline></td>
        <td><CodeInline>adres:Adres</CodeInline></td>
        <td>Adres waarvan de adresvoorstelling is afgeleid.</td>
      </tr>
      <tr>
        <td>gemeentenaam</td>
        <td><CodeInline>adres:gemeentenaam</CodeInline></td>
        <td><CodeInline>xsd:string</CodeInline></td>
        <td>Gemeentenaam van het adres.</td>
      </tr>
      <tr>
        <td>huisnummer</td>
        <td><CodeInline>adres:AdresVoorstelling.huisnummer</CodeInline></td>
        <td><CodeInline>xsd:string</CodeInline></td>
        <td>Alfanumerieke code officieel toegekend aan gebouweenheden,
          ligplaatsen, standplaatsen of percelen.</td>
      </tr>
      <tr>
        <td>postcode</td>
        <td><CodeInline>locn:postCode</CodeInline></td>
        <td><CodeInline>xsd:string</CodeInline></td>
        <td>Code waarmee het geografisch gebied dat adressen voor postale
          doeleinden groepeert wordt aangeduid.</td>
      </tr>
      <tr>
        <td>straatnaam</td>
        <td><CodeInline>adres:straatnaam</CodeInline></td>
        <td><CodeInline>xsd:string</CodeInline></td>
        <td>Straatnaam van het adres.</td>
      </tr>
      <tr>
        <td>volledig adres</td>
        <td><CodeInline>locn:fullAddress</CodeInline></td>
        <td><CodeInline>xsd:string</CodeInline></td>
        <td>Het complete adres in één string, al dan niet geformatteerd.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3">Bestuursfunctie</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline>lblodlg:Bestuursfunctie</CodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    De bevoegdheid om gedurende een bepaalde periode een bestuursorgaan te
    vormen of er deel van uit te maken. Specialisatie van
    <AuLinkExternal
      href="http://data.vlaanderen.be/ns/mandaat#Mandaat"
    >Mandaat</AuLinkExternal>.
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
        <td>rol</td>
        <td><CodeInline>org:role</CodeInline></td>
        <td><CodeInline>org:Role</CodeInline></td>
        <td>Bestuurseenheid die de publicatie gemaakt heeft.</td>
      </tr>
      <tr>
        <td>contactgegevens</td>
        <td><CodeInline>schema:contactPoint</CodeInline></td>
        <td><CodeInline>schema:ContactPoint</CodeInline></td>
        <td>Contactgegevens voor de bestuursfunctie.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3">Bestuursorgaan (in bestuursperiode)</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline>besluit:Bestuursorgaan</CodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Een bestuursorgaan, beperkt tot een bepaalde bestuursperiode.
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
        <td><CodeInline>lblodlg:heeftBestuursfunctie</CodeInline></td>
        <td><CodeInline>lblodlg:Bestuursfunctie</CodeInline></td>
        <td>Een bestuursfunctie binnen het orgaan.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3">Contactgegevens</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline>schema:ContactPoint</CodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    De contactgegevens voor een bestuursfunctie, dit kunnen algemene of
    persoonlijke contactgegevens zijn.
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
        <td>adres</td>
        <td><CodeInline>locn:address</CodeInline></td>
        <td><CodeInline>locn:Address</CodeInline></td>
        <td>Adres dat men kan aanschrijven.</td>
      </tr>
      <tr>
        <td>email</td>
        <td><CodeInline>schema:email</CodeInline></td>
        <td><CodeInline>xsd:string</CodeInline></td>
        <td>Email-adres waarnaar men kan mailen.</td>
      </tr>
      <tr>
        <td>telefoon</td>
        <td><CodeInline>schema:telephone</CodeInline></td>
        <td><CodeInline>xsd:string</CodeInline></td>
        <td>Telefoonnummer waarop men kan bellen.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3">Functionaris</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline>lblodlg:Functionaris</CodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Een persoon in zijn rol als houder van een bestuursfunctie. Specialisatie
    van
    <AuLinkExternal href="http://data.vlaanderen.be/ns/mandaat#Mandataris">
      Mandataris</AuLinkExternal>.
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
        <td><CodeInline>org:holds</CodeInline></td>
        <td><CodeInline>lblodlg:Bestuursfunctie</CodeInline></td>
        <td>De bestuursfunctie die deze functionaris bekleedt.</td>
      </tr>
      <tr>
        <td>einde</td>
        <td><CodeInline>mandaat:einde</CodeInline></td>
        <td><CodeInline>xsd:dateTime</CodeInline></td>
        <td>Tijdstip vanaf wanneer de functionaris de bestuursfunctie niet
          langer opneemt.</td>
      </tr>
      <tr>
        <td>is bestuurlijke alias van</td>
        <td><CodeInline>mandaat:isBestuurlijkeAliasVan</CodeInline></td>
        <td><CodeInline>person:Person</CodeInline></td>
        <td>De persoon die de functionarisrol vervult.</td>
      </tr>
      <tr>
        <td>start</td>
        <td><CodeInline>mandaat:start</CodeInline></td>
        <td><CodeInline>xsd:dateTime</CodeInline></td>
        <td>Tijdstip vanaf wanneer de functionaris de bestuursfunctie opneemt.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3">Persoon</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <CodeInline>person:Person</CodeInline>
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
        <td><CodeInline>foaf:familyName</CodeInline></td>
        <td><CodeInline>xsd:string</CodeInline></td>
        <td>De familienaam van de persoon.</td>
      </tr>
      <tr>
        <td>alternatieve naam</td>
        <td><CodeInline>foaf:name</CodeInline></td>
        <td><CodeInline>xsd:string</CodeInline></td>
        <td>Een roepnaam van de persoon. Indien aanwezig is het aan te raden
          deze naam te gebruiken voor visualisaties in plaats van voornaam en
          familienaam.</td>
      </tr>
      <tr>
        <td>gebruikte voornaam</td>
        <td><CodeInline>persoon:gebruikteVoornaam</CodeInline></td>
        <td><CodeInline>xsd:string</CodeInline></td>
        <td>De te gebruiken voornaam van alle officiële voornamen van de
          persoon.</td>
      </tr>
    </:body>
  </AuTable>
</template>
