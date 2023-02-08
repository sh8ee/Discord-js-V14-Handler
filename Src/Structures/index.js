const { Partials, GatewayIntentBits, AllowedMentionsTypes } = require("discord.js")
const { CustomClient } = require("./Classes/CustomClient")
require("dotenv").config(); const ms = require("ms");
const { loadEvents } = require("./Functions/EventLoader")
const { Error } = require("./Functions/Error")


const client = new CustomClient({
    intents: [
        GatewayIntentBits.MessageContent, GatewayIntentBits.Guilds, GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildModeration, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.AutoModerationConfiguration,
        GatewayIntentBits.AutoModerationExecution
    ],

    partials: [
        Partials.Channel, Partials.GuildMember,
        Partials.Message, Partials.Reaction,
        Partials.ThreadMember, Partials.User,
        Partials.GuildScheduledEvent
    ],
    allowedMentions: {
        parse: [
            AllowedMentionsTypes.Everyone, AllowedMentionsTypes.User, AllowedMentionsTypes.Role
        ]
    },
    rest: { timeout: ms("1m") }
})


loadEvents(client)
Error(client)

client.login(process.env.TOKEN)
