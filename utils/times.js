// Timestamp w sekundach
function TS() {
	let ts = new Date();
	return Math.floor(ts/1000);
}

// Funkcja odejmująca 30 minut (1800 sekund)
function Minus30(ts) { return ts - 1800; }

// Funkcja odejmująca 15 minut (900 sekund)
function Minus15(ts) { return ts - 900; }

// Funkcja odejmująca 10 minut (600 sekund)
function Minus10(ts) { return ts - 600; }

// Funkcja odejmująca 5 minut (300 sekund)
function Minus5(ts) { return ts - 300; }

// Funkcja odejmująca 1 minutę (60 sekund)
function Minus1(ts) { return ts - 60; }

module.exports = { TS, Minus30, Minus15, Minus10, Minus5, Minus1 }