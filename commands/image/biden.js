const Discord = require("discord.js")
module.exports = {
  name : "biden",
  description: "Make Biden Tweet Anything",
 run: async (client, message, args) => {
  const sentence = args.join(" ")
    if (!sentence) return message.channel.send('Please specify a query.')
    let embed = new Discord.MessageEmbed()
      .setTitle('Joe Biden')
      .setImage(`https://api.popcat.xyz/biden?text=${encodeURIComponent(sentence)}`)
      .setColor('RANDOM')
      .setFooter('Made By Prabhat');
    message.channel.send(embed)
  }
  }