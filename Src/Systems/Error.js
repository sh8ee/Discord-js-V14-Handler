const { EmbedBuilder, WebhookClient } = require("discord.js")
const { CustomClient } = require("../Structures/Classes/CustomClient")

/**
 * @param {CustomClient} client 
 */

async function protectError(client) {

    const Embed = new EmbedBuilder().setColor("Red").setTimestamp()
    const webhook = new WebhookClient({
        id: "",
        token: ""
    });

    process.on("unhandledRejection", (reason, p) => {
        console.log(reason, p)
        webhook.send({ embeds: [Embed.setDescription("**Unhandled Rejection/Catch:\n\n** ```" + reason + "```").setTitle(`⚠ | Error Encountered`)] })
    })

    process.on("uncaughtException", (err, origin) => {
        console.log(err, origin)
        webhook.send({ embeds: [Embed.setDescription("**Uncaught Exception/Catch:\n\n** ```" + err + "\n\n" + origin.toString() + "```").setTitle(`⚠ | Error Encountered`)] })
    })

    process.on("uncaughtExceptionMonitor", (err, origin) => {
        console.log(err, origin)
        webhook.send({ embeds: [Embed.setDescription("**Uncaught Exception/Catch (MONITOR):\n\n** ```" + err + "\n\n" + origin.toString() + "```").setTitle(`⚠ | Error Encountered`)] })
    })
}

module.exports = { protectError }