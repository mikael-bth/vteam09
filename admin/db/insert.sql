DROP table IF EXISTS users;

-- id: Unique id for the user
-- name: The name of the user
-- balance: The balance of the user account
-- permission: IF user has the specified permission to use scooters

CREATE TABLE users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    balance INTEGER NOT NULL,
    permission BOOLEAN NOT NULL
);

DROP table IF EXISTS scooters;

-- id: Unique id for the scooters
-- battery: The battery range of the scooter in %
-- position: Where the scooter is located;
-- live: IF the scooter is placed in zone.
-- pickup: IF the scooter needs to be picked up can be for service like change battery
-- active: IF the scooter is currently in use
-- service: IF the scooter needs service.
-- zone: The zone where the scooter is located and limited to move in
-- lastUser: Current user or lastUser of the scooters

CREATE TABLE scooters(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    battery INTEGER NOT NULL,
    position VARCHAR(255) NOT NULL,
    live BOOLEAN NOT NULL,
    pickup BOOLEAN NOT NULL,
    active BOOLEAN NOT NULL,
    service BOOLEAN NOT NULL,
    zone INTEGER,
    lastUser INTEGER
);

DROP TABLE IF EXISTS support;

-- User that created complaint
-- chat the text between costumer and support
-- status 
--  0: waiting for answer
--  1: waiting for answer for costumer
--  2: Case closed

CREATE TABLE support(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    userID INTEGER NOT NULL,
    chat TEXT NOT NULL,
    status INTEGER NOT NULL,
    lastChange DATETIME NOT NULL
);