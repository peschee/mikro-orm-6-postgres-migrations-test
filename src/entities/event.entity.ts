import { Entity, ManyToOne, Opt, Property } from '@mikro-orm/core';
import { BaseEntity } from './base.entity.js';
import { User } from './user.entity.js';

@Entity()
export class Event extends BaseEntity {
  @Property()
  title?: string & Opt;

  @ManyToOne()
  owner!: User;
}
