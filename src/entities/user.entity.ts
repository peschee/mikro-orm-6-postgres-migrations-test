import { Collection, Entity, OneToMany } from '@mikro-orm/core';
import { BaseEntity } from './base.entity.js';
import { Event } from './event.entity.js';

@Entity()
export class User extends BaseEntity {
  @OneToMany({ mappedBy: 'owner' })
  events = new Collection<Event>(this);
}
