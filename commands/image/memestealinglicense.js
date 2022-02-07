const Discord = require("discord.js");
const Canvas = require("canvas");

module.exports = {
name: "memestealinglicense",
description: "Steal a meme",
emoji: " ",
 run: async(client, message, args) => {
    const member = message.mentions.members.first() || message.member
	   if(!member) return;
const avatar = await Canvas.loadImage( member.user.displayAvatarURL({ format: "jpg"}));
	 
let back = await Canvas.loadImage( "https://cdn.discordapp.com/attachments/847044835412148234/937107418595340378/memestealinglicense.png");

    const canvas = Canvas.createCanvas(775, 575);
    const ctx = canvas.getContext(`2d`);

    ctx.font = '65px "Keripik"'
    ctx.drawImage(back, 0, 0, 775, 575);
	ctx.drawImage(avatar, 25, 75, 230, 280)
    ctx.fillText(`${member.user.username}`, 415, 175);

    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "license.jpg"
    );
    message.channel.send({ content: "If your username contains any non-alphabetical charachters, it won't show the username", files: [attachment] });
  }
}