'use strict';

const { Observer, Observable } = require('./lib/observe.js');

const red = '\x1b[1;31m';
const blue = '\x1b[1;34m';
const yellow = '\x1b[1;33m';

const logColoured = colour => text => console.log(colour + text + '\x1b[0m');

const meeting = new Observable(
  new Observer(logColoured(red)),
  new Observer(logColoured(blue)),
  new Observer(logColoured(yellow))
);

meeting.data = 'New info';

console.dir(meeting.removeObserver(1));
meeting.data = 'Another info';

const index = meeting.addObserver(new Observer(logColoured(blue)));
console.log(index);
meeting.data = 'Some more info';
