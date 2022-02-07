const Discord = require("discord.js");
let nitros = [
  'https://v.gd/9F5tH0',
  'https://v.gd/9F5tH0',
  'https://v.gd/9F5tH0',
  'https://v.gd/9F5tH0',
  'https://v.gd/9F5tH0',
  'https://v.gd/9F5tH0',
  'https://v.gd/9F5tH0',
  'https://v.gd/9F5tH0',
  'https://v.gd/9F5tH0',
  'https://v.gd/9F5tH0'
];
let links = [
'https://discord.gift/sPEBcsrSqdXkCY9q',
'https://discord.gift/sPEBcsrSqdXkCY9q',
'https://discord.gift/sPEBcsrSqdXkCY9q',
'https://discord.gift/QVzht4m54VSG5HB3',
'https://discord.gift/Zj3vncygC9E94Z2n',
'https://discord.gift/EXyM4VYZpFgSHpuc',
'https://discord.gift/PnNhsQqQgxgMANFS',
'https://discord.gift/HFKqgJtrH54SFdRB',
'https://discord.gift/J4yj9udFE20HEfy6',
'https://discord.gift/mscyFmYHSAn82stx',
'https://discord.gift/3ZzAymHBtjJRVZfv'
];
module.exports = {
  name: "free-nitro",
  aliases: ["freenitro"],
  description: "Gives free nitro ||(prank)||",
   run: async(client, message, args) => {
    const nitro = nitros[Math.floor(Math.random() * nitros.length)];
    const link = links[Math.floor(Math.random() * links.length)];

  let embed = new Discord.MessageEmbed()
  .setTitle(`**${message.author.username}**, Here is your free **Nitro**`)
  .setDescription(`||[${link}](${nitro})||`)
  .setImage("https://cdn.discordapp.com/attachments/874548198910332949/901342474872700928/nitro-dodik.gif");
   message.channel.send(embed);
    

  }
}