exports.up = function(knex) {
  return knex.schema.createTable('matches', table => {
    table.increments('id').primary();
    table.string('winner_name');
    table.string('loser_name');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('matches');
};
