const { SlashCommandBuilder } = require('@discordjs/builders');
const Rcon = require('rcon-client');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('whitelist')
        .setDescription('Ajoutez un joueur à la whitelist')
        .addStringOption(option =>
            option.setName('player')
                .setDescription('Le pseudo du joueur à ajouter à la whitelist')
                .setRequired(true)
        ),
    async execute(interaction) {
        const player = interaction.options.getString('player');

        // Log the command execution
        console.log(`${new Date().toLocaleString(process.env.LOCALE, { timeZone: process.env.TIMEZONE })} - ${interaction.user.tag} - /${interaction.commandName} ${player}`);

        // Check if the player's name is a valid Minecraft username
        const regex = /^[a-zA-Z0-9_]{2,16}$/;
        if (!regex.test(player)) {
            return interaction.reply({content: 'Le pseudo du joueur n\'est pas valide.'});
        }

        // Define the Rcon client
        const rcon = new Rcon.Rcon({
            host: process.env.RCON_HOST,
            port: process.env.RCON_PORT,
            password: process.env.RCON_PASSWORD,
        });

        // Connect to the Rcon server and send the command
        try {
            await rcon.connect();
            const response = await rcon.send(`whitelist add ${player}`);
            await interaction.reply({content: `${response}`});
            console.log(`${new Date().toLocaleString(process.env.LOCALE, { timeZone: process.env.TIMEZONE })} - ${response}`);
        } catch (error) {
            console.log(error);
            await interaction.reply({content: 'Erreur lors de l\'ajout du joueur à la whitelist.'});
        } finally {
            await rcon.end();
        }
    },
};