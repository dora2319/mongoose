'use strict';

if (parseInt(process.versions.node.split('.')[0], 10) >= 4) {
  require('./es-next/all.test.es6.js');
}

if (parseInt(process.versions.node.split('.')[0], 10) >= 10) {
  require('./es-next/asyncIterator.test.es6.js');
}
