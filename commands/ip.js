const { SlashCommandBuilder, MessageEmbed } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ip')
        .setDescription('Obtenez l\'ip du serveur'),
    async execute(interaction) {
        console.log(`${new Date().toLocaleString(process.env.LOCALE, { timeZone: process.env.TIMEZONE })} - ${interaction.user.tag} - /${interaction.commandName}`);
        return interaction.reply({content: 'Java : play.hexca.fr`:25565`\nBedrock : play.hexca.fr`:19132`'});
    },
};