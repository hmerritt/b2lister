import React, { useEffect } from "react";

import { api } from "../../utils/api";
import { useLocalStorage } from "../../hooks/useLocalStorage";

import Bucket from "./Bucket";

function Buckets(props) {
    const [buckets, setBuckets] = useLocalStorage("buckets", []);

    useEffect(() => {
        api()
            .get("/buckets")
            .then((res) => {
                setBuckets(res.data);
                console.log("Files", res.data);
            })
            .catch((err) => {
                props.setHasError(true);
                console.log("Files Error", err);
            });
    }, []);

    return (
        <div className="files-container">
            {buckets.map((bucket, index) => {
                return <Bucket bucket={bucket} key={index} />;
            })}
        </div>
    );
}

export default Buckets;
