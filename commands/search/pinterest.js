
const Discord = module.require("discord.js");

module.exports = {
    name: "pinterest",
   description: "Search For results on Pinterest",
  
    run: async(client, message, args) => {
    const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.channel.send("Enter some text to search for")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("Pinterest Search")
    .addField(`You Searched for`, `${text}`)
    .addField(`Results`, `[Click Here](https://www.pinterest.com/search/pins/?q=${search})`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/874548198910332949/926382152436842546/pinterest.png`)
    .setColor("RANDOM");
    message.channel.send(embed);
    }
}