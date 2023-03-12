const { GatewayIntentBits, Partials } = require("discord.js");
const { CustomClient } = require("./Classes/CustomClient");
const { loadEvents } = require("./Functions/EventLoader"); 
const { protectError } = require("../Systems/Error");

const client = new CustomClient({

    intents:  [Object.keys(GatewayIntentBits)],
    partials: [Object.keys(Partials)],

})

loadEvents(client); protectError(client); client.start()