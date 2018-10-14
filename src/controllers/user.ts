import * as express from 'express';
import requestResponseLogger from '../middlewares/request-response-logger';
import * as bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());
router.use(requestResponseLogger);

router.get('/', (req, res) => {
  res.send('Get users!');
});

router.get('/:userId', (req, res) => {
  res.send(`Get user: ${req.params.collectionId}`);
});

router.post('/', (req, res) => {
  res.send('Add user!');
});

export default router;
