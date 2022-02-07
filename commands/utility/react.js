const { Client, Message, MessageEmbed } = require('discord.js');
module.exports = {
  name: "react",
  description:
    "Emoji Reaction with ID Message and it must be the name of the emoji, not mentioning emoji",
  run: async (client, message, args) => {
    message.delete();
    if (isNaN(args[1])) {
      return message.channel.send(
        "Please provide the message id of the user or bot"
      );
    }
    const reactionEmoji = message.guild.emojis.cache.find(
      emoji => emoji.name === args[0]
    );
    if (!reactionEmoji) {
      return message.channel.send(
        "Please name the emojis, don't mention the emojis and Default Emoji"
      );
    }
    if (isNaN(reactionEmoji)) {
      return message.channel.send(
        "Please name the emojis, don't mention the emojis and Default Emoji"
      );
    }
    const m = await message.channel.messages.fetch(args[1]);
    const filter1 = (reaction, user) =>
      reaction.emoji.name === args[0] && user.id === message.author.id;
    await m.react(reactionEmoji);

    const collector1 = await m.createReactionCollector(filter1);
    collector1.on("collect", async (reaction, user) => {
      reaction.users.remove(client.user.id); // <<== This removes also the bot reaction
    });
  }
};