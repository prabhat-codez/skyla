
const Discord = module.require("discord.js");

module.exports = {
    name: "spotify",
   description: "Search For results on spotify",
  
    run: async(client, message, args) => {
    const text = args.join(' ');
    const search = args.join('+');
    if (!text) {
    return message.channel.send("Enter some text to search for")
    }
    const embed = new Discord.MessageEmbed()
    .setTitle("Spotify Search")
    .addField(`You Searched for`, `${text}`)
    .addField(`Results`, `[Click Here](https://open.spotify.com/search/${search})`)
    .setThumbnail(`https://cdn.discordapp.com/attachments/874548198910332949/926398380148662304/spotify_1.png`)
    .setColor("RANDOM");
    message.channel.send(embed);
    }
}