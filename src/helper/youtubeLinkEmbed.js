export function youtubeLinkEmbed(value) {
    //   return string.charAt(0).toUpperCase() + string.slice(1);
    const regex = /(?:\/|%3D|v=|vi=)([0-9A-Za-z_-]{11})(?:[\?&]|$)/;

    // Extracting video ID using match function
    const match = value.match(regex);

    // Extracted video ID
    const videoId = match ? match[1] : null;
    return videoId;
}
