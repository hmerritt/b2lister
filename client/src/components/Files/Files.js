import React, { useState, useEffect } from "react";

import { api } from "../../utils/api";

import File from "./File";

function Files({ bucket }) {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        api()
            .post("/bucket/files", { bucket: bucket })
            .then((res) => {
                setFiles(res.data);
                console.log("Files", res.data);
            });
    }, [bucket]);

    return (
        <div className="files-container">
            {files.map((file, index) => {
                return <File file={file} bucket={bucket} key={index} />;
            })}
        </div>
    );
}

export default Files;
