const Discord = require('discord.js');
const client = new Discord.Client();


client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	} else
    if (message.content === 'Кто лучший игрок?') {
    	message.reply('Бот лучший игрок!');
  	}
});

client.login(process.env.BOT_TOKEN);
