const shorten = require('vgd');

module.exports = {
    name: "vgd",
    aliases: ["shorten"],
    category: "Utility",
    description: "Shortens your URL to v.gd format !!",
    example: `s!linkshorten https://skylabot.tk skyla`,

    run: async (client, message, args) => {

        if (!args[0]) return message.reply(`Provide the link to shorten !! \`s!vgd <link> <name>\``)

        if (!args[0]) {
            shorten.shorten(args[0], function(res) {
                if(res.startsWith('Error:')) return message.reply(`Provide a valid url **${res}**`)

                message.channel.send(`**<${res}>**`)
            })

        } else {

            shorten.custom(args[0], args[1], function(res) {
                if(res.startsWith('Error:')) return message.reply(`**${res}**`)

                message.channel.send(`**<${res}>**`)
            })

        }

    }
}