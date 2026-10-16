import AuApp from '@appuniversum/ember-appuniversum/components/au-app';
import AuBodyContainer from '@appuniversum/ember-appuniversum/components/au-body-container';
import AuContentHeader from '@appuniversum/ember-appuniversum/components/au-content-header';
import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuContent from '@appuniversum/ember-appuniversum/components/au-content';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import Footer from '../components/footer';
import * as M from '../components/menu-items';

<template>
  <AuApp>
    <AuBodyContainer @scroll={{true}}>
      <AuContentHeader
        @titlePartOne="Vlaanderen"
        @titlePartTwo="is lokaal bestuur"
        @pictureSize="default"
      >
        <img
          sizes="50vw"
          src="assets/images/loket-header-1600.jpg"
          alt="Foto van een laptop met daarop het vlaanderen logo."
        />
      </AuContentHeader>
      <AuContent @skin="default">
        <div class="au-c-content au-o-region au-o-layout au-u-max-width-medium">
          <AuHeading @level="1" @skin="1">
            Gelinkt Notuleren en Loket: Vendor en API integrator documentatie
          </AuHeading>
          <p class="au-u-para-lead au-u-margin-top">
            Integreer met applicaties van Gelinkt Notuleren en Loket. Deze
            documentatie wordt verder aangevuld naarmate er meer API's
            beschikbaar zijn, en naarmate er meer vereisten gedefinieerd worden.
          </p>
        </div>
        <section class="au-u-background-gray-100 au-o-region">
          <div class="au-c-content au-o-layout au-u-max-width-medium">
            <p class="au-u-para-lead">
              Deze API documentatie beschrijft verschillende, soms onafhankelijke onderdelen waar een externe partij (vendor) mee kan integreren. In grote lijnen is er de <strong>Meldingsplicht API</strong>, waarbij externe partijen documenten kunnen inzenden om te voldoen aan de meldingsplicht, en opvragen om ook de inzendingen te kunnen weergeven in eigen applicaties, de <strong>Berichtencentrum API</strong>, waarmee externe partijen conversaties tussen ABB en besturen kunnen inlezen en reageren, en een aantal ondersteunende API's, waaronder die voor het uitlezen van Rijksregisternummers of publieke data uit de Centrale Vindplaats.
            </p>

            <AuHeading @level="2" @skin="2">
              Meldingsplicht
            </AuHeading>
            <p class="au-u-para-lead">
              Om te voldoen aan de <AuLinkExternal href="https://www.vlaanderen.be/lokaal-bestuur/organisatie-en-werking/meldingsplicht">meldingsplicht</AuLinkExternal> moeten externe partijen documenten kunnen inzenden in het centrale Loket voor Lokale Besturen. Dit gebeurt door middel van een melding, een registratie van een document met zijn URL, waarna Loket het document en eventuele bijlagen zal opvragen (crawlen) van die URL, eventueel achter een authenticatiemethode. <br />
              Dit proces wordt ook "automatische meldingen" genoemd, omdat er in de meeste gevallen geen menselijke tussenkomst meer nodig is.
            </p>

            <AuHeading @level="3" @skin="3">
              Structureren van RDF documenten
            </AuHeading>
            <p>
              Het document dat ter beschikking moet worden gesteld wordt geacht een <AuLinkExternal href="https://www.w3.org/TR/rdfa-primer/">RDFa document</AuLinkExternal> te zijn. Onderstaande documentatie beschrijft in meer detail het model hoe de RDFa documenten moeten worden opgebouwd.
            </p>
            <M.MenuGrid>
              <M.meldingsplicht_annotaties />
              <M.publicatie_annotaties />
              <M.bijlagen_annotaties />
              <M.besluit_publicatie_external />
            </M.MenuGrid>

            <AuHeading @level="3" @skin="3">
              Insturen
            </AuHeading>
            <p>
              Eenmaal documenten als RDFa ter beschikking zijn gesteld kan het worden ingezonden in het Loket voor Lokale Besturen. Het inzenden zorgt voor een verwerkingsopdracht die binnen enkele minuten het document zal crawlen. Als het document volgens validatieregels correct is zal het automatisch gefinaliseerd worden zodat het als gepubliceerd wordt beschouwd. Zoniet, dan blijft het document in concept staan zodat het vervolledigd kan worden door menselijke tussenkomst. Eventueel verwijderen van het document is in dit stadium mogelijk zodat het gecorrigeerd en opnieuw ingezonden kan worden.
            </p>
            <M.MenuGrid>
              <M.meldingsplicht />
            </M.MenuGrid>

            <AuHeading @level="3" @skin="3">
              Opvragen
            </AuHeading>
            <p>
              Na het inzenden is het mogelijk om informatie op te vragen over de pas ingezonden documenten, maar ook over oudere documenten, of documenten die via andere partijen zijn ingezonden, zoals die via het Loket zelf. Alle documenten worden ingezonden in Loket, maar binnen enkele minuten worden gepubliceerde inzendingen gesynchroniseerd naar andere, meer gespecialiseerde, applicaties. Daarom is de beschikbare informatie in Loket over de ingezonden documenten beperkt, maar is er meer beschikbaar via, bijvoorbeeld, de Erediensten Toezichtsdatabank.
            </p>
            <p>
              Opvragen van gegevens gebeurt via een beveiligde SPARQL API. De eerste documentatie hieronder voorziet generieke informatie over hoe de beveiligde SPARQL endpoint kan worden aangesproken. De tweede over hoe deze API toe te passen op Loket zelf, waar maar beperkte informatie over de inzendingen te zien is, maar wel meteen na het inzenden. De derde documentatiepagina past de API toe op de Erediensten Toezichtsdatabank, waar de meest uitgebreide informatie terug te vinden is.
            </p>
            <M.MenuGrid>
              <M.vendor_sparql />
              <M.meldingsplicht_sparql />
              <M.erediensten_toezichtsdatabank_sparql />
            </M.MenuGrid>

            <AuHeading @level="3" @skin="3">
              Refereren tussen documenten
            </AuHeading>
            <p>
              Bij sommige documenten is het nodig om te kunnen refereren naar andere, eerder ingezonden documenten. Volgende documentatie bespreekt hoe het model er uit ziet, en hoe documenten kunnen worden teruggevonden om naar te refereren.
            </p>
            <M.MenuGrid>
              <M.documenten_refereren />
            </M.MenuGrid>

            <AuHeading @level="2" @skin="2">
              Berichtencentrum
            </AuHeading>
            <p class="au-u-para-lead">
              Lokale besturen en ABB kunnen beveiligde berichten uitwisselen. Het Loket voor Lokale Besturen biedt een API aan waarop deze functionaliteit geïntegreerd kan worden in beide richtingen.
            </p>

            <AuHeading @level="3" @skin="3">
              Insturen
            </AuHeading>
            <p>
              Als antwoord op een bestaand bericht uit een bestaande conversatie kan een nieuw bericht worden <em>gemeld</em>. Als externe partij wordt gevraagd om een bericht op het web ter beschikking te stellen als een RDFa document, eventueel met bijlagen. Dit kan achter beveiligde toegang, zodat het document niet publiek toegankelijk hoeft te zijn. Vervolgens moeten de URL, en authenticatiemethode worden ingezonden in Loket, zodat Loket het bericht kan crawlen. Onderstaand document beschrijft in meer detail hoe dit verloopt.
            </p>
            <M.MenuGrid>
              <M.berichtencentrum />
            </M.MenuGrid>

            <AuHeading @level="3" @skin="3">
              Opvragen
            </AuHeading>
            <p>
              Vanuit ABB wordt een conversatie gestart en een bericht in de conversatie geplaatst, met een bestuur als bestemmeling. Als bestuur krijg je de mogelijkheid om dit bericht te lezen, en een antwoord te formuleren, eventueel met bijlage. Als externe partij is het mogelijk om periodiek berichten op te halen voor het gebruik ervan in eigen applicaties. Dit gebeurt door middel van een beveiligde SPARQL API. Lees in het eerste document hieronder in het algemeen hoe een beveiligde SPARQL API werkt, en lees in het tweede document verder hoe dit concreter kan worden toegepast om berichten uit het Berichtencentrum op Loket uit te lezen.
            </p>
            <M.MenuGrid>
              <M.vendor_sparql />
              <M.berichtencentrum_sparql />
            </M.MenuGrid>

            <AuHeading @level="2" @skin="2">
              Overige applicatieprofielen
            </AuHeading>
            <M.MenuGrid>
              <M.mandaten_annotaties />
              <M.leidinggevenden_annotaties />
            </M.MenuGrid>

            <AuHeading @level="2" @skin="2">
              Overige data endpoints
            </AuHeading>
            <M.MenuGrid>
              <M.rijksregisternummer_api />
              <M.centrale_vindplaats_sparql />
              <M.publicatie_feed />
            </M.MenuGrid>
          </div>
        </section>
      </AuContent>
      <Footer />
    </AuBodyContainer>
  </AuApp>
</template>
