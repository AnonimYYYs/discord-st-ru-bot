const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);

var mysql = require("mysql");

var itemsDB = mysql.createConnection({
	host: 'us-cdbr-iron-east-02.cleardb.net',
	user: 'beba5a729a48ae',
	password: '6ce526cb',
	database: 'heroku_706f58054ac3d91'
});

var itemNumbers = 214; //TODO id=121+ изменить названия, убрать пробелы  
var itemNames = [
	'Меч Сквайра',
	'Рыцарский Меч',
	'Гладиус',
	'Абордажная Сабля',
	'Рапира',
	'Катана',
	'Королевский Клинок',
	'Топор Дровосека',
	'Секира',
	'Железный Колун',
	'Бердыш',
	'Томагавк',
	'Боевой Топор',
	'Гномий Двуручный Топор',
	'Самодельный Нож',
	'Быстрый клинок',
	'Кунай',
	'Потайной Нож',
	'Балисонг',
	'Ритуальный Нож',
	'Королевский Кинжал',
	'Рыбник',
	'Дубина',
	'Палица С Шипами',
	'Боевой Молот',
	'Булава свободы',
	'Моргенштерн',
	'Шестопер',
	'Череполом',
	'Абендштерн',
	'Метательное копье',
	'Охотничье копье',
	'Копье с лезвием',
	'Рунка',
	'Тришула',
	'Спетум',
	'Королевская алебарда',
	'Тренировочный лук',
	'Вязовый лук',
	'Рефлексивный лук',
	'Великолепная арфа',
	'Составной лук',
	'Шипастый лук',
	'Крылатый лук',
	'Арабеска',
	'Деревянная клюка',
	'Прочная трость',
	'Дубовый посох',
	'Совиный насест',
	'Посох странника',
	'Нефритовый скипетр',
	'Посох чародея',
	'Небесный посох',
	'Жезл',
	'Эльфийская палочка',
	'Палочка чернокнижника',
	'Стальной прут',
	'Звездный прут',
	'Сильванель',
	'Рубиновая палочка',
	'Легкий арбалет',
	'Ручной арбалет',
	'Самострел',
	'Тяжелый арбалет',
	'Охотничий арбалет',
	'Скорпион',
	'Двойной арбалет',
	'Кремневый револьвер',
	'Пистолет',
	'Кремневое ружье',
	'Охотничье ружье',
	'Мушкетон',
	'Двустволка',
	'Кенора вер. IV',
	'Мята',
	'Зубровка',
	'Лунный порошок',
	'Целебная мазь',
	'Чертополох',
	'Кровавая лоза',
	'Корень мандрагоры',
	'Теплый чай',
	'Целебное зелье XL',
	'Магическое зелье XL',
	'Целебное зелье',
	'Магическое зелье',	
	'Тоник феникса',
	'Зелье возобновления',
	'Свиток искр',
	'Свиток доспехов',
	'Свиток бури',
	'Песнь доблести',
	'Справочник чудовищ',
	'Фолиант секретов',
	'Восемь триграмм',
	'Комплект фейерверков',
	'Нагрудник',
	'Железная кольчуга',
	'Чешуйчатый доспех',
	'Кольчуга',
	'Нагрудник рыцаря',
	'Латы паладина',
	'До самурая',
	'Кожаный доспех',
	'Гамбезон',
	'Дублет',
	'Шипованный доспех',
	'Доспех из шкуры',
	'Наряд дикаря',
	'Костюм ниндзя',
	'Рубаха',
	'Черная мантия',
	'Мантия друида',
	'Мантия ученика',
	'Туника ученого',
	'Наряд колдуна',
	'Полночное одеяние',
	'Прочный шлем',
	'Шлем воина',
	'Рогатый шлем',
	'Шлем викинга',
	'Шлем рыцаря',
	'Шлем орла',
	'Шлем паладина',
	'Кабуто самурая',
	'Кожанная шапка',
	'Широкополосая шляпа',
	'Шапка с пером',
	'Треуголка',
	'Шелковый капюшон',
	'Пиратская шляпа',
	'Ночной капюшон',
	'Сшитый колпак',
	'Черный капюшон',
	'Лавры друида',
	'Бронзовый обруч',
	'Шляпа чародея',
	'Шляпа колдуна',
	'Шляпа тактика',
	'Железные наручи',
	'Латные рукавицы',
	'Рукавицы воина',
	'Полурукавицы',
	'Рукавицы рыцаря',
	'Рукавицы паладина',
	'Котэ самурая',
	'Кожаные перчатки',
	'Наручи',
	'Перчатки вора',
	'Шипованные перчатки',
	'Эльфийские наручи',
	'Когти дикаря',
	'Перчатки ниндзя',
	'Наголенники',
	'Высокие сапоги',
	'Железные поножи',
	'Усиленные поножи',
	'Солереты рыцаря',
	'Сапоги паладина',
	'Хайдате самурая',
	'Кожаные сапоги',
	'Сандали',
	'Мягкие ботинки',
	'Ботинки вора',
	'Эльфийские ботинки',
	'Поступь дикаря',
	'Таби ниндзя',
	'Деревянный щит',
	'Тяжелый круглый щит',
	'Дубовый щит',
	'Железный щит',
	'Каплевидный щит',
	'Мифриловый аспис',
	'Змеиный страж',
	'Железное кольцо',
	'Двойное кольцо',
	'Рубиновое кольцо',
	'Серебряный перстень',
	'Кольцо дворянина',
	'Перстень рыцаря',
	'Батрахит',
	'Сувенир',
	'Нефритовая подвеска',
	'Железная цепочка',
	'Подвеска с солнцем',
	'Цепь дворянина',
	'Священный символ',
	'Титановый шейный обруч',
	'Сколотый камень',
	'Ущербный камень',
	'Стихия углей',
	'Стихия пламени',
	'Стихия пузырьков',
	'Стихия прилива',
	'Стихия бриза',
	'Стихия ветра',
	'Стихия природы',
	'Стихия дикости',
	'Стихия света',
	'Стихия святости',
	'Стихия испорченности',
	'Стихия нечестивости',
	'Дух барана',
	'Дух волка',
	'Дух быка',
	'Дух орла',
	'Дух гадюки',
	'Дух кошки',
	'Дух носорога',
	'Дух совы',
	'Дух броненосца',
	'Дух ящерицы',
	'Дух лошади',
	'Дух бегемота'
]
var typeNumbers = 28;
var typeNames = [
	'Меч',
	'Топор',
	'Кинжал',
	'Булава',
	'Копье',
	'Лук',
	'Посох',
	'Жезл',
	'Арбалет',
	'Ружье',
	'Травяное лекарство',
	'Зелье',
	'Заклинание',
	'Тяжелый доспех',
	'Лёгкий доспех',
	'Одежда',
	'Шлем',
	'Шапка странника',
	'Шляпа мага',
	'Рукавицы',
	'Наручи',
	'Тяжелая обувь',
	'Лёгкая обувь',
	'Щит',
	'Кольцо',
	'Амулет',
	'Руна',
	'Колдовство']
