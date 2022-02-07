const { MessageEmbed } = require("discord.js");
const moment = require('moment')
const yesno = {
  true: "Yes",
  false: "No"
}

module.exports = {
  name: "emoji",
  description: "Get emoji information",
  aliases: ["emoji"],
  category: "MEMBERS",
  usage: "<emoji>",
  run: async (client, message, args) => {
    const regex = args[0].replace(/^<a?:\w+:(\d+)>$/, "$1")
    const emoji = message.guild.emojis.cache.find((emoji) => emoji.name === args.join(" ") || emoji.id === regex)
    if (!emoji) return message.reply("That emoji is not in the server!")

    const embed = new MessageEmbed()
      .setTitle("EMOJI INFORMATION")
      .addField("Name", `${emoji.name}`, true)
      .addField("ID", `${emoji.id}`, true)
      .addField("Animated", `${yesno[emoji.animated]}`, true)
      .addField("Added By", `${(await emoji.fetchAuthor()).tag}`, true)
      .addField("Added At", `${moment(emoji.createdTimestamp).format("LLL")}`, true)
      .addField("Emoji URL", `[Click Here](${emoji.url})`, true)
      .setColor("RANDOM")
      .setThumbnail(emoji.url)
    message.channel.send(embed)
  },
}