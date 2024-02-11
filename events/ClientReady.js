const { Events } = require('discord.js');
const chalk = require('chalk');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute() {
		const d = new Date();
		const time = Date.now();
		console.log(chalk.blue(`Ready at ${d.toLocaleString(time)}`));
	},
};