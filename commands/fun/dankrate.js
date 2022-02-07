
const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'dankrate',
    description: 'Tells how dank a person is!',

    run: async(client, message, args) => {
        let user = message.mentions.users.first() || message.author;
        const rate = Math.floor(Math.random() * (100 - 1 + 1) + 1);

        if(user == message.author) {
            const Embed1 = new MessageEmbed()
            .setTitle('Your Dank Rate')
            .setDescription(`You are **${rate}**% dank. `)
            .setFooter(`${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(Embed1)

        } else {
            const Embed2 = new MessageEmbed()
            .setTitle(`${user.username}'s dankrate`)
            .setDescription(`${user} is ${rate}% dank.  `)
            .setColor('#00000')
            .setFooter(`${user.tag}`,
            user.displayAvatarURL({ dynamic: true })
            )
            message.channel.send(Embed2)
        }
    }
} 