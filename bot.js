const Discord = require('discord.js');
const client = new Discord.Client();

var itemNumbers = 5; //TODO id=121+ изменить названия, убрать пробелы  
var itemNames = [
	'Меч Сквайра',
	'Рыцарский Меч',
	'Гладиус',
	'Абордажная Сабля',
	'Рапира'	
]

var i, k;

var mess = '';





client.on('message', message => {
	mess = message.content.toString().toLocaleLowerCase();
	for (i = 1; i < itemNumbers; i++){
		if (mess.indexOf(itemNames[i].toLocaleLowerCase()) == 0) {
			message.reply(`
			Бот в процессе :3`);
		}
	}
	
});

client.login(process.env.BOT_TOKEN);
