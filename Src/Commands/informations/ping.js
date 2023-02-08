const { ChatInputCommandInteraction } = require("discord.js")
const { CustomClient } = require("../../../Src/Structures/Classes/CustomClient")
const { Reply, EditReply } = require("../../../Src/Systems/Reply")


module.exports = {
    name: "pingss",
    description: 'sssss',
    dmPermission: false,

    /**
     * @param {ChatInputCommandInteraction} interaction 
     * @param {CustomClient} client 
     */

    async execute(interaction, client) {
        const { guild } = interaction

        Reply(interaction, client.emoji.time, `WORKING`,true)
    }
}