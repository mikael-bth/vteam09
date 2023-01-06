VTEAM09 API - V9-Scooter
========================

Modules:
- CORS
- DotENV
- Express
- Sqlite3

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
scooter {
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
POST requires a object with the name scooter with the variables in this order:
<pre>
scooter {
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
PUT requires a object with the name scooter with the variables in this order:
<pre>
scooter {
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
DELETE requires a object with the name scooter with the scooter ID as first variable:
<pre>
scooter {
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
- /scooter/id/:id - Route to get scooter with :id. [GET]
- /activescooters - Route to get all active scooters. [GET]
- /scooter/activate - Route to activate scooter. [PUT]
- /scooter/deactivate - Route to deactivate scooter. [PUT]\
<ins>User API</ins>
- /users - Route to get, add, update and remove users. [GET, POST, PUT, REMOVE]
GET returns list of user objects, Example of user object:
<pre>
user {
    id: 1
    name: "EXAMPLE",
    balance: 100,
    permission: false
}
</pre>
POST requires a object with the name user with the variables in this order:
<pre>
user {
    name: "EXAMPLE",
    balance: 100,
    permission: false
}
</pre>
PUT requires a object with the name user with the variables in this order:
<pre>
user {
    id: 1
    name: "EXAMPLE",
    balance: 100,
    permission: false
}
</pre>
DELETE requires a object with the name user with the user ID as first variable:
<pre>
user {
    id: 1
    name: "EXAMPLE",
    balance: 100,
    permission: false
}
</pre>
- /user/id/:id - Route to get user with :id. [GET]
- /activeusers - Route to get all active users. [GET]
- /user/ridehistory - Route to get ride history. [GET]
- /user/lastride - Route to get last ride. [GET]
- /user/addbalance - Route to add balance to user. [PUT]
- /user/removebalance - Route to remove balance from user. [PUT]
