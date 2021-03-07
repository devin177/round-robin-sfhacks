exports.up = function (knex) {
  return knex.raw(`
    CREATE TABLE company(
      id SERIAL PRIMARY KEY,
      company_id VARCHAR
    );

    ALTER TABLE people
    ADD COLUMN company_id INTEGER;

    ALTER TABLE people 
    ADD CONSTRAINT fk_company_people 
    FOREIGN KEY (company_id) 
    REFERENCES company (id);
  `)
};

exports.down = function (knex) {
};
