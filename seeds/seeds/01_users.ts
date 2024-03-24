// seeds/01_users.ts
import { Knex } from "knex";
import bcrypt from "bcrypt";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      email: "user1@example.com",
      password: await bcrypt.hash("password1", 10),
    },
    {
      email: "user2@example.com",
      password: await bcrypt.hash("password2", 10),
    },
    // 他のユーザーを追加
  ]);
}
