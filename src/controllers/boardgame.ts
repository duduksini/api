import * as express from 'express';
import requestResponseLogger from '../middlewares/request-response-logger';
import * as bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());
router.use(requestResponseLogger);

router.get('/', (req, res) => {
  res.send('GET boardgames!');
});

router.get('/:boardgameId', (req, res) => {
  res.send(`Get boardgame: ${req.params.boardgameId}`);
});

router.post('/', (req, res) => {
  res.send('Add boardgames!');
});

export default router;
