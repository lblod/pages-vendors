import AuHeading from '@appuniversum/ember-appuniversum/components/au-heading';
import AuMainFooter from '@appuniversum/ember-appuniversum/components/au-main-footer';
import AuContent from '@appuniversum/ember-appuniversum/components/au-content';
import AuLinkExternal from '@appuniversum/ember-appuniversum/components/au-link-external';
import AuAlert from '@appuniversum/ember-appuniversum/components/au-alert';

<template>
  <AuMainFooter>
    <AuHeading @level="3" @skin="4">
      Gelinkt Notuleren: Vendor en API integrator documentatie
    </AuHeading>
    <AuContent @skin="small">
      <AuAlert
        class="au-u-margin-top"
        @title="Vragen?"
        @skin="warning"
        @icon="question-circle"
        @size="default"
        @closeable={{false}}>
        <p>
          Voor meer informatie kan u ons contacteren op
          <AuLinkExternal
            href="mailto:digitaalABB@vlaanderen.be"
            @icon="mail"
            @iconAlignment="left">
              digitaalABB@vlaanderen.be
          </AuLinkExternal>.
        </p>
      </AuAlert>
      <p>
        Uitgegeven door
        <AuLinkExternal
          href="https://www.vlaanderen.be/organisaties/administratieve-diensten-van-de-vlaamse-overheid/beleidsdomein-kanselarij-en-bestuur/agentschap-binnenlands-bestuur"
          @icon="external"
          @iconAlignment="left">
            Agentschap Binnenlands Bestuur
        </AuLinkExternal>
      </p>
      <ul class="au-c-list-horizontal">
        <li class="au-c-list-horizontal__item">
          <AuLinkExternal
            href="https://www.vlaanderen.be/over-vlaanderenbe/disclaimer"
            @skin="secondary"
            @icon="external"
            @iconAlignment="left">
              Disclaimer
          </AuLinkExternal>
        </li>
        <li class="au-c-list-horizontal__item">
          <AuLinkExternal
            href="https://www.vlaanderen.be/over-vlaanderenbe/cookieverklaring-vlaanderenbe"
            @skin="secondary"
            @icon="external"
            @iconAlignment="left">
              Cookieverklaring
          </AuLinkExternal>
        </li>
      </ul>
    </AuContent>
  </AuMainFooter>
</template>
