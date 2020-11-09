import Application from 'pages-vendors/app';
import config from 'pages-vendors/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
