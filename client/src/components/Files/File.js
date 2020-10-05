import React from "react";
import moment from "moment";
import filesize from "filesize.js";

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

    let filePath = file.fileName.split("/");
    let fileName = filePath.pop();

    return (
        <a
            href={`https://f002.backblazeb2.com/file/${bucket}/${file.fileName}`}
            rel="noopener noreferrer"
            target="_blank"
            draggable="true"
        >
            <div className="file">
                <div className="file-icon">
                    <Icon name={fileTypeImage} isRounded={true} />
                </div>
                <div className="file-name">{fileName}</div>
                <div className="file-path">{filePath.join("/")}</div>
                <div className="file-uploaded">
                    {moment(file.uploadTimestamp).format("ll")}
                </div>
                <div className="file-size">{filesize(file.contentLength)}</div>
            </div>
        </a>
    );
}

export default File;
