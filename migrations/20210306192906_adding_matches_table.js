exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE matches (
      id SERIAL PRIMARY KEY, 
      user_one_id INTEGER NOT NULL, 
      user_two_id INTEGER, 
      CONSTRAINT fk_people_match_user_one
          FOREIGN KEY(user_one_id) 
        REFERENCES people(id), 
      CONSTRAINT fk_people_match_user_two
          FOREIGN KEY(user_two_id) 
        REFERENCES people(id)
    )
  `)
};

exports.down = function (knex) {
  knex.schema.dropTable("matches");
};