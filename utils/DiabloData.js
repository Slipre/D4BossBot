const names = new Map();
names.set('Ashava', 'Adriana Zaraźliwa');
names.set('Avarice', 'Skąpstwo. Ukaszem przeklęte');
names.set('Wandering Death', 'Wędrujący Przem');

async function getData() {
	try {
		const res = await fetch('https://helltides.com/api/schedule');
		if(!res.ok) { console.error(`[DD_ApiError]: ${res.status}`)}
		const data = await res.json();
		return data;
	} catch (err) {
		console.error('DD_Error', err);
	}
}
function translate(boss) {
	return names.get(boss);
}
module.exports = { getData, translate }