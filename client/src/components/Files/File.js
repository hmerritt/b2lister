import React from "react";

import Icon from "../Icon";

function File({ bucket, file }) {
    let fileTypeImage = "file";

    switch (true) {
        case file.contentType.includes("video/"):
            fileTypeImage = "video";
            break;

        case file.contentType.includes("audio/"):
            fileTypeImage = "audio";
            break;

        case file.contentType.includes("image/"):
            fileTypeImage = "image";
            break;

        case file.contentType.includes("pdf"):
            fileTypeImage = "pdf";
            break;

        case file.contentType.includes("compressed"):
        case file.contentType.includes("zip"):
            fileTypeImage = "zip";
            break;

        default:
            fileTypeImage = "file";
    }

    return (
        <a
            href={`https://f002.backblazeb2.com/file/${bucket}/${file.fileName}`}
            rel="noopener noreferrer"
            target="_blank"
        >
            <div className="file">
                <div className="file-icon">
                    <Icon name={fileTypeImage} isRounded={true} />
                </div>
                <div className="file-name">{file.fileName}</div>
                <div className="file-size">
                    {(file.contentLength / 1024 / 1024 / 1024).toFixed(2)} GB
                </div>
            </div>
        </a>
    );
}

export default File;
