import React, { useEffect } from "react";

import { api } from "../../utils/api";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import File from "./File";

function Files({ bucket }) {
    const [files, setFiles] = useLocalStorage(bucket, []);

    useEffect(() => {
        api()
            .post("/bucket/files", { bucket: bucket })
            .then((res) => {
                setFiles(res.data);
                console.log("Files", res.data);
            });
    }, [bucket, setFiles]);

    return (
        <div className="files-container">
            {files.map((file, index) => {
                return <File file={file} bucket={bucket} key={index} />;
            })}
        </div>
    );
}

export default Files;
