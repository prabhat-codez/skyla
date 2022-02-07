const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const r = (e, r) => { return e.repeat(r) }

module.exports = {
  name: "sus",
  description: "Sends a sus embed",
  
   run: async (client, message, args) => {
   let embed = new Discord.MessageEmbed()
  .setTitle(`Sussy Baka`)
  .setDescription(`${ 
r('⬛', 17) +'\n'+ 
r('⬛',5) + r('⬜',3) + r('⬛',1) + r('⬜',1) +  r('⬛',1) +  r('⬜',1) +  r('⬛',1) +  r('⬜',3) +  r('⬛',1) +'\n'+ 
r('⬛', 1) + r('🟥', 3) + r('⬛', 1) + r('⬜', 1) + r('⬛', 3) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 3) +'\n'+ 
r('⬛', 1) + r('🟥', 1) + r('🟦', 2) + r('⬛', 1) + r('⬜', 3) + r('⬛', 1) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 1) + r('⬜', 3) + r('⬛', 1) + '\n' + 
r('⬛', 1) + r('🟥', 3) + r('⬛', 3) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 1) + r('⬜', 1) + r('⬛', 3) + r('⬜', 1) + r('⬛', 1) + '\n' + 
r('⬛',1) + r('🟥', 1) + r('⬛',1) + r('🟥', 1) + r('⬛',1) + r('⬜',3) + r('⬛',1) + r('⬜',3)+ r('⬛',1) + r('⬜',3) + r('⬛',1) +'\n'+ 
r('⬛', 17)
}`)
   message.channel.send(embed);

  }
}