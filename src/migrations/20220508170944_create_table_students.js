
exports.up = function (knex) {
    return knex.schema
        .createTable('students', function (table) {
            table.increments('id').primary();
            table.string('name', 255).notNullable();
            table.string('cpf', 14).notNullable().unique();
            table.string('email', 255).notNullable().unique();
            table.timestamp('updated_at').defaultTo(knex.fn.now())
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTable('students');
};

exports.config = { transaction: false };