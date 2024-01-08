import { Migration } from '@mikro-orm/migrations';

export class Migration20240108210945 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" uuid not null default uuid_generate_v4(), "created_at" timestamptz not null, "updated_at" timestamptz not null, constraint "user_pkey" primary key ("id"));');

    this.addSql('create table "event" ("id" uuid not null default uuid_generate_v4(), "created_at" timestamptz not null, "updated_at" timestamptz not null, "title" varchar(255) null, "owner_id" uuid not null, constraint "event_pkey" primary key ("id"));');

    this.addSql('alter table "event" add constraint "event_owner_id_foreign" foreign key ("owner_id") references "user" ("id") on update cascade;');
  }

}
