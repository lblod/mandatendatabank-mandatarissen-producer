import { app } from 'mu';

// Statics
export const APP_NAME = 'mandatendatabank-mandatarissen-producer';
// TODO remove if unused
//  export const APP_URI = `http://lblod.data.gift/services/${APP_NAME}`;

// REST API

app.get('/', function( req, res ) {
  const hello = `Hey, you have reached "${APP_NAME}"! Seems like I'm doing just fine! ^_^`;
  res.send(hello);
});