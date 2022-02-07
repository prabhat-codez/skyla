const Discord = require("discord.js");
const Canvas = require("canvas");

module.exports = {
name: "simpcard",
 run: async(client, message, args) => {
    const member = message.mentions.members.first() || message.member;
	   if(!member) return;
    const avatar = await Canvas.loadImage(
      member.user.displayAvatarURL({ format: "jpg" })
    );
	 let background = await Canvas.loadImage(
"https://cdn.discordapp.com/attachments/881090885440385074/936589045847453776/SimpCard.png"
	 )

    const canvas = Canvas.createCanvas(1280, 720);
    const ctx = canvas.getContext(`2d`);

    ctx.drawImage(background, 0, 0, 1280, 720);
	  ctx.drawImage(avatar, 100, 75, 320, 360)
	 	ctx.font = '45px "Amaranth"'
	  ctx.fillText(`${member.user.username}`, 230, 505)
ctx.fillText(`${message.createdAt.toLocaleDateString()}`, 75, 620)

    const attachment = new Discord.MessageAttachment(
      canvas.toBuffer(),
      "simpcard.jpg"
    );
    message.channel.send({ content: " If your username contains any non-alphabetical charachters, it won't show the username", files: [attachment] });
  }
}