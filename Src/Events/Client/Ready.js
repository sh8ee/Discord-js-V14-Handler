const { Events, ActivityType } = require("discord.js"); const ms = require("ms")
const { CustomClient } = require("../../../Src/Structures/Classes/CustomClient")
const { loadCommands } = require("../../../Src/Structures/Functions/CommandLoader")


module.exports = { name: Events.ClientReady,

    /**
     * @param {CustomClient} client 
     * @loadCommands load all commands 
     * @asyncLockdown check lockdown end time and delete data
     * @asynclang Multiguild language System 
     */

async execute(client) {
const { user } = client; console.log(`${user.tag} BOT ONLINE`)
loadCommands(client);
setInterval(() => { user.setActivity({ name: `${client.users.cache.size}`, type: ActivityType.Watching })}, ms("5s"))

}}