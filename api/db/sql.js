const dbSQL = {
    getUsers: 'SELECT * FROM users;',
    getScooters: 'SELECT * FROM scooters;',
    addUser: `INSERT INTO users
    (username, password, balance, permission, active, joined)
    VALUES
    (?, ?, ?, ?, ?, ?);`,
    addScooter: `INSERT INTO scooters
    (battery, position, live, active, service, zone, lastUser)
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?)`,
    updateUser: `UPDATE users
    SET
    username = ?,
    password = ?,
    balance = ?,
    permission = ?,
    active = ?
    WHERE
    id = ?;`,
    updateScooter: `UPDATE scooters
    SET
    battery = ?,
    position = ?,
    live = ?,
    active = ?,
    service = ?,
    zone = ?,
    lastUser = ?
    WHERE
    id = ?;`,
    deleteUser: `DELETE FROM users
    WHERE
    id = ?;`,
    deleteScooter: `DELETE FROM scooters
    WHERE
    id = ?;`,
    getUser: `SELECT * FROM users
    WHERE
    id = ?;`,
    getUserIdByUsername: `SELECT id FROM users
    WHERE
    username = ?;`,
    getUserPass: `SELECT password FROM users
    WHERE
    username = ?;`,
    getActiveUser: `SELECT * FROM users
    WHERE
    active = TRUE;`,
    getScooter: `SELECT * FROM scooters
    WHERE
    id = ?;`,
    getActiveScooter: `SELECT * FROM scooters
    WHERE
    active = TRUE;`,
    addUserBalance: `UPDATE users
    SET
    balance = balance + ?
    WHERE
    id = ?;`,
    removeUserBalance: `UPDATE users
    SET
    balance = balance - ?
    WHERE
    id = ?;`,
    activateScooter: `UPDATE scooters
    SET
    active = TRUE,
    lastUser = ?
    WHERE
    id = ?;`,
    deActivateScooter: `UPDATE scooters
    SET
    active = FALSE
    WHERE
    id = ?;`,
    getScooterPosition: `SELECT position FROM scooters
    WHERE
    id = ?;`,
    setScooterPosition: `UPDATE scooters
    SET
    position = ?
    WHERE
    id = ?;`,
    getRideHistory:`SELECT * FROM userHistory
    WHERE
    userID = ?`,
    getLastRide:`SELECT * FROM userHistory
    WHERE
    userID = ?
    ORDER BY
    id DESC
    LIMIT 1;`,
    addRideToHistory:`INSERT INTO userHistory
    (userID, scooterID, date, cost)
    VALUES
    (?, ?, datetime('now'), ?);`
}

module.exports = dbSQL;