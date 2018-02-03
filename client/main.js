import './buffer';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import steem from 'steem';
steem.api.setOptions({ url: 'https://api.steemit.com' });
window.steem = steem;

import sc2sdk from 'sc2-sdk';
var sc2 = sc2sdk.Initialize({
    app: 'fundition.app',
    callbackURL: 'http://localhost:3000/sc2login',
    accessToken: 'access_token'
});
window.sc2 = sc2

import './main.html';


