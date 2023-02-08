const { loadFiles } = require("../Classes/FileLoader");
const { CustomClient } = require("../Classes/CustomClient")
const Ascii = require("ascii-table")


/**
 * @param {CustomClient} client 
 */

async function loadEvents(client) {

    const Table = new Ascii("EVENTS STATUS")
    const files = await loadFiles("Events")

    files.forEach((file) => {

        const event = require(file)
        if (!event.name) {
            Table.addRow(`${event.name || "MISSING"}`, "⛔ Event Name is either invalid or missing")
            return
        }

        if (event.once) client.once(event.name, (...args) => event.execute(...args, client))
        else client.on(event.name, (...args) => event.execute(...args, client))

        Table.addRow(event.name, `🟢 SUCCESSFULLY LOADED`)

    })

    return console.log(Table.toString())
}

module.exports = { loadEvents }