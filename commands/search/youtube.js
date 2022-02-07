const Discord = module.require("discord.js");

module.exports = {
    name: "youtube",
    aliases: "yt",
   description: "Search For results on YouTube",
  
    run: async(client, message, args) => {
    const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.channel.send("Enter some text to search for")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("YouTube Search")
    .addField(`You Searched for`, `${text}`)
    .addField(`Results`, `[Click Here](https://www.youtube.com/results?search_query=${search})`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/874548198910332949/926376944860270602/youtube.jpg`)
    .setColor("RANDOM");
    message.channel.send(embed);
    }
}