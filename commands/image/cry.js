const discord = require("discord.js");
const random = require("easyfunjs").Img

module.exports = {
  name: "cry",

  description: "cry",
  run: async (client, message, args) => {
    
    let target = message.mentions.members.first()

   
  
    
    let embed = new discord.MessageEmbed()
    .setImage("https://i.imgur.com/1kgcgPG.gif")
    .setColor("RANDOM")
    .setFooter(`${message.author.username} cries`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};