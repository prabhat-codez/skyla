
const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'coolrate',
    description: 'Tells how cool a person is!',

    run: async(client, message, args) => {
        let user = message.mentions.users.first() || message.author;
        const rate = Math.floor(Math.random() * (100 - 1 + 1) + 1);

        if(user == message.author) {
            const Embed1 = new MessageEmbed()
            .setTitle('Your Cool Rate')
            .setDescription(`You are **${rate}**% cool. `)
            .setFooter(`${message.author.tag}`,
            message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(Embed1)

        } else {
            const Embed2 = new MessageEmbed()
            .setTitle(`${user.username}'s Coolrate`)
            .setDescription(`${user} is ${rate}% cool.  `)
            .setColor('#00000')
            .setFooter(`${user.tag}`,
            user.displayAvatarURL({ dynamic: true })
            )
            message.channel.send(Embed2)
        }
    }
} 