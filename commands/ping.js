const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Répond Pong !'),
    async execute(interaction) {
        console.log(`${new Date().toLocaleString(process.env.LOCALE, { timeZone: process.env.TIMEZONE })} - ${interaction.user.tag} - /${interaction.commandName}`);
        return interaction.reply({content: 'Pong !'});
    },
};