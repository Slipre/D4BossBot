require('dotenv').config();
async function getData() {
	try {
		const res = await fetch(process.env.API);
		if(!res.ok) { console.error(`[D4_ApiError]: ${res.status}`)}
		const data = await res.json();
		console.log('[D4] Data downloaded.');
		return data;
	} catch (err) {
		console.error('[D4] No data downloaded', err);
	}
}
module.exports = { getData }