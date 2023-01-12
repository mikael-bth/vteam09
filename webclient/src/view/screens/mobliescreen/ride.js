import React, { useEffect, useState } from "react";
const userSession = require("../../../controller/session.controller");

function Ride() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    let userLogged = userSession.getSession();
    if (userLogged) {
      setUser(userLogged);
    }
  }, []);

  return (
    <div className="Body">
      <h1 className="pageHeader">Start</h1>
      <div className="spaceVertical"></div>
      <div className="imageHeader">
        <img alt="logo" src="/assets/map.jpg" />
      </div>
    </div>
  );
}

export default Ride;

