export const fileTypeImage = (contentType) => {
    switch (true) {
        case contentType.includes("video/"):
            return "video";

        case contentType.includes("audio/"):
            return "audio";

        case contentType.includes("image/"):
            return "image";

        case contentType.includes("pdf"):
            return "pdf";

        case contentType.includes("compressed"):
		case contentType.includes("tar"):
        case contentType.includes("zip"):
            return "zip";

        default:
            return "file";
    }
};
