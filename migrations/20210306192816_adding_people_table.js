exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE people(
      id SERIAL PRIMARY KEY,
      name VARCHAR NOT NULL, 
      discord_user VARCHAR, 
      department VARCHAR,
      job VARCHAR
    )
  `)
};

exports.down = function (knex) {
  knex.schema.dropTable("people");
};

