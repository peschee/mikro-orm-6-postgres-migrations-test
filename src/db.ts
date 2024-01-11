import { EntityManager, EntityRepository, MikroORM, Options } from '@mikro-orm/postgresql';
import { Event } from './entities/event.entity.js';
import { User } from './entities/user.entity.js';

export interface Services {
  orm: MikroORM;
  em: EntityManager;
  user: EntityRepository<User>;
  event: EntityRepository<Event>;
}

let cache: Services;

/**
 * @see https://mikro-orm.io/docs/guide/project-setup#basic-dependency-injection-container
 * @param options
 */
export async function initORM(options?: Options): Promise<Services> {
  if (cache) {
    return cache;
  }

  const orm = await MikroORM.init(options);

  // Save to cache before returning
  return (cache = {
    orm,
    em: orm.em,
    user: orm.em.getRepository(User),
    event: orm.em.getRepository(Event),
  });
}
