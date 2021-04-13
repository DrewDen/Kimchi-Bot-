require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();


const botreply = {
    greetone:' Hello and welcome to your Kimchi project channnel',
    greettwo:'let me show you your sprite week planner'
};

client.on('ready', ()=>{
    console.log(`${client.user.tag} has logged in.  Thank you.`)
});

client.on('message', msg =>{ 
    if(msg.author.bot) return;

    console.log(`${msg.author.tag} : ${msg.content}`);
    if(msg.content === 'hello'){
        msg.reply(botreply.greetone);
    }

}); 


client.login(process.env.DISCORDJS_BOT_TOKEN);