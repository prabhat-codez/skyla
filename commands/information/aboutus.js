const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'dev',
    aliases: ['bhagwan'],
    description: 'about my owners',
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
                .setTitle("About us!")
                .addField("**DEVELOPERs**", ` 
                <@806924400494248006>,<@818039504581296169> `)
                .addField(" <:dot_877959363388641300:908686311060307968> Prabhat#5890" ,`Knows JavaScript, HTML,CSS and Python(little bit)`)
                .addField(" <:dot_877959363388641300:908686311060307968> Kabeer#2606 " , `Knows JavaScript and Website Designing`)
                .addField(" <a:arrow:908667370338385970> **Invite Me** <:discord_verified:908670791015624704> ", `[Click Here to Invite Me](https://discord.com/api/oauth2/authorize?client_id=870868241457774652&permissions=139557076470&scope=bot%20applications.commands)`)
              .addField(" <a:arrow:908667370338385970> **SUPPORT  SERVER**", `[Click here to join our Support Server](https://discord.com/invite/9dbcQVE4Uc)`)
                .setFooter(`Requested by ${message.author.tag}`, client.user.displayAvatarURL())
                .setTimestamp()


        )

    }
}