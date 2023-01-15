INSERT INTO users (name, balance, permission)
VALUES
('Oscar', 100, TRUE),
('Mo', 200, TRUE),
('Gorge', 10, FALSE);

INSERT INTO scooters (battery, position, live, pickup, active, service, zone, lastUser)
VALUES
(80, '0.0', FALSE, FALSE, FALSE, FALSE, 0, 0),
(100, '0.0', FALSE, FALSE, TRUE, FALSE, 0, 0),
(10, '0.0', FALSE, TRUE, FALSE, FALSE, 0, 0);

INSERT INTO support (userID, chat, status, lastChange)
VALUES
(0, "Test ticket", 0, "2022-12-21T13:37"),
(1, "Test ticket 1", 0, "2022-12-21T13:37"),
(2, "Test ticket 2", 2, "2022-12-21T13:37")