const { Client, Message, MessageEmbed, MessageAttachment } = require('discord.js');

module.exports = {
  name: 'captcha',
  description: 'Returns a captcha',

  run: async(client, message, args) => {
    let oops = await message.channel.send("**Please Wait...**");

const text = args.join(' ');
    if (!text) return message.reply('Please provide me a text!');

let image = `https://cryptons-api.herokuapp.com/api/v1/captcha?code=${encodeURI(text)}`
let attachment = new MessageAttachment(image, 'captcha.png')

        oops.delete();
        message.channel.send(attachment);
      }
};