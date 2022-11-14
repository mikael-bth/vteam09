import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const userSession = require("../../controller/session.controller");

function Home() {
    const [user, setUser] = useState(false);

    useEffect(() => {
        let userLogged = userSession.getSession();
        if (userLogged) {
            setUser(userLogged);
        }
    }, []);

    return (
        <div className="Body">
            <h1 className="pageHeader">Friendly and sustainable</h1>
            <div className="spaceVertical"></div>
            <div className="imageHeader">
                <img alt="logo" src="/assets/logo2.PNG" height={400} />
            </div>
            <div className="spaceVertical"></div>
            <div className="spaceVertical"></div>
            <div className="spaceVertical"></div>
            {user ?
                <h6 className="textHeader">Welcome {user}</h6>
                : <h6 className="textHeader"><Link to="/login">Sign in</Link> or <Link to="/signup">Join now</Link></h6>}
        </div>
    );
}

export default Home;