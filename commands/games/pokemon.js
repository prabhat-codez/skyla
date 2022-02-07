const { MessageEmbed } = require("discord.js");
const { Spawn } = require("pokecord");

module.exports = {
  name: "pokemon",
 
  description: "Guess the pokemon!",
  usage: "m!pokemon",
  run: async (client, message, args) => {

    const pokemon = await Spawn().catch(e => {});
    if (!pokemon) return message.channel.send("OOP! WHAT IS HAPPENING? SOMETHING WENT WRONG");
    const filter = m => m.author.id === message.author.id;

    const embed = new MessageEmbed()
        .setAuthor("Guess The Pokémon")
        .setColor("#E15D44")
        .setImage(pokemon.imageURL);
    
    await message.channel.send(embed);

    message.channel.awaitMessages(filter, {
        max: 1,
        error: ["time"],
        time: 10000
    })
    .then(collected => {
        const m = collected.first();
        if (!m.content || m.content.toLowerCase() !== pokemon.name.toLowerCase()) return message.channel.send(`<a:wrong:908686422184198184> Incorrect guess! The answer was **${pokemon.name}**.`);
        return message.channel.send(`<a:green_yes:908667433714343967> **CORRECT ANSWER!**`);
    })
    .catch(() => {
        message.channel.send(`<a:wrong:908686422184198184> You did not answer in time. The pokemon name is **${pokemon.name}**!`);
    });

}
};