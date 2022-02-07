const Discord = require('discord.js');

const DIG = require("discord-image-generation");

module.exports = {
      name: "trigger",
    description: "Converts a user's avatar in triggered format !!",
    aliases: ["triggered"],

    run: async (client, message, args) => {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        if(!user)
        return message.reply(`Provide a valid user !!`)

        const avatar = user.user.displayAvatarURL({ dynamic: false, format: 'png', size: 1024 });

        let img = await new DIG.Triggered().getImage(avatar);

        let attach = new Discord.MessageAttachment(img, "triggered.gif");

        message.channel.send(attach)
    }
}