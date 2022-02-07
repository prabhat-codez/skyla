const discord = require("discord.js");
const random = require("easyfunjs").Img

module.exports = {
  name: "laugh",

  description: "laugh",
  run: async (client, message, args) => {
    

    
    let embed = new discord.MessageEmbed()
    .setImage("https://c.tenor.com/fqRNsILmXHQAAAAM/anime-girl.gif")
    .setColor("RANDOM")
    .setFooter(`${message.author.username} laughs`)
    .setTimestamp()
    
    message.channel.send(embed);
  }
};