require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.DISCORDJS_BOT_TOKEN);

// let readyDiscord = () => {
//     console.log('hello world');

// }

// client.on('ready', readyDiscord);

let gotMessage = msg =>{
    console.log(`${msg.author.tag} : ${msg.content}`);
   }

client.on('message', gotMessage);

