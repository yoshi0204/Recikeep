// ESM形式のマイグレーションファイル

export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('user_id').primary();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
  });

  await knex.schema.createTable('recipes', (table) => {
    table.increments('recipe_id').primary();
    table.integer('user_id').references('user_id').inTable('users');
    table.string('title').notNullable();
    table.text('description');
    table.integer('cooking_time');
    table.integer('servings');
    table.binary('photo');
    table.string('category');
  });

  await knex.schema.createTable('ingredients', (table) => {
    table.increments('ingredient_id').primary();
    table.integer('recipe_id').references('recipe_id').inTable('recipes');
    table.string('name').notNullable();
    table.string('amount').notNullable();
  });

  await knex.schema.createTable('steps', (table) => {
    table.increments('step_id').primary();
    table.integer('recipe_id').references('recipe_id').inTable('recipes');
    table.integer('step_number').notNullable();
    table.text('instruction').notNullable();
  });

  await knex.schema.createTable('ingredients_search', (table) => {
    table.increments('search_id').primary();
    table.string('ingredient_name').notNullable();
    table.integer('recipe_id').references('recipe_id').inTable('recipes');
  });
}

export async function down(knex) {
  await knex.schema.dropTableIfExists('ingredients_search');
  await knex.schema.dropTableIfExists('steps');
  await knex.schema.dropTableIfExists('ingredients');
  await knex.schema.dropTableIfExists('recipes');
  await knex.schema.dropTableIfExists('users');
}
