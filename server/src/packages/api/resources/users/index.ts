import Router from 'express-promise-router';
import { list, login, posts } from '../users/controller';

const router = Router();

router.route('/').get(list);
router.route('/get-posts/:userId').get(posts);
router.route('/login').get(login);

export default router;
