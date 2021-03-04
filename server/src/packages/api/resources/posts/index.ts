import Router from 'express-promise-router';
import { list } from '../posts/controller';

const router = Router();

router.route('/').get(list);

export default router;
