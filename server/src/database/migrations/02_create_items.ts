import Knex from 'knex';

const _table = 'items';

export async function up(knex: Knex) {
   return knex.schema.createTable(_table,  table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable(_table)
}