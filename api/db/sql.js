const dbSQL = {
    getUsers: 'SELECT * FROM users;',
    getScooters: 'SELECT * FROM scooters;',
    addUser: `INSERT INTO users (username, password, balance, permission, active)
    VALUES
    (?, ?, ?, ?, ?);`,
    addScooter: `INSERT INTO scooters (battery, position, live, pickup, active, service, zone, lastUser)
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
    pickup = ?,
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
    balance += ?
    WHERE
    id = ?;`,
    removeUserBalance: `UPDATE users
    SET
    balance -= ?
    WHERE
    id = ?;`,
    activateScooter: `UPDATE scooters
    SET
    active = TRUE,
    lastUser = ?
    WHERE
    id = ?;`,
    deActivateScooter: `UPDATE users
    SET
    balance -= ?
    WHERE
    id = ?;
    UPDATE scooters
    SET
    active = FALSE
    WHERE
    id = ?;`,
    getScooterPosition: `SELECT position from scooters
    WHERE
    id = ?;`,
    setScooterPosition: `UPDATE scooters
    SET
    position = ?
    WHERE
    id = ?;`
}

module.exports = dbSQL;