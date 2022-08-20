import React, { useState } from "react";

function InputArea(props) {
    const [keeperTile, setTile] = useState({
        title: '',
        content: '',
    });

    function handleChange(e) {
        // console.log("handleChange was pressed");
        const { name, value } = e.target;
        setTile(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        // console.log("handleClick was pressed");
        event.preventDefault();
        props.fn(keeperTile.title,keeperTile.content);
        setTile({
            title: '',
            content: '',
        });
    }

    return (
        <form>
            <input
                onChange={handleChange}
                name="title"
                placeholder="Title"
                value={keeperTile.title}
                autoComplete="off"
            />
            <input
                onChange={handleChange}
                name="content"
                placeholder="Take a Note..."
                value={keeperTile.content}
                autoComplete="off"
            />
            <button onClick={handleClick}>Add</button>
        </form>
    );
}

export default InputArea;