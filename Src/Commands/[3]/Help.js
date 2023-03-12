const { ChatInputCommandInteraction, ChannelSelectMenuBuilder, ActionRowBuilder, ChannelType } = require("discord.js")
const { CustomClient } = require("../../Structures/Classes/CustomClient")

module.exports = {
    name: "help",
    description: "Shows the information about the role",

    /**
     * @param {ChatInputCommandInteraction} interaction
     * @param {CustomClient} client
     */

    async execute(interaction, client) {    
         interaction.reply({ content: `HA MARI JAN`})
        }
}