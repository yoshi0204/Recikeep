// ESM形式のシードファイル
export async function seed(knex) {
  // Deletes ALL existing entries in 'users' table
  await knex('users').del(); // Ensure that 'users' is the actual table name

  // Inserts seed entries into 'users' table
  await knex('users').insert([
    { email: 'user1@example.com', password: 'password1' }, // Ensure these are the actual column names
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' }
    // Add more entries as needed
  ]);
};
