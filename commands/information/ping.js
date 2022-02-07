const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'ping',
  aliases: ['api'],
  description: 'Get Bot Ping..',
  useage: 'ping',
  /** 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  run: async (client, message, args) => {

    let ping = new MessageEmbed()
      .setColor('RED')
      .setAuthor(message.author.tag)
      .setTitle(`🎈 Ping : ${client.ws.ping}ms`)
      .setFooter("Made by Prabhat#5890")
    message.channel.send(ping)
  }
  
}