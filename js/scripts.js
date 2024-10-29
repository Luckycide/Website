// Embed Twitch Stream
// Ensure that the code runs after the page loads
document.addEventListener('DOMContentLoaded', function() {
    const twitchEmbed = document.getElementById('twitch-stream');
    if (twitchEmbed) {
        // Check if Twitch's embed script is already included
        if (!document.getElementById('twitch-embed-script')) {
            // Create a script element to load the Twitch Embed API
            const script = document.createElement('script');
            script.setAttribute('id', 'twitch-embed-script');
            script.setAttribute('src', "https://embed.twitch.tv/embed/v1.js");
            document.body.appendChild(script);

            // Add an event listener to initialize the Twitch embed when the script loads
            script.onload = () => {
                new Twitch.Embed("twitch-stream", {
                    width: "100%",
                    height: "480",
                    channel: "Luckycide", // Replace with your actual Twitch username
                    layout: "video", // Options: "video" or "chat" or "video-with-chat"
                    autoplay: false, // Set to true to start the stream automatically
                        // Only needed if this page is going to be embedded on other websites
                    parent: ["www.luckycide.com", "luckycide.com"]
                });
            };
        }
    }
});

