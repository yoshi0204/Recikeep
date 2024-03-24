// <timestamp>_create_users_table.ts
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table) => {
    table.increments("id"); // SQLiteでは自動的にAUTOINCREMENTとして扱われます
    table.string("email").unique();
    table.string("password");
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
