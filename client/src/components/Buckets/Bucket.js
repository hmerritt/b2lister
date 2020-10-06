import React from "react";

import Icon from "../Icon";

function Bucket({ bucket }) {
    const link = `?bucket=${bucket.bucketName}`;

    return (
        <>
            <a href={link} draggable="true">
                <div className="bucket file">
                    <div className="file-icon">
                        <Icon name="database" isRounded={true} />
                    </div>
                    <div className="file-name">
                        {bucket.bucketName}
                        <div className="file-path">
                            {bucket.bucketType === "allPublic"
                                ? "Public"
                                : "Private"}
                        </div>
                    </div>
                </div>
            </a>
        </>
    );
}

export default Bucket;
