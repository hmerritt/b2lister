import React, { useState, useEffect } from "react";

import Files from "./components/Files/Files";

function App() {
    const [bucket, setBucket] = useState("collection-2001");

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
