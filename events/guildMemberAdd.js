const { Events, EmbedBuilder } = require('discord.js');
const chalk = require('chalk');

module.exports = {
	name: Events.GuildMemberAdd,
	execute(member) {
		console.log(chalk.blue(`=> ${member.user.username} (${member.id}) has joined the server.`));
		function timeDiff(time) {
			const today = Date.now();
			const diff = Math.ceil((today - time) / (1000 * 3600 * 24));
			return diff;
		}
		const welcome = new EmbedBuilder()
			.setTitle(member.displayName)
			.setURL(member.user.avatarURL())
			.setAuthor({ name: member.user.tag, iconURL: member.user.avatarURL({ dynamic : true }), url: member.user.avatarURL() })
			.setThumbnail(member.avatarURL({ dynamic : true }) || member.user.avatarURL({ dynamic : true }))
			.addFields(
				{ name: 'Account Created', value: `${member.user.createdAt.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} (${timeDiff(member.user.createdAt)} days ago)`, inline: true },
			)
			.setTimestamp();
		if (member.displayHexColor === '#000000') {
			welcome.setColor('FF0066');
		} else {
			welcome.setColor(member.displayHexColor);
		}
		member.guild.systemChannel.send({ embeds: [welcome] });
	},
};