const { Events, ChatInputCommandInteraction, EmbedBuilder } = require("discord.js");
const { CustomClient } = require("../../../Src/Structures/Classes/CustomClient")
const { Reply, EditReply } = require("../../../Src/Systems/Reply"); const { stripIndent } = require("common-tags"); 


module.exports = {
name: Events.InteractionCreate,

/**
* @param {ChatInputCommandInteraction} interaction
* @param {CustomClient} client
*/

async execute(interaction, client) {
if (!interaction.isChatInputCommand()) return
const { user, guild, commandName, member } = interaction

if (!guild) return
const command = client.commands.get(commandName)
if (!command) return Reply(interaction, client.emoji.WRONG, `The Commands You're trying to execute doest't exist!`, true) && client.commands.delete(commandName)

if (command.UserPermissions && command.UserPermissions.length !== 0) if(!member.permissions.has(command.UserPermissions))
return Reply(interaction, client.emoji.WRONG, `You need \`${command.UserPermissions.join(", ")}\` permission(s) to execute this command!`, true)

if (command.BotPermissions && command.BotPermissions.length !== 0) if(!guild.members.me.permissions.has(command.BotPermissions))
return Reply(interaction, client.emoji.WRONG, `I need \`${command.BotPermissions.join(", ")}\` permission(s) to execute this command!`, true)

if (command.OwnerPermissions && !client.config.devs.includes(user.id)) return Reply(interaction, client.emoji.WRONG, `This command is classified!`, true)

command.execute(interaction, client)

}}