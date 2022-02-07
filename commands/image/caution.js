const Discord = require("discord.js")
module.exports = {
  name : "caution",
  description: "Sends a Caution With Your Text",
 run: async (client, message, args) => {
  const sentence = args.join(" ")
    if (!sentence) return message.channel.send('Please specify a query.')
    let embed = new Discord.MessageEmbed()
      .setTitle('Caution!!')
      .setImage(`https://api.popcat.xyz/caution?text=${encodeURIComponent(sentence)}`)
      .setColor('RANDOM')
      .setFooter(' ');
    message.channel.send(embed)
  }
}