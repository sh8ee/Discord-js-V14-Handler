const { Events, ActivityType } = require("discord.js"); const ms = require("ms")
const { CustomClient } = require("../../../Src/Structures/Classes/CustomClient")
const { loadCommands } = require("../../../Src/Structures/Functions/CommandLoader")
const { set, connect } = require("mongoose"); const mongo = process.env.DATABASE


module.exports = {
    name: Events.ClientReady,

    /**
     * @param {CustomClient} client 
     * https://fsymbols.com/generators/carty/
     */

    execute(client) {

        const { user } = client
        console.log(`${user.tag} ONLINE`)

        loadCommands(client)

        setInterval(() => { user.setActivity({
        name: `${client.guilds.cache.size}`, type: ActivityType.Watching})
        }, ms("5s"))


        if (!mongo) return
        set('strictQuery', true)
        connect(mongo, {
            useNewUrlParser: true, useUnifiedTopology: true
        }).then(() => {
            console.log(`MONGODB CONNECT`)
        }).catch(err => console.log(err))
    }
}