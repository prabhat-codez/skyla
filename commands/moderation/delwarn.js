const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db')

module.exports = {
    name: 'delwarns',
    aliases: ['resetwarns'],
    description: "Reset warnings of mentioned person",
    usage: "rwarns <@user>",

    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        if (!message.member.permissions.has("ADMINISTRATOR")) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.author.tag)
                    .setDescription("**You Dont Have The Permissions To Warn Users! - [ADMINISTRATOR]**")
                    .setFooter("Made by Prabhat#5890")
            )
        }

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

        if (!user) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.author.tag)
                    .setDescription("**Please Mention the person to who you want to Show Warns - warns @mention **")
                    .setFooter("Made by Prabhat#5890")
            )
        }

        if (message.mentions.users.first().bot) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.author.tag)
                    .setDescription("**You can not Check The warns of bots**")
                    .setFooter("Made by Prabhat#5890")
            )
        }

        if (message.author.id === user.id) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.author.tag)
                    .setDescription("**You are not allowed to reset your warnings**")
                    .setFooter("CMade by Prabhat#5890")
            )
        }

        const reason = args.slice(1).join(" ");

        // database

        let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

        if (warnings === null) {
            return message.channel.send(
                new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.author.tag)
                    .setDescription(`**${user.user.tag}** do not have any warnings`)
                    .setFooter("Made by Prabhat#5890")
            )
        }

        db.delete(`warnings_${message.guild.id}_${user.id}`);

        user.send(
            new MessageEmbed()
                .setColor("RED")
                .setAuthor(message.author.tag)
                .setDescription(`** Your all warnings are reseted by ${message.author.username} from ${message.guild.name} **`)
                .setFooter("Made by Prabhat#5890")
        );
        await message.channel.send(
            new MessageEmbed()
                .setColor("RED")
                .setAuthor(message.author.tag)
                .setDescription(`Reseted all warnings of ${user.user.tag} Hehehehe`)
                .setFooter("Made by Prabhat#5890")

        );

    }
}