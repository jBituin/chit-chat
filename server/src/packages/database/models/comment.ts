// tslint:disable:variable-name
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { User } from './user';
import { Post } from './post';
import config from '../../../config';

@Entity(`${config.DB.MAIN_SCHEMA}.posts`)
export class Comment extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column('varchar')
  public body: string;

  @Column('timestamp with time zone')
  public created_at: Timestamp;

  @Column('timestamp with time zone')
  public updated_at: Timestamp;

  @Column('timestamp with time zone')
  public deleted_at: Timestamp;

  @ManyToOne(() => User, (user) => user.comments)
  public user: User;

  @ManyToOne(() => Post, (post) => post.comments)
  public post: Post;
}
