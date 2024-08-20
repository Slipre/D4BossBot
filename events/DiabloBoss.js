const { getData } = require('../utils/DiabloData');
const { TS, Minus15 } = require('../utils/times');
require('dotenv').config();
module.exports = {
	run: async (Diablo) => {
		try {
			const dane = await getData();
			console.log('[D4] Pobrano dane.');
			Diablo.sendMessage(process.env.MyPriv, "Działam..", { parse_mode: 'Markdown' });
			const ts_now = TS();

			// 15 min przed powiadomienie
			for (const bosik of dane.world_boss) {
				let delay = Minus15(bosik.timestamp) - ts_now;
				if(delay < 1) continue;
				//tsy w sekundach
				let timeout_ID = setTimeout(() => {
					let text = `🔥*BOSS Alert!*🔥\n_${bosik.boss}_\nWill arrive in *15* minutes!`;
					Diablo.sendMessage(process.env.PublicChannel, text, { parse_mode: 'Markdown' });
				}, delay * 1000);
				Diablo.cds.push(timeout_ID);
			}

			// Powiadomienie że teraz się to dzieje
			for (const bosik of dane.world_boss) {
				// tsy w sekundach				
				let timeout_ID = setTimeout(() => {	
					let text = `🔥*BOSS Alert!*🔥\n_${bosik.boss}_\nFighting!`;
					Diablo.sendMessage(process.env.PublicChannel, text, { parse_mode: 'Markdown', disable_notification: true });
				}, (bosik.timestamp - ts_now) * 1000);
				Diablo.cds.push(timeout_ID);
			}
			return;
		} catch (err) {
			console.error('[D4] Nie pobrano danych.');
			console.error(err);
			return;
		}
	}
}