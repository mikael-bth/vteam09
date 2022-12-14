VTEAM09 API - V9-Scooter
========================

Modules:
- CORS
- DotENV
- Express

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
- /scooters - Route to get, add, update and remove scooters. [GET, POST, PUT, REMOVE]
- /scooter/id/:id - Route to get scooter with :id. [GET]
- /activescooters - Route to get all active scooters. [GET]
- /scooter/activate - Route to activate scooter. [PUT]
- /scooter/deactivate - Route to deactivate scooter. [PUT]\
<ins>User API</ins>
- /users - Route to get, add, update and remove users. [GET, POST, PUT, REMOVE]
- /user/id/:id - Route to get user with :id. [GET]
- /activeusers - Route to get all active users. [GET]
- /user/ridehistory - Route to get ride history. [GET]
- /user/lastride - Route to get last ride. [GET]
- /user/addbalance - Route to add balance to user. [PUT]
- /user/removebalance - Route to remove balance to user. [PUT]
