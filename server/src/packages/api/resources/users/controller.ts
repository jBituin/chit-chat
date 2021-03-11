import { NextFunction, Request, Response } from 'express';
import * as httpStatus from 'http-status';
import { getConnection } from 'typeorm';
import { User } from '../../../database/models/user';
import { Post } from '../../../database/models/post';
// import { Forbidden } from '../../helpers/exceptions/forbidden'

export const list = async (
  _req: Request,
  res: Response,
  _next: NextFunction,
): Promise<any> => {
  try {
    const users = await getConnection()
      .getRepository(User)
      .createQueryBuilder('user')
      .getMany();

    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const posts = async (
  req: Request,
  res: Response,
  _next: NextFunction,
): Promise<any> => {
  const userId = req.params.userId;
  try {
    const posts = await getConnection()
      .getRepository(Post)
      .createQueryBuilder('post')
      .where({
        user: userId,
      })
      .getMany();

    return res.status(200).send(posts);
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const login = async (
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  res.status(httpStatus.OK).json({ hello: 'world' });
};
