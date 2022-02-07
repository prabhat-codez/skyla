const Discord = require("discord.js")
module.exports = {
  name : "cti",
  description: "Custom CTI Text",
 run: async (client, message, args) => {
  const sentence = args.join(" ")
    if (!sentence) return message.channel.send('Please specify a query.')
    let embed = new Discord.MessageEmbed()
      .setTitle('CTI')
      .setImage(`https://cryptons-api.herokuapp.com/api/v1/cti?code=${encodeURIComponent(sentence)}`)
      .setColor('RANDOM')
      .setFooter('Made By Prabhat');
    message.channel.send(embed)
  }
  }