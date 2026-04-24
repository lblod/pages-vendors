import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import AuTable from '@appuniversum/ember-appuniversum/components/au-table';
import MyCodeInline from '../../components/my-code-inline';

<template>
  <AuHeading @level="1" @skin="1">Leidinggevendendatabank</AuHeading>
  <p>
    De leidinggevenden databank bevat de leidinggevenden van de lokale besturen en
    hun verzelfstandigde entiteiten. Deze databank volgt een uitbreiding op het
    applicatieprofiel
    <AuLinkExternal
      href="https://data.vlaanderen.be/doc/applicatieprofiel/mandatendatabank/"
    >
      mandatendatabank</AuLinkExternal>. Dit document beschrijft deze uitbreiding.
  </p>

  <AuHeading @level="2" @skin="2">Overzicht</AuHeading>
  <img src="assets/images/leidinggevenden.jpg" alt="leidinggevend UML diagram" />

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
        <td><MyCodeInline>adres</MyCodeInline></td>
        <td><AuLinkExternal
          href="https://data.vlaanderen.be/ns/adres#"
        >https://data.vlaanderen.be/ns/adres#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>foaf</MyCodeInline></td>
        <td><AuLinkExternal
          href="http://xmlns.com/foaf/0.1/"
        >http://xmlns.com/foaf/0.1/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>lblodlg</MyCodeInline></td>
        <td><AuLinkExternal
          href="http://data.lblod.info/vocabularies/leidinggevenden/"
        >http://data.lblod.info/vocabularies/leidinggevenden/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>locn</MyCodeInline></td>
        <td><AuLinkExternal
          href="http://www.w3.org/ns/locn#"
        >http://www.w3.org/ns/locn#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>mandaat</MyCodeInline></td>
        <td><AuLinkExternal
          href="http://data.vlaanderen.be/ns/mandaat#"
        >http://data.vlaanderen.be/ns/mandaat#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>person</MyCodeInline></td>
        <td><AuLinkExternal
          href="https://data.vlaanderen.be/ns/persoon#"
        >https://data.vlaanderen.be/ns/persoon#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>persoon</MyCodeInline></td>
        <td><AuLinkExternal
          href="http://www.w3.org/ns/person#"
        >http://www.w3.org/ns/person#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>org</MyCodeInline></td>
        <td><AuLinkExternal
          href="http://www.w3.org/ns/org#"
        >http://www.w3.org/ns/org#</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>schema</MyCodeInline></td>
        <td><AuLinkExternal
          href="http://schema.org/"
        >http://schema.org/</AuLinkExternal></td>
      </tr>
      <tr>
        <td><MyCodeInline>xsd</MyCodeInline></td>
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
    <MyCodeInline>locn:Address</MyCodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Leesbare voorstelling met enkel de basisgegevens van het adres, bedoeld voor
    het gebruik van een adres als attribuut van een ander object. Overgenomen uit
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
        <td><MyCodeInline>adres:verwijstNaar</MyCodeInline></td>
        <td><MyCodeInline>adres:Adres</MyCodeInline></td>
        <td>Adres waarvan de adresvoorstelling is afgeleid.</td>
      </tr>
      <tr>
        <td>gemeentenaam</td>
        <td><MyCodeInline>adres:gemeentenaam</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Gemeentenaam van het adres.</td>
      </tr>
      <tr>
        <td>huisnummer</td>
        <td><MyCodeInline>adres:AdresVoorstelling.huisnummer</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Alfanumerieke code officieel toegekend aan gebouweenheden,
          ligplaatsen, standplaatsen of percelen.</td>
      </tr>
      <tr>
        <td>postcode</td>
        <td><MyCodeInline>locn:postCode</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Code waarmee het geografisch gebied dat adressen voor postale
          doeleinden groepeert wordt aangeduid.</td>
      </tr>
      <tr>
        <td>straatnaam</td>
        <td><MyCodeInline>adres:straatnaam</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Straatnaam van het adres.</td>
      </tr>
      <tr>
        <td>volledig adres</td>
        <td><MyCodeInline>locn:fullAddress</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Het complete adres in één string, al dan niet geformatteerd.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3">Bestuursfunctie</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>lblodlg:Bestuursfunctie</MyCodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    De bevoegdheid om gedurende een bepaalde periode een bestuursorgaan te vormen
    of er deel van uit te maken. Specialisatie van
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
        <td><MyCodeInline>org:role</MyCodeInline></td>
        <td><MyCodeInline>org:Role</MyCodeInline></td>
        <td>Bestuurseenheid die de publicatie gemaakt heeft.</td>
      </tr>
      <tr>
        <td>contactgegevens</td>
        <td><MyCodeInline>schema:contactPoint</MyCodeInline></td>
        <td><MyCodeInline>schema:ContactPoint</MyCodeInline></td>
        <td>Contactgegevens voor de bestuursfunctie.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3">Bestuursorgaan (in bestuursperiode)</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>besluit:Bestuursorgaan</MyCodeInline>
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
        <td><MyCodeInline>lblodlg:heeftBestuursfunctie</MyCodeInline></td>
        <td><MyCodeInline>lblodlg:Bestuursfunctie</MyCodeInline></td>
        <td>Een bestuursfunctie binnen het orgaan.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3">Contactgegevens</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>schema:ContactPoint</MyCodeInline>
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
        <td><MyCodeInline>locn:address</MyCodeInline></td>
        <td><MyCodeInline>locn:Address</MyCodeInline></td>
        <td>Adres dat men kan aanschrijven.</td>
      </tr>
      <tr>
        <td>email</td>
        <td><MyCodeInline>schema:email</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Email-adres waarnaar men kan mailen.</td>
      </tr>
      <tr>
        <td>telefoon</td>
        <td><MyCodeInline>schema:telephone</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Telefoonnummer waarop men kan bellen.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3">Functionaris</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>lblodlg:Functionaris</MyCodeInline>
  </p>
  <AuHeading @level="4" @skin="4">Beschrijving</AuHeading>
  <p>
    Een persoon in zijn rol als houder van een bestuursfunctie. Specialisatie van
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
        <td><MyCodeInline>org:holds</MyCodeInline></td>
        <td><MyCodeInline>lblodlg:Bestuursfunctie</MyCodeInline></td>
        <td>De bestuursfunctie die deze functionaris bekleedt.</td>
      </tr>
      <tr>
        <td>einde</td>
        <td><MyCodeInline>mandaat:einde</MyCodeInline></td>
        <td><MyCodeInline>xsd:dateTime</MyCodeInline></td>
        <td>Tijdstip vanaf wanneer de functionaris de bestuursfunctie niet langer
          opneemt.</td>
      </tr>
      <tr>
        <td>is bestuurlijke alias van</td>
        <td><MyCodeInline>mandaat:isBestuurlijkeAliasVan</MyCodeInline></td>
        <td><MyCodeInline>person:Person</MyCodeInline></td>
        <td>De persoon die de functionarisrol vervult.</td>
      </tr>
      <tr>
        <td>start</td>
        <td><MyCodeInline>mandaat:start</MyCodeInline></td>
        <td><MyCodeInline>xsd:dateTime</MyCodeInline></td>
        <td>Tijdstip vanaf wanneer de functionaris de bestuursfunctie opneemt.</td>
      </tr>
    </:body>
  </AuTable>

  <AuHeading @level="3" @skin="3">Persoon</AuHeading>
  <AuHeading @level="4" @skin="4">Klasse</AuHeading>
  <p>
    <MyCodeInline>person:Person</MyCodeInline>
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
        <td><MyCodeInline>foaf:familyName</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>De familienaam van de persoon.</td>
      </tr>
      <tr>
        <td>alternatieve naam</td>
        <td><MyCodeInline>foaf:name</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>Een roepnaam van de persoon. Indien aanwezig is het aan te raden deze
          naam te gebruiken voor visualisaties in plaats van voornaam en
          familienaam.</td>
      </tr>
      <tr>
        <td>gebruikte voornaam</td>
        <td><MyCodeInline>persoon:gebruikteVoornaam</MyCodeInline></td>
        <td><MyCodeInline>xsd:string</MyCodeInline></td>
        <td>De te gebruiken voornaam van alle officiële voornamen van de persoon.</td>
      </tr>
    </:body>
  </AuTable>
</template>
