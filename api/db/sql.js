const dbSQL = {
    getUsers: 'SELECT * FROM users;',
    getScooters: 'SELECT * FROM scooters;',
    addUser: `INSERT INTO users (name, balance, permission)
    VALUES
    (?, ?, ?);`,
    addScooter: `INSERT INTO scooters (battery, position, live, pickup, active, service, zone, lastUser)
    VALUES
    (?, ?, ?, ?, ?, ?, ?, ?)`,
    updateUser: `UPDATE users
    SET
    name = ?,
    balance = ?,
    permission = ?
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
    id = ?;`
}

module.exports = dbSQL;