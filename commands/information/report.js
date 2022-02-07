const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
  name: 'report',
  aliases: ['bug'],
  description: 'report a bug ',
  useage: ';;report <bug>',
  /** 
   * @param {Client} client 
   * @param {Message} message 
   * @param {String[]} args 
   */
  run: async (client, message, args) => {
    const owner = client.users.cache.get('806924400494248006');
    

    
    const query = args.join(" ");
    if(!query) return message.reply('please specify a bug')


    const reportembed = new MessageEmbed()
      .setTitle('NEW BUG!')
      .addField('Author', message.author.toString())
      .addField('Server', message.guild.name)
      .addField('BUG', query) 
      .setTimestamp();
   owner.send(reportembed);   
  }
}  