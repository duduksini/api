import log from '../utilities/log';

const errorHandler = (err, req, res, next) => {
  log.error(err.stack);
  res.status(500).send('Something failed!');
};

export default errorHandler;
