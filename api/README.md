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
GET returns list of scooter objects, Example of scooter object:
<pre>
{
    id: 1
    battery: 100,
    position: "0.0",
    live: false,
    pickup: false,
    active: false,
    service: false,
    zone: 0,
    lastUser: 0,
}
</pre>
POST requires battery, position, live, pickup, active, service, zone and lastUser in the body. Example:
<pre>
{
    battery: 100,
    position: "0.0",
    live: false,
    pickup: false,
    active: false,
    service: false,
    zone: 0,
    lastUser: 0,
}
</pre>
PUT requires id, battery, position, live, pickup, active, service, zone and lastUser in the body. Example:
<pre>
{
    id: 1
    battery: 100,
    position: "0.0",
    live: false,
    pickup: false,
    active: false,
    service: false,
    zone: 0,
    lastUser: 0,
}
</pre>
DELETE requires id in the body. Example:
<pre>
{
    id: 1
}
</pre>
- /scooter/id/:id - Route to get scooter with :id. [GET]\
Returns scooter object, Example of scooter object:
<pre>
{
    id: 1
    battery: 100,
    position: "0.0",
    live: false,
    pickup: false,
    active: false,
    service: false,
    zone: 0,
    lastUser: 0,
}
</pre>
- /activescooters - Route to get all active scooters. [GET]\
Returns list of scooter objects, Example of scooter object:
<pre>
{
    id: 1
    battery: 100,
    position: "0.0",
    live: false,
    pickup: false,
    active: false,
    service: false,
    zone: 0,
    lastUser: 0,
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
- /scooter/deactivate - Route to deactivate scooter. [PUT]\
Requires scooterID, userID and payAmount in the body. Example:
<pre>
{
    scooterID: 1,
    userID: 1,
    payAmount: 100
}
</pre>
<ins>User API</ins>
- /users - Route to get, add, update and remove users. [GET, POST, PUT, REMOVE]\
GET returns list of user objects, Example of user object:
<pre>
{
    id: 1
    username: "EXAMPLE",
    password: "PASSWORD"
    balance: 100,
    permission: false,
    active: false
}
</pre>
POST requires username and password in the body. Example:
<pre>
{
    username: "EXAMPLE",
    password: "PASSWORD",
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
DELETE requires id in the body. Example:
<pre>
{
    id: 1
}
</pre>
- /user/id/:id - Route to get user with :id. [GET]\
Returns user object, Example of user object:
<pre>
{
    id: 1
    username: "EXAMPLE",
    password: "PASSWORD"
    balance: 100,
    permission: false,
    active: false
}
</pre>
- /activeusers - Route to get all active users. [GET]\
Returns list of user objects, Example of user object:
<pre>
{
    id: 1
    username: "EXAMPLE",
    password: "PASSWORD"
    balance: 100,
    permission: false,
    active: false
}
</pre>
- /user/ridehistory - Route to get ride history. [GET]
- /user/lastride - Route to get last ride. [GET]
- /user/addbalance - Route to add balance to user. [PUT]\
Requires id and balanceIncrease in the body. Example:
<pre>
{
    id: 1,
    balanceIncrease: 100
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
