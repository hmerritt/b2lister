import React, { useState, useEffect } from "react";

import Files from "./components/Files/Files";

function App() {
    const params = new URLSearchParams(window.location.search);
    const urlBucket = params.get("bucket") || "";

    // Set bucket to fetch file-list from
    const [bucket, setBucket] = useState(urlBucket);

    useEffect(() => {
        document.title = `${bucket} | b2lister`;
    }, [bucket]);

    return (
        <div className="App app-wrapper">
            <div className="container">
                <header className="App-header">
                    <h1>b2lister</h1>
                </header>

                <section>
                    <Files bucket={bucket} />
                </section>
            </div>
        </div>
    );
}

export default App;
