const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'message',
    aliases: ['sandesh'],
    description: '',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {

        message.channel.send(
            new MessageEmbed()
                .setColor('BLUE')
                .setAuthor(message.author.tag)
             
                .setTitle("Messages!")
                .setDescription( ` <@${message.author.id}> here is a message from devs `)
          
                .addField(`Hi there its me [Prabhat#5890] please support **Skyla** by inviting using the command **s!help** `)
                
                .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
                .setTimestamp()


        )

    }
}
// let me fix it
//set author
//Support me by inviting me.It means a lot to the developers and us
