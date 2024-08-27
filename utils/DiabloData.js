require('dotenv').config();
async function getData() {
	try {
		const res = await fetch(process.env.API);
		if(!res.ok) { console.error(`[D4_ApiError]: ${res.status}`)}
		const data = await res.json();
		return data;
	} catch (err) {
		console.error('DD_Error', err);
	}
}
module.exports = { getData }