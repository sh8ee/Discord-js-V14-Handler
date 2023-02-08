const { EmbedBuilder } = require("discord.js")
const { CustomClient } = require("../Classes/CustomClient")

/**
 * @param {CustomClient} client 
 */

async function Error(client) {

    const Embed = new EmbedBuilder().setColor("Red").setTimestamp()
    process.on("unhandledRejection", (reason, p) => {
        console.log(reason, p)

        const Channel = client.channels.cache.get(client.config.Error)
        if (!Channel) return
        Channel.send({ embeds: [Embed.setDescription("**Unhandled Rejection/Catch:\n\n** ```" + reason + "```").setTitle(`⚠ | Error Encountered`)] })
    })

    process.on("uncaughtException", (err, origin) => {
        console.log(err, origin)

        const Channel = client.channels.cache.get(client.config.Error)
        if (!Channel) return
        Channel.send({ embeds: [Embed.setDescription("**Uncaught Exception/Catch:\n\n** ```" + err + "\n\n" + origin.toString() + "```").setTitle(`⚠ | Error Encountered`)] })
    })

    process.on("uncaughtExceptionMonitor", (err, origin) => {
        console.log(err, origin)

        const Channel = client.channels.cache.get(client.config.Error)
        if (!Channel) return
        Channel.send({ embeds: [Embed.setDescription("**Uncaught Exception/Catch (MONITOR):\n\n** ```" + err + "\n\n" + origin.toString() + "```").setTitle(`⚠ | Error Encountered`)] })
    })

}

module.exports = { Error }