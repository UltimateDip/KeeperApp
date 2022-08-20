import React, { useState } from "react"

function Header() {

    const [time, update] = useState(new Date().toLocaleTimeString())

    function foo() {
        update(new Date().toLocaleTimeString());
    }
    setInterval(foo, 1000);

    return (
        <header>
            <h1>
                Keeper App
            </h1>
            <p>
                {time}
            </p>
        </header>
    );
}

export default Header;