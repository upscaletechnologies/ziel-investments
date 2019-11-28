const mApp = require('./app.js').default;
const funfacts = require('./funfacts.js').default;

export default function() {
  mApp.init();
  funfacts.init();
}
