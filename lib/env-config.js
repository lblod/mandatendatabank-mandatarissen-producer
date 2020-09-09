const LOG_INCOMING_DELTA = process.env.LOG_INCOMING_DELTA || false;
const DELTA_INTERVAL = process.env.DELTA_INTERVAL_MS || 1000;
const RELATIVE_FILE_PATH = process.env.RELATIVE_FILE_PATH || 'deltas';
const PUBLISHER_URI = process.env.PUBLISHER_URI || 'http://data.lblod.info/services/loket-producer';

export {
  LOG_INCOMING_DELTA,
  DELTA_INTERVAL,
  RELATIVE_FILE_PATH,
  PUBLISHER_URI,
};
