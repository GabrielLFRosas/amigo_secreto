
exports.up = function(knex) {
    return knex.schema.createTable('groups', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.timestamp('created_at').notNull().defaultTo(knex.fn.now())
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('groups')

};
