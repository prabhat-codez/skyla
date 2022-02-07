const { Client, Message, MessageEmbed } = require('discord.js');
const ms = require('ms')
const fetch = require('node-fetch');

module.exports = {
	name: 'timeout',
	aliases: [],
	run: async (client, message, args) => {
     /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
   
		const time = args.slice(1).join(' ');
    
    if(!message.member.hasPermission("MANAGE_SERVER")) {
      return message.channel.send('Sorry you need permission to timeout someone');
    }
		if(!time) return message.channel.send('Please specify the time!');

		const user = message.mentions.users.first();
		const milliseconds = ms(time);

		if(!user) return message.channel.send('no user specified');
		if(!milliseconds || milliseconds < 10000 || milliseconds > 2419200000) {
			return message.channel.send('invalid time or it isn\'t 10s-28d');
		}
     if(user.id === 
     message.author.id) {
      return message.channel.send
      ("Imagine timing out yourself ! Well you are doing it. So my system is recognizing you as a mad and ignoring the command lol.");
      }


		const iosTime = new Date(Date.now() + milliseconds).toISOString();

		await fetch(`https://discord.com/api/guilds/${message.guild.id}/members/${user.id}`, {
			method: 'PATCH',
			body: JSON.stringify({ communication_disabled_until: iosTime }),
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bot ${client.token}`,
			},
		});
		message.channel.send(`${user.username} has been timed out for \`${time}\`!`);
	},
};