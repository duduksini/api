import * as responseTime from 'response-time';
import log from '../utilities/log';

const logResponseRequest = (req, res, time) =>
  log.info('%s %s returned %s in %d ms', req.method, req.url, res.statusCode, time);

export default responseTime(logResponseRequest);
