import { NextFunction, Request, Response } from 'express';
import * as httpStatus from 'http-status';
import { getConnection } from 'typeorm';
import { Post } from '../../../database/models/post';
// import { Forbidden } from '../../helpers/exceptions/forbidden'

export const list = async (
  _req: Request,
  res: Response,
  _next: NextFunction,
): Promise<any> => {
  try {
    const posts = await getConnection()
      .getRepository(Post)
      .createQueryBuilder('post')
      .getMany();

    return res.status(200).send(posts);
  } catch (error) {
    return res.status(500).send(error);
  }
};
