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

function ToMidnight() {
    const czas = new Date();
    // Oblicz opóźnienie do najbliższej północy
    const nextMidnight = new Date(czas.getFullYear(), czas.getMonth(), czas.getDate() + 1);
    return delay = nextMidnight - czas;
}

module.exports = { TS, Minus15, ToMidnight }