import { app, errorHandler } from 'mu';
import bodyParser from 'body-parser';
import DeltaFile from './lib/delta-file.js';
import { APP_NAME, LOG_INCOMING_DELTA, LOG_OUTGOING_DELTA } from './lib/config';
import { enrichDeltaFile } from './lib/producer';

// --- CONFIGURATION ---

app.use(bodyParser.json({
  type: function(req) {
    return /^application\/json/.test(req.get('content-type'));
  },
}));

// --- REST API ---

app.get('/', function(req, res) {
  const hello = `Hey, you have reached "${APP_NAME}"! Seems like I'm doing just fine! ^_^`;
  res.send(hello);
});

app.post('/delta', async function(req, res) {
  const file = new DeltaFile(req);

  if (LOG_INCOMING_DELTA)
    console.log(`Receiving delta ${JSON.stringify(file.delta)}`);

  await enrichDeltaFile(file);
  if (LOG_OUTGOING_DELTA) {
    console.log(`Receiving delta ${JSON.stringify(file.delta)}`);
  }
  await file.writeToDisk();
  res.status(202).send();
});

app.get('/files', async function(req, res) {
  const since = req.query.since || new Date().toISOString();
  const files = await DeltaFile.getDeltaFiles(since);
  res.json({data: files});
});

app.use(errorHandler);