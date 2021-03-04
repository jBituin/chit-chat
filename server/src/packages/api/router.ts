import * as express from 'express';
import userRouter from '../../packages/api/resources/users';
import postRouter from '../../packages/api/resources/posts';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('chit-chat index route');
});

router.use('/users', userRouter);
router.use('/posts', postRouter);

export default router;
