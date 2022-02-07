const DadJokes = require("dadjokes-wrapper");
module.exports = {
        name: "joke",
        aliases: ["jk"],
        description: "Random jokes",
         run: async (client, message, args) => {

                

                const joke = new DadJokes();
                const dadjoke = await joke.randomJoke();
                message.reply(dadjoke).catch(console.error);
        },
};