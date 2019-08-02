
var mysql = require("mysql");

var itemsDB = mysql.createConnection({
	host: 'us-cdbr-iron-east-02.cleardb.net',
	user: 'beba5a729a48ae',
	password: '6ce526cb',
	database: 'heroku_706f58054ac3d91'
});


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
			itemsDB.query("SELECT * FROM heroku_706f58054ac3d91.full_items WHERE id = ?", 2, function(err, line) {
				if(err) {
					console.log("error with connect")
				} else {
					console.log(line[0].name);
				}
			});
					
