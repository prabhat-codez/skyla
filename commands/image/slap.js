const discord = require("discord.js");
const random = require("easyfunjs").Img


module.exports = {
  name: "slap",
  aliases: ["batmanslap", "slp"],

  description: "Return A Slap Image!",
  usage: "Slap <Mention Or ID> | <Text>",
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first()

    if(!target){
      return message.reply("please mention someone to slap!")
    }
    
    let data = await random.getAnimeImgURL("slap");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} slaps ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};
