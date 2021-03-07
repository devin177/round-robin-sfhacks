// dotenv imports
require('dotenv').config();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

// express server imports
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// discord imports
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

// database imports
const knex = require('./config');

bot.login(DISCORD_TOKEN);


// When the bot is fired up and ready to work
bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

// Maps the names of commands to their corresponding functions
Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

// test welcome message
bot.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
  console.log("new member");
});

// When new members arrive in the server/guild, add them to the database
bot.on('guildMemberAdd', member => {
  knex.raw(`
  insert into people(name, discord_user, department, job, company_id) values ('${member.user.username}', '${member.user.username}', 'software', 'developer', (select id from company where "company_id" = '${member.guild.id}'))
  `)
    .then((res) => {
      console.log("successfully added new user to people");
      const channel = member.guild.channels.cache.find(ch => ch.name === 'database');
      channel.send(`Member ${member} has been added to the database`);
    })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// Reads each message and checks the first word for keywords
bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);
  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('there was an error trying to execute that command!');
  }
});

// const test = (args) => {
//   const guild = bot.guilds.cache.get('817499603577733160')
//   console.log(guild.members.fetch());
// }

// const notifyMatch = (args) => {
//   // Notify people of their matches
// }

// bot.setInterval(test, 5000)

// const guild = bot.guilds.fetch('817499603577733160');
// const member = guild.members.fetch('221492745070575617');
