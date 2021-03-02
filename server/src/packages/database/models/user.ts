// tslint:disable:variable-name
import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  OneToMany,
} from 'typeorm';
import config from '../../../config';
import { Post } from './post';
import { Comment } from './comment';

@Entity(`${config.DB.MAIN_SCHEMA}.users`)
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column('varchar')
  public email: string;

  @Column('timestamp with time zone')
  public created_at: Timestamp;

  @Column('timestamp with time zone')
  public updated_at: Timestamp;

  @Column('timestamp with time zone')
  public deleted_at: Timestamp;

  @OneToMany(() => Post, (post) => post.user)
  public posts: Post[];

  @OneToMany(() => Comment, (comment) => comment.user)
  public comments: Comment[];
}
