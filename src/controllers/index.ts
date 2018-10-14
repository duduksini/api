import * as express from 'express';
import boardgame from './boardgame';
import collection from './collection';
import health from './health';
import user from './user';
import docs from './docs';

const router = express.Router();
router.use('/boardgame', boardgame);
router.use('/collection', collection);
router.use('/health', health);
router.use('/user', user);
router.use('/docs', docs);

router.get('/', (req, res) => {
  res.redirect('/docs');
});
export default router;
