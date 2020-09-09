import { app, errorHandler } from 'mu';
import { APP_NAME } from './lib/statics';
import bodyParser from 'body-parser';
import DeltaCache from './lib/delta-cache';
import { DELTA_INTERVAL, LOG_INCOMING_DELTA} from './lib/env-config';

const cache = new DeltaCache();
let hasTimeout = null;

// --- CONFIGURATION ---

app.use( bodyParser.json( { type: function(req) { return /^application\/json/.test( req.get('content-type') ); } } ) );

// --- REST API ---

app.get('/', function( req, res ) {
  const hello = `Hey, you have reached "${APP_NAME}"! Seems like I'm doing just fine! ^_^`;
  res.send(hello);
});

app.post('/delta', async function(req, res) {
  const delta = req.body;

  if (LOG_INCOMING_DELTA)
    console.log(`Receiving delta ${JSON.stringify(delta)}`);

  const processDelta = async function() {
    cache.push( ...delta );
    if( !hasTimeout ){
      triggerTimeout();
    }
  };

  processDelta();  // execute async

  res.status(202).send();
});

app.get('/files', async function( req, res ) {
  const since = req.query.since || new Date().toISOString();
  const files = await cache.getDeltaFiles(since);
  res.json({ data: files });
});

function triggerTimeout(){
  setTimeout( () => {
    hasTimeout = false;
    cache.generateDeltaFile();
  }, DELTA_INTERVAL );
  hasTimeout = true;
}

app.use(errorHandler);