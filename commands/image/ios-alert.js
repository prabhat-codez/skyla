const Discord = require("discord.js")
module.exports = {
  name : "ios-alert",
  description: "Make any alert on the iOS Lock Screen.",
 run: async (client, message, args) => {
  const sentence = args.join(" ")
    if (!sentence) return message.channel.send('Please specify an alert.')
    let embed = new Discord.MessageEmbed()
      .setTitle('iOS Alert')
      .setImage(`https://api.popcat.xyz/alert?text=${encodeURIComponent(sentence)}`)
      .setColor('RANDOM')
      .setFooter(' ');
    message.channel.send(embed)
  }
  }