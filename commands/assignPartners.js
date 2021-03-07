const knex = require("../config")
module.exports = {
  name: 'assignpartners',
  description: 'Assigning pairs of partners',
  execute(msg, args) {
    msg.channel.send('Assigning new partners');
    let resultArray = []
    knex.raw(`select id from people where company_id = 1 order by random()`)
      .then((res) => {
        resultArray = res.rows;
      })
      .then(() => {
        return Promise.all(resultArray.map((id, index) => {
          if (index%2 == 1) {
            console.log(index);
            return knex.raw(`insert into matches(user_one_id, user_two_id) values ('${resultArray[index-1].id}', '${resultArray[index].id}')`);
          }
        })).then((result) => {
          console.log(result);
        })
      })
  }
};
