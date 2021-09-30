
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
      table.increments('id').primary()
      table.string('name').notNull()
      table.string('email').notNull()
      //table.integer('group_id').references('id')
      //      .inTable('groups')
      table.integer('friend_id')
      //table.boolean('is_admin').notNull().defaultTo(false)
      table.timestamp('created_at').notNull().defaultTo(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users')
};