var i, k;
var line = {
	name: '',
	type: '',
	unlock: '',
	scrolls: 0,
	tier: 0,
	price: 0,
	time_sec: 0,
	merch_xp: 0,
	work_xp: 0,
	worker_1: '',
	lv_worker_1: 0,
	worker_2: '',
	lv_worker_2: 0,
	iron_t1: 0,
	wood_t1: 0,
	leather_t1: 0,
	leaf_t1: 0,
	steel_t2: 0,
	wood_t2: 0,
	leather_t2: 0,
	oil_t2: 0,
	precraft_1: '',
	quality_1: '',
	amount_1: 0,
	precraft_2: '',
	quality_2: '',
	amount_2: 0,
	atk: 0,
	def: 0,
	hp: 0,
	progress_1: '',
	needed_1: 0,
	progress_2: '',
	needed_2: 0,
	progress_3: '',
	needed_3: 0,
	progress_4: '',
	needed_4: 0,
	progress_5: '',
	needed_5: 0,
	star_1: '',
	star_scrolls_1: 0,
	star_2: '',
	star_scrolls_2: 0,
	star_3: '',
	star_scrolls_3: 0,
	enrg_discount: 0,
	enrg_surcharge: 0,
	enrg_suggest: 0,
	enrg_speed: 0
}
var mess = '';

function materials(prec, qual, amou, num){
	if (prec.toString().indexOf("NaN") != 0){
		if(qual.toString().indexOf("NaN") != 0){
			return(`Материал ${num}:
			   ${prec}: ${amou} (${qual})`
			);
		} else {
			return(`Материал ${num}:
			   ${prec}: ${amou}`
			);
		}
	} else {
		return('');
	}
}

function master(worker, lv, num){
	if(worker.toString().indexOf("NaN") != 0){
		return(`
			Работник ${num}:
			   ${worker} (${lv}лв)`
		);
	} else{
		return('');
	}
}

itemsDB.connect();
console.log("DB is connected...");
if(itemsDB.state === 'disconnected'){
	itemsDB.connect();
	console.log("DB is connected again...");
} else {
	console.log("DB is connected firstly");
}


