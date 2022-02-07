const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "sudo",
  description: "Make someone say what you want with a webhook.",
  
   run: async (client, message, args) => {
    
    
    

      if (!args[1]) return message.reply('Please provide a message to send \n ```\n usages: s!sudo [mention] [text]```')
        const member = message.mentions.members.first()
 if (!member) return message.reply('Please tag a user')
 message.channel.createWebhook(member.user.username, {
     avatar: member.user.displayAvatarURL({dynamic: true})
 }).then(webhook => {
     webhook.send(args.slice(1).join(' '))
     setTimeout(() => {
         webhook.delete()        
     }, 3000)
  })
  
    
    
  }
}