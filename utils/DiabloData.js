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
module.exports = { getData }