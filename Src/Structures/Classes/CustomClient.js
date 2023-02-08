const { Client, Collection } = require("discord.js")
const emojis = require("../../../Src/Storage/Jsons/emojis.json")
const configuration = require("../../../Src/Storage/Jsons/config.json")


class CustomClient extends Client {

    config = configuration
    emoji = emojis
    commands = new Collection()
    slashData = new Collection()

}

module.exports = { CustomClient }