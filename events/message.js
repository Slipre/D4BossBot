module.exports = {
	run: async (Diablo, msg) => {
		try {
			if(Diablo.cmds.has(msg.text)) Diablo.cmds.get(msg.text).execute(Diablo, msg);
			return;
		} catch (err) { console.error(err); return; }
	}
}