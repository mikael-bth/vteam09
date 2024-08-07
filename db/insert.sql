DROP table IF EXISTS users;

-- id: Unique id for the user
-- username: The username of the user
-- password: The password of the user
-- balance: The balance of the user account
-- permission: IF user has the specified permission to use scooters
-- active: IF user is currently using scooter

CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    balance INTEGER NOT NULL,
    permission BOOLEAN NOT NULL,
    active BOOLEAN NOT NULL,
    joined VARCHAR(255) NOT NULL
);

DROP table IF EXISTS scooters;

-- id: Unique id for the scooters
-- battery: The battery range of the scooter in %
-- position: Where the scooter is located;
-- live: IF the scooter is placed in zone.
-- active: IF the scooter is currently in use
-- service: IF the scooter needs service.
-- zone: The zone where the scooter is located and limited to move in
-- lastUser: Current user or lastUser of the scooters

CREATE TABLE scooters(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    battery INTEGER NOT NULL,
    position VARCHAR(255) NOT NULL,
    live BOOLEAN NOT NULL,
    active BOOLEAN NOT NULL,
    service BOOLEAN NOT NULL,
    zone INTEGER,
    lastUser INTEGER
);

DROP table IF EXISTS userHistory;

-- id: Unique id for the ride in history
-- userID: ID for the person who were riding
-- scooterID: ID for the scooter that was being used
-- date: The time the scooter ride ended
-- cost: The  cost of the ride.

CREATE TABLE userHistory(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userID INTEGER NOT NULL,
    scooterID INTEGER NOT NULL,
    date TEXT NOT NULL,
    cost FLOAT NOT NULL
);