import * as responseTime from 'response-time';
import log from '../utilities/log';

const logResponseRequest = (req, res, time) =>
  log.info('Returned %s in %d ms for %s %s', res.statusCode, time, req.method, req.url);

export default responseTime(logResponseRequest);
