const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('version')
        .setDescription('Obtenez la version du serveur'),
    async execute(interaction) {
        console.log(`${new Date().toLocaleString(process.env.LOCALE, { timeZone: process.env.TIMEZONE })} - ${interaction.user.tag} - /${interaction.commandName}`);
        return interaction.reply({content: 'Dernière version de minecraft 1.21.x'});
    },
};