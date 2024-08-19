// Timestamp w sekundach
function TS() {
	let ts = new Date();
	return Math.floor(ts/1000);
}

// Timestamp w sekundach cofnięty o 15 minut
function Minus15(ts) {
	let ts15back = ts - 900;
	return ts15back;
}

module.exports = { TS, Minus15 }