client.on("message", (message) => {
	mess = message.content.toString().toLocaleLowerCase();
	
	for (i = 0; i < itemNumbers; i++){
		if (mess.indexOf(itemNames[i].toLocaleLowerCase()) == 0) {
			k = i + 1;
			if(itemsDB.state === 'disconnected'){
				itemsDB.connect();
				console.log("DB is connected again...");
			}
			itemsDB.query("SELECT * FROM heroku_706f58054ac3d91.full_items WHERE id = ?", k, function(err, line) {
				if(err) {
					message.reply(`Ошибка сервера, мускулы не в порядке`);
				} else {
					if(mess.indexOf("инфо") != -1){

						message.reply(`
							инфо '${line[0].name}'
							Тип предмета: ${line[0].type}
							Тир: ${line[0].tier}
							Способ открытия: ${line[0].unlock}
							Свитки исследования: ${line[0].scrolls}
							Стоимость: ${line[0].price}
							Время создания: ${Math.floor(parseInt(line[0].time_sec) / 3600)}:${Math.floor((parseInt(line[0].time_sec) % 3600) / 60)}:${parseInt(line[0].time_sec) % 60}
							Стоимость/Время: ${(line[0].price/line[0].time_sec).toFixed(2)}
							Опыт создания: ${line[0].work_xp}
							Опыт торговца: ${line[0].merch_xp}
							${master(line[0].worker_1, line[0].lv_worker_1, 1)} ${master(line[0].worker_2, line[0].lv_worker_2, 2)}
							`
						);
					} else if(mess.indexOf("ресурсы") != -1){
						message.reply(`
							ресурсы '${line[0].name}'	
							Железо: ${line[0].iron_t1}
							Дерево: ${line[0].wood_t1}
							Кожа: ${line[0].leather_t1}
							Травы: ${line[0].leaf_t1}
							Сталь: ${line[0].steel_t2}
							Железное дерево: ${line[0].wood_t2}
							Ткань: ${line[0].leather_t2}
							Масло: ${line[0].oil_t2}

							${materials(line[0].precraft_1.toString(), line[0].quality_1.toString(), line[0].amount_1, 1)}
							${materials(line[0].precraft_2.toString(), line[0].quality_2.toString(), line[0].amount_2, 2)}`
						);
					} else if(mess.indexOf("энергия") != -1){
						message.reply(`
						Энергия '${line[0].name}'
						Скидка: +${line[0].enrg_discount}  
						Наценка: -${line[0].enrg_surcharge}  
						Ускорение крафта: -${line[0].enrg_speed} 
						Замена: -${line[0].enrg_suggest} `
						);
					} else if(mess.indexOf("улучшение") != -1){
						message.reply(`
							Улучшение '${line[0].name}'

							Ориентиры:
							  Сделано ${line[0].needed_1}шт: ${line[0].progress_1}
							  Сделано ${line[0].needed_2}шт: ${line[0].progress_2}
							  Сделано ${line[0].needed_3}шт: ${line[0].progress_3}
							  Сделано ${line[0].needed_4}шт: ${line[0].progress_4}
							  Сделано ${line[0].needed_5}шт: ${line[0].progress_5}
							
							Усиление:
							  1 звезда: ${line[0].star_1}, ${line[0].star_scrolls_1} свитков
							  2 звезды: ${line[0].star_2}, ${line[0].star_scrolls_2} свитков
							  3 звезды: ${line[0].star_3}, ${line[0].star_scrolls_3} свитков`
						);
					} else {
						message.reply(`
						Доступные команды
						
						Общая информация о предмете:
						   '${line[0].name} инфо'
						   
						Необходимые ресурсы:
						   '${line[0].name} ресурсы'  
						   
						Затраты энергии:
						   '${line[0].name} энергия'
						   
						Улучшение рецепта:
						   '${line[0].name} улучшение'  `
						);
					}
					
				};
			});
			break;
		}
	}
	for(i = 0; i < typeNumbers - 2; i++){
		if (mess.indexOf(typeNames[i].toLocaleLowerCase()) == 0){
			var tier = 0;
			if (mess.indexOf("т1") != -1){
				tier = 1;
			};
			if (mess.indexOf("т2") != -1){
				tier = 2;
			};
			if (mess.indexOf("т3") != -1){
				tier = 3;
			};
			if (mess.indexOf("т4") != -1){
				tier = 4;
			};
			if (mess.indexOf("т5") != -1){
				tier = 5;
			};
			if (mess.indexOf("т6") != -1){
				tier = 6;
			};
			if (mess.indexOf("т7") != -1){
				tier = 7;
			};
			if(tier != 0){
				if(itemsDB.state === 'disconnected'){
					itemsDB.connect();
					console.log("DB is connected again...");
				}
				itemsDB.query("SELECT name FROM heroku_706f58054ac3d91.full_items WHERE type = ? AND tier = ?", [typeNames[i], tier], function(err, line){					
					message.reply(`
						т${tier} ${typeNames[i].toLocaleLowerCase()}: ${line[0].name.toString()}`
					);					
				});
			}
			break;
		}
	}
});
