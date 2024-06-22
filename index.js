// Import required modules
require('dotenv').config();
const fs = require('node:fs');
const path = require('node:path');
const {Client, Intents, Collection, Events, GatewayIntentBits, ChannelType, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js');
const {REST} = require("@discordjs/rest");
const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]});


// Create a new collection for the client's commands
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

// Load all commands into the client's commands collection
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    client.commands.set(command.data.name, command);
}

// Event handler for when the client is ready
client.on('ready', async () => {
    const { ActivityType } = require('discord.js');
    client.user.setPresence({activities: [{ name: "Ronpiche", type: ActivityType.Custom, state: "😴"}], status: 'online'});

    // Log that the client hour is ready
    console.log(`${new Date().toLocaleString(process.env.LOCALE, { timeZone: process.env.TIMEZONE })} - ${client.user.tag} - Ready`);
});

// Event handler for when an interaction is created
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({content: 'Error executing this command', ephemeral: true});
    }
});

// Log the client in
client.login(process.env.CLIENT_TOKEN);