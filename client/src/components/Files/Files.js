import React, { useState, useEffect } from "react";
import axios from "axios";

import File from "./File";

function Files({ bucket }) {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios
            .post("http://localhost:5000/bucket/files", { bucket: bucket })
            .then((res) => {
                setFiles(res.data);
                console.log(res.data);
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
