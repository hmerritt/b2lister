import React, { useState, useEffect } from "react";

import Buckets from "./components/Buckets/Buckets";
import Files from "./components/Files/Files";

function App() {
    // Parse url param for "bucket"
    const params = new URLSearchParams(window.location.search);
    const urlBucket = params.get("bucket") || "";

    // Set state
    const [bucket, setBucket] = useState(urlBucket);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        document.title = `${bucket} | b2lister`;
    }, [bucket]);

    return (
        <div className="App app-wrapper" haserror={`${hasError}`}>
            <div className="container">
                <header className="App-header">
                    <h1>b2lister | {bucket || "buckets"}</h1>
                </header>

                <section>
                    {hasError && (
                        <div className="error">
                            <h2>Unable to fetch file list</h2>
                            <p>
                                Things to try: <br />
                                <br />
                                - ?bucket= <br />- incorrect bucket name
                                <br />- private bucket
                            </p>
                        </div>
                    )}
                </section>

                <section>
                    {bucket.length > 0 ? (
                        <Files bucket={bucket} setHasError={setHasError} />
                    ) : (
                        <Buckets setHasError={setHasError} />
                    )}
                </section>
            </div>
            <div className="background-color"></div>
        </div>
    );
}

export default App;
