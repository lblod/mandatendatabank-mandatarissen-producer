const LOG_INCOMING_DELTA = process.env.LOG_INCOMING_DELTA || false;
const LOG_DELTA_REWRITE = process.env.LOG_DELTA_REWRITE || false;
const LOG_OUTGOING_DELTA = process.env.LOG_OUTGOING_DELTA || false;
const DELTA_INTERVAL = process.env.DELTA_INTERVAL_MS || 1000;
const RELATIVE_FILE_PATH = process.env.RELATIVE_FILE_PATH || 'deltas';
const FILE_GRAPH = process.env.FILE_GRAPH || 'http://mu.semte.ch/application';

export {
  LOG_INCOMING_DELTA,
  LOG_DELTA_REWRITE,
  LOG_OUTGOING_DELTA,
  DELTA_INTERVAL,
  RELATIVE_FILE_PATH,
  FILE_GRAPH,
};
