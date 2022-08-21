import React, { useState } from "react"

import Header from "./Header"
import Footer from "./Footer"
import Note from "./Note"
import InputArea from "./InputArea"

import notes from "../notes.js"


function App() {

    const [currNotes, setNotes] = useState(notes);

    function updateNotes(title, content) {
        // console.log("updateNotes was called");
        // console.log(currNotes);
        setNotes(prev => {
            return [
                ...prev,
                {
                    key: prev.length ? prev[prev.length - 1].key + 1 : 0,
                    title: title,
                    content: content
                }
            ]
        });
    }

    function handleDelete(id) {
        // console.log("this was triggered");
        setNotes(prev => {
            return prev.filter(note => note.key !== id)
        });
    }

    return (
        <div>
            <div>
                <Header />
            </div>
            <InputArea fn={updateNotes} />
            <div>
                {currNotes.map((note) => {
                    return (<Note
                        key={note.key}
                        id={note.key}
                        title={note.title}
                        content={note.content}
                        deleteAction={handleDelete}
                    />
                    );
                })}
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default App;