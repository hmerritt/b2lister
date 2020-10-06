import React, { useState } from "react";
import moment from "moment";
import filesize from "filesize.js";
import copy from "copy-to-clipboard";

import TooltipSticky from "../TooltipSticky";
import Icon from "../Icon";

function File({ bucket, file }) {
    const link = `https://f002.backblazeb2.com/file/${bucket}/${file.fileName}`;

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

    // Tooltip
    const [tooltipText, setTooltipText] = useState("");
    const [isTooltipActive, setIsTooltipActive] = useState(false);

    // Copy text to clipboard
    const copyText = (e, text) => {
        e.preventDefault();
        copy(text, { message: "Press #{key} to copy" });
        setTooltipText("copied!");
        return false;
    };

    return (
        <>
            <a
                href={link}
                rel="noopener noreferrer"
                target="_blank"
                draggable="true"
            >
                <div
                    className="file"
                    onMouseEnter={() => {
                        setTooltipText("download");
                        setIsTooltipActive(true);
                    }}
                    onMouseLeave={() => {
                        setTooltipText("");
                        setIsTooltipActive(false);
                    }}
                >
                    <div className="file-icon">
                        <Icon name={fileTypeImage} isRounded={true} />
                    </div>
                    <div className="file-name">
                        {fileName}
                        <div className="file-path">{filePath.join("/")}</div>
                    </div>
                    <div className="file-uploaded">
                        {moment(file.uploadTimestamp).format("ll")}
                    </div>
                    <div className="file-size">
                        {filesize(file.contentLength)}
                    </div>
                    <div
                        className="file-copy file-icon"
                        onClick={(e) => copyText(e, link)}
                        onMouseEnter={() => {
                            setTooltipText("copy download url");
                            setIsTooltipActive(true);
                        }}
                        onMouseLeave={() => {
                            setTooltipText("download");
                        }}
                        // title="Copy link to file"
                    >
                        <Icon name="copy" isRounded={true} />
                    </div>
                </div>
                <TooltipSticky text={tooltipText} isActive={isTooltipActive} />
            </a>
        </>
    );
}

export default File;
