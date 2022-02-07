module.exports = {
    name: "shutdown",
    aliases: ["turnoff"],
    description: "Shuts down the bot !!",
    

    run: async(client, message, args) => {
        
        if (message.author.id !== "806924400494248006") {
            return;
        }
        
        await message.channel.send(`✅ Thank You For Letting Me Rest! EVERYONE I AM GOING TO REST TALK TO <@806924400494248006> FOR MORE INFO `)
        console.log('Client was turned off using the shutdown command.')
        process.exit();
    }
}