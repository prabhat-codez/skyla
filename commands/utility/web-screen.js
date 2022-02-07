const Discord = require("discord.js")
module.exports = {
  name : "web-screen",
 run: async (client, message, args) => {
  const sentence = args.join(" ")
    if (!sentence) return message.channel.send('Please specify a url.')
    let embed = new Discord.MessageEmbed()
      .setTitle('Website Screenshot')
      .setImage(`https://api.popcat.xyz/screenshot?url=${encodeURIComponent(sentence)}`)
      .setColor('RANDOM')
      .setFooter(' ');
    message.channel.send(embed)
  }
  }