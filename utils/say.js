function say(text) {
	return console.log(getWhen() + ">> " + text);
}
function getWhen(){
	return "(" + getDate() + " - " + getTime() + ") "
}
function getDate(){
	const date = new Date();
	return addZero(date.getDate()) + "-" + addZero(date.getMonth()+1)  + "-" + date.getFullYear().toString().slice(-2);
}
function getTime(){
	const date = new Date();
	return addZero(date.getHours()) + ":" + addZero(date.getMinutes()) + ":" + addZero(date.getSeconds());
}
function addZero(k){
	if (k < 10) k = "0" + k;
	return k;
}
module.exports = { say }