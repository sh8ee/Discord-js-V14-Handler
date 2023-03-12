const { EmbedBuilder, CommandInteraction } = require("discord.js")

/**
 * @param {*} interaction - client interaction from Command Interaction
 * @param {*} emoji - emoji for the reply
 * @param {String} description - description for the reply
 * @param {Boolean} type - type of reply, ephemeral true or false
 */

function Reply(interaction, emoji, description, type) {
    interaction.reply({ embeds: [new EmbedBuilder().setColor("#38b6ff").setDescription(`${emoji} ${description}`)], ephemeral: type || false })
}



/**
 * @param {CommandInteraction} interaction - client interaction from Command Interaction
 * @param {*} emoji - emoji for the reply
 * @param {String} description - description for the reply
 * @param {Boolean} type - type of reply, ephemeral true or false
 */

function EditReply(interaction, emoji, description, type) {
    interaction.editReply({ embeds: [new EmbedBuilder().setColor("#38b6ff").setDescription(`${emoji} ${description}`)], ephemeral: type || false })
}



module.exports = { Reply, EditReply }