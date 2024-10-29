// Embed Twitch Stream
const twitchEmbed = document.getElementById('twitch-stream');
if (twitchEmbed) {
    new Twitch.Embed("twitch-stream", {
        width: "100%",
        height: "480",
        channel: "your-twitch-username"
    });
}
