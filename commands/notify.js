const knex = require('../config');
module.exports = {
  name: 'notify',
  description: 'Notify users of their weekly pairing',
  async execute(msg, args) {
    let matches = [];
    let finalMatches = [];
    matches = await knex.raw(`select user_one_id, user_two_id from matches`)
    for (match of matches.rows) {
      const user_one_id = await knex.raw(`select discord_user from people where id = '${match.user_one_id}'`)
      console.log(user_one_id.rows[0].discord_user);

      const user_two_id = await knex.raw(`select discord_user from people where id = '${match.user_two_id}'`)
      console.log(user_two_id.rows[0].discord_user);

      msg.channel.send(`<@${user_one_id.rows[0].discord_user}> has been matched with <@${user_two_id.rows[0].discord_user}>.`)
    }

      // .then((res) => {
      //   matches = res.rows;
      // })
      // .then(() => {
      //   return Promise.all(matches.map((current, index) => {
      //     // inconsistent in which returns first
      //     pair = {};
      //     pair.user_one_id;
      //     pair.user_two_id;
      //     return knex.raw(`select discord_user from people where id = '${current.user_one_id}'`)
      //       .then((first) => {
      //         finalMatches[index] = pair;
      //         finalMatches[index].user_one_id = first.rows[0].discord_user;
      //         //console.log(first.rows[0].discord_user + " index " + index);
      //       })
      //       .then(() => {
      //         return knex.raw(`select discord_user from people where id = '${current.user_two_id}'`)
      //         .then((second) => {
      //           finalMatches[index] = pair;
      //           finalMatches[index].user_two_id = second.rows[0].discord_user;
      //           //console.log(second.rows[0].discord_user+ " index " + index);
      //           console.log(finalMatches[index]);
      //       })
      //     })
      //   })).then(() => {
      //     console.log(finalMatches[1]);
      //   })
      // })
  },
};
