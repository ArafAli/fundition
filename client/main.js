import './buffer';

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import steem from 'steem';
steem.api.setOptions({ url: 'https://api.steemit.com' });

import './main.html';

window.steem = steem;