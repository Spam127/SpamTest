const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});


client.on('ready', async() => {
var server = "Id server"; // "519471264348504084"
var channel = "id room";//"519471264348504086"
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**RoYaleGameSpam,RoYaleGameSpam,RoYaleGameSpam,RoYaleGameSpam,RoYaleGameSpam,RoYaleGameSpam,RoYaleGameSpam,RoYaleGameSpam,RoYaleGameSpam,RoYaleGameSpam,RoYaleGameSpam**')
    },305);
})

client.login("");