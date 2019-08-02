const Discord = require('discord.js');
const client = new Discord.Client();


client.login('NTk5MjE1NjYzMjk4Mzc5Nzg2.XSh9jA.AmBwg4rbK294Ji6i1JtBcLZVfxA');

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

