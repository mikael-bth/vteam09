VTEAM09 API - V9-Scooter
========================

Modules:
- CORS
- DotENV
- Express
- Sqlite3
- BcryptJS

Install all required modules with 'npm install'.

Start the app with:
- 'npm start' to start in default mode.
- 'npm run development' to start in development mode. This option requires 'nodemon'.
- 'npm run production' to start in production mode.

Active routes:
- / - Index page.
- /v1 - Index page for v1 of API.\
Following routes comes after the version route E.g. /v1/test.\
<ins>Scooter API</ins>
- /scooters - Route to get, add, update and remove scooters. [GET, POST, PUT, REMOVE]\
GET returns list of scooter objects, Example:
<pre>
{
    data: {
        [
            {
                id: 1
                battery: 100,
                position: "0.0",
                live: 0,
                active: 0,
                service: 0,
                zone: 0,
                lastUser: 0
            },
            ...
        ]
    },
    msg: "All scooters in system"
}
</pre>
POST requires battery, position, live, pickup, active, service, zone and lastUser in the body. Example:
<pre>
{
    battery: 100,
    position: "0.0",
    live: false,
    active: false,
    service: false,
    zone: 0,
    lastUser: 0
}
</pre>
POST returns:
Successful example:
<pre>
{
   data: "1 scooter/s added to database",
   msg: "Scooter added to database"
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
PUT requires id, battery, position, live, pickup, active, service, zone and lastUser in the body. Example:
<pre>
{
    id: 1
    battery: 100,
    position: "0.0",
    live: false,
    active: false,
    service: false,
    zone: 0,
    lastUser: 0
}
</pre>
PUT returns:
Successful example:
<pre>
{
   data: "1 scooter/s updated in database",
   msg: "Scooter updated"
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
DELETE requires id in the body. Example:
<pre>
{
    id: 1
}
</pre>
DELETE returns:
Successful example:
<pre>
{
   data: "1 scooter/s removed from database",
   msg: "Scooter removed"
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
- /scooter/id/:id - Route to get scooter with :id. [GET]\
Returns scooter object, Example of scooter object:
<pre>
{
    data: {
        [
            {
                id: 1
                battery: 100,
                position: "0.0",
                live: 0,
                active: 0,
                service: 0,
                zone: 0,
                lastUser: 0
            }
        ]
    },
    msg: "Scooter with ID 1"
}
</pre>
- /activescooters - Route to get all active scooters. [GET]\
Returns list of scooter objects, Example of scooter object:
<pre>
{
    data: {
        [
            {
                id: 1
                battery: 100,
                position: "0.0",
                live: 1,
                active: 1,
                service: 0,
                zone: 0,
                lastUser: 0
            },
            ...
        ]
    },
    msg: "All active scooters in system"
}
</pre>
- /scooter/activate - Route to activate scooter. [PUT]\
Requires scooterID and userID in the body. Example:
<pre>
{
    scooterID: 1,
    userID: 1
}
</pre>
Returns:
Successful example:
<pre>
{
   data: "User 1 activated scooter 1",
   msg: "Scooter activated"
}
</pre>
Failed example:
Scooter error:
<pre>
{
    message: "Scooter is waiting for service"
}
</pre>
Database error:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
- /scooter/deactivate - Route to deactivate scooter. [PUT]\
Requires scooterID, userID and payAmount in the body. Example:
<pre>
{
    scooterID: 1,
    userID: 1,
    payAmount: 100
}
</pre>
Returns:
Successful example:
<pre>
{
    data: "User 1 deactivated scooter 1 and payed 100",
    msg: "Scooter deactivated"
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
- /scooter/position - Route to get and set scooter position. [GET, PUT]\
GET requires id in the body. Example:
<pre>
{
    id: 1
}
</pre>
GET returns:
<pre>
{
    data: "0.0",
    msg: "Scooter 1s position"
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
PUT requires id and postion in the body. Example:
<pre>
{
    id: 1,
    position: "0.0"
}
</pre>
PUT Returns:
Successful example:
<pre>
{
   data: "Scooter 1s position set to 0.0",
   msg: "Updated scooter 1s position"
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
<ins>User API</ins>
- /users - Route to get, add, update and remove users. [GET, POST, PUT, REMOVE]\
GET returns list of user objects, Example of user object:
<pre>
{
    data: {
        [
            {
                id: 1
                username: "EXAMPLE",
                password: "PASSWORD"
                balance: 100,
                permission: 0,
                active: 0,
                joined: "1 jan 2023"
            },
            ...
        ]
    },
    msg: "All users in system"
}
</pre>
POST requires username and password in the body. Example:
<pre>
{
    username: "EXAMPLE",
    password: "PASSWORD",
}
</pre>
POST returns:
Successful example:
<pre>
{
   data: "1 user/s added to database",
   msg: "User added to database",
   id: 1
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
PUT requires id, username, password, balance, permission and active in the body. Example:
<pre>
{
    id: 1
    username: "EXAMPLE",
    password: "PASSWORD",
    balance: 100,
    permission: false,
    active: false
}
</pre>
PUT returns:
Successful example:
<pre>
{
   data: "1 user/s updated in database",
   msg: "User updated in database",
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
DELETE requires id in the body. Example:
<pre>
{
    id: 1
}
</pre>
DELETE returns:
Successful example:
<pre>
{
   data: "1 user/s removed from database",
   msg: "User removed from database",
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
- /user/id/:id - Route to get user with :id. [GET]\
Returns user object, Example of user object:
<pre>
{
    data: {
        [
            {
                id: 1
                username: "EXAMPLE",
                password: "PASSWORD"
                balance: 100,
                permission: 0,
                active: 0,
                joined: "1 jan 2023"
            }
        ]
    },
    msg: "User with ID 1"
}
</pre>
- /user/login - Route to login user. [POST]\
Requires username and password in the body. Example:
<pre>
{
    username: "EXAMPLE",
    password: "PASSWORD"
}
</pre>
Returns:
Successful example:
<pre>
{
   data: "username logged in",
   msg: "User logged in",
   id: 1
}
</pre>
Failed example:
Login error:
<pre>
{
    message: "Incorrect password"
}
</pre>
Database error:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
- /activeusers - Route to get all active users. [GET]\
Returns list of user objects, Example of user object:
<pre>
{
    data: {
        [
            {
                id: 1
                username: "EXAMPLE",
                password: "PASSWORD"
                balance: 100,
                permission: 0,
                active: 1,
                joined: "1 jan 2023"
            },
            ...
        ]
    },
    msg: "All active users in system"
}
</pre>
- /user/ridehistory - Route to get ride history. [GET]\
Requires id in the body. Example:
<pre>
{
    id: 1
}
</pre>
Returns:
Successful example:
<pre>
{
    data: {
        [
            {
                "id": 1,
                "userID": 1,
                "scooterID": 1,
                "date": "2023-01-01 00:00:00",
                "cost": 10
            },
            ...
        ]
    },
    msg: "User ride history"
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
- /user/lastride - Route to get last ride in user history. [GET]\
Requires id in the body. Example:
<pre>
{
    id: 1
}
</pre>
Returns:
Successful example:
<pre>
{
    data: {
        [
            {
                "id": 1,
                "userID": 1,
                "scooterID": 1,
                "date": "2023-01-01 00:00:00",
                "cost": 10
            }
        ]
    },
    msg: "User most recent ride in history"
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
- /user/addbalance - Route to add balance to user. [PUT]\
Requires id and balanceIncrease in the body. Example:
<pre>
{
    id: 1,
    balanceIncrease: 100
}
</pre>
Returns:
Successful example:
<pre>
{
    data: "User 1s balance increased with 100"
    msg: "Balance added to user"
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
- /user/removebalance - Route to remove balance from user. [PUT]\
Requires id and balanceDecrease in the body. Example:
<pre>
{
    id: 1,
    balanceDecrease: 100
}
</pre>
Returns:
Successful example:
<pre>
{
    data: "User 1s balance decreased with 100"
    msg: "Balance removed to user"
}
</pre>
Failed example:
<pre>
{
    errors: {
        status: 500,
        title: "Database error",
        detail: "Error message"
    }
}
</pre>
