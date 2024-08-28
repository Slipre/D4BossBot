const { getData } = require('../utils/DiabloData');
const Times = require('../utils/times');
require('dotenv').config();
module.exports = {
	run: async (Diablo) => {
		try {
			const dane = await getData();
			const ts_now = Times.TS();
			for (const bosik of dane.world_boss) {
				let [delay30, delay15, delay10, delay5, delay1, delayToNow] = [
					Times.Minus30(bosik.timestamp) - ts_now, Times.Minus15(bosik.timestamp) - ts_now,
					Times.Minus10(bosik.timestamp) - ts_now, Times.Minus5(bosik.timestamp) - ts_now,
					Times.Minus1(bosik.timestamp) - ts_now, bosik.timestamp - ts_now,
				];
				let timeout30_ID = setTimeout(() => {
					let text = `🔥*BOSS Alert!*🔥\n_${bosik.boss}_\nWill arrive in *30* minutes!`;
					Diablo.emit('sendToPublic', text);
					Diablo.emit('sendToPrivate', text, '30min');
				}, delay30 * 1000);
				Diablo.touts.push(timeout30_ID);
				let timeout15_ID = setTimeout(() => {
					let text = `🔥*BOSS Alert!*🔥\n_${bosik.boss}_\nWill arrive in *15* minutes!`;
					Diablo.emit('sendToPrivate', text, '15min');
				}, delay15 * 1000);
				Diablo.touts.push(timeout15_ID);
				let timeout10_ID = setTimeout(() => {
					let text = `🔥*BOSS Alert!*🔥\n_${bosik.boss}_\nWill arrive in *10* minutes!`;
					Diablo.emit('sendToPublic', text);
					Diablo.emit('sendToPrivate', text, '10min');
				}, delay10 * 1000);
				Diablo.touts.push(timeout10_ID);
				let timeout5_ID = setTimeout(() => {
					let text = `🔥*BOSS Alert!*🔥\n_${bosik.boss}_\nWill arrive in *5* minutes!`;
					Diablo.emit('sendToPublic', text);
					Diablo.emit('sendToPrivate', text, '5min');
				}, delay5 * 1000);
				Diablo.touts.push(timeout5_ID);
				let timeout1_ID = setTimeout(() => {
					let text = `🔥*BOSS Alert!*🔥\n_${bosik.boss}_\nWill arrive in *1* minutes!`;
					Diablo.emit('sendToPrivate', text, '1min');
				}, delay1 * 1000);
				Diablo.touts.push(timeout1_ID);
				let timeout_ID = setTimeout(() => {
					let text = `🔥*BOSS Alert!*🔥\n_${bosik.boss}_\nFighting!`;
					Diablo.emit('sendToPublic', text);
					Diablo.emit('sendToPrivate', text, 'about time');
				}, delayToNow * 1000);
				Diablo.touts.push(timeout_ID);
			}
			return;
		} catch (err) {
			console.error('[D4] No timeouts have been set.');
			console.error(err);
			return;
		}
	}
}