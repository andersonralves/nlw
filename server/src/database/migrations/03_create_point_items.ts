import Knex from "knex";

const _table = "point_items";

export async function up(knex: Knex) {
  return knex.schema.createTable(_table, (table) => {
    table.increments("id").primary();

    table.integer("point_id").notNullable().references("id").inTable("points");

    table.integer("item_id").notNullable().references("id").inTable("items");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable(_table);
}
