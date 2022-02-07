const { Client, Message, MessageEmbed } = require('discord.js');
const { afk } = require("../../utils/etc/afk")

module.exports = {
    name: 'afk',
    description: 'An AFK command!',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        const reason = args.join(" ") || 'No reason!';

        afk.set(message.author.id, [Date.now(), reason]);

        
            message.reply(`i have setted your afk reason:- ${reason}`)

    }
}