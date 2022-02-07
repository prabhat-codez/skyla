const Discord = module.require("discord.js");

module.exports = {
    name: "google",
   description: "Search For results on Google",
  
    run: async(client, message, args) => {
    const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.channel.send("Enter some text to search for")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("Google Search")
    .addField(`You Searched for`, `${text}`)
    .addField(`Results`, `[Click Here](https://www.google.com/search?q=${search})`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/874548198910332949/926375907155902494/google.png`)
    .setColor("RANDOM");
    message.channel.send(embed);
    }
}