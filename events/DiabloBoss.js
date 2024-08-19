const { getData, translate } = require('../utils/DiabloData');
const { TS, Minus15 } = require('../utils/times');
require('dotenv').config();
module.exports = {
	run: async (Diablo) => {
		try {
			const dane = await getData();
			console.log('Pobrano dane D4');
			Diablo.sendMessage(process.env.MyPriv, "Działam..", { parse_mode: 'Markdown' });
			const ts_now = TS();

			// // 15 min przed powiadomienie
			for (const bosik of dane.world_boss) {
				let delay = Minus15(bosik.timestamp) - ts_now;
				if(delay < 1) continue;
				//tsy w sekundach
				console.log(`bosik.timestamp: ${bosik.timestamp}`);
				console.log(`teraz.timestamp: ${ts_now}`);
				console.log(`delay: ${delay}`);	
				console.log(`delay ms: ${delay * 1000}`);	
				console.log('=====\n');
				
					setTimeout(() => {
						let text = `🔥*Diabolo Alert!*🔥\n_${translate(bosik.boss)}_\nPrzybędzie za *15* minut!`;
						Diablo.sendMessage(process.env.MyPriv, text, { parse_mode: 'Markdown' });
					}, delay * 1000);
			}

			// Powiadomienie że teraz się to dzieje
			for (const bosik of dane.world_boss) {
				// tsy w sekundach
				console.log(`bosik.timestamp: ${bosik.timestamp}`);
				console.log(`teraz timestamp: ${ts_now}`);
				
				// delay 2 typy
				console.log(`delay: ${bosik.timestamp - ts_now}`);
				console.log(`delay ms: ${(bosik.timestamp - ts_now) * 1000}`);
				console.log('===\n');
				
					setTimeout(() => {	
						let text = `🔥*Diabolo Alert!*🔥\n_${translate(bosik.boss)}_\nWalczy!`;
						Diablo.sendMessage(process.env.MyPriv, text, { parse_mode: 'Markdown' });
					}, (bosik.timestamp - ts_now) * 1000);
			}
			return;
		} catch (err) {
			console.error('nie pobrano danych');
			console.error(err);
			return;
		}
	}
}