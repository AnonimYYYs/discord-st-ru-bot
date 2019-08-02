const Discord = require('discord.js');
const client = new Discord.Client();


client.login('NTk5MjE1NjYzMjk4Mzc5Nzg2.XUQ5-A.AKE9zIRRuWLo1NJVx9hKrZvc3Es');

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

