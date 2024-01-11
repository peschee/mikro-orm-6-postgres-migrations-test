import { initORM } from './db.js';

const db = await initORM();

let limit;
let offset;

const [items, total] = await db.event.findAndCount(
  {},
  {
    limit,
    offset,
  }
);

console.log(items);
console.log(total);
