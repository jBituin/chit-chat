import * as express from 'express';
import userRouter from '../../packages/api/resources/users';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('chit-chat index route');
});

router.use('/users', userRouter);

export default router;
