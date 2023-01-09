INSERT INTO users (username, password, balance, permission, active)
VALUES
('Oscar', 'password', 100, TRUE, FALSE),
('Mo', 'password', 200, TRUE, FALSE),
('Gorge', 'password', 10, FALSE, FALSE);

INSERT INTO scooters (battery, position, live, pickup, active, service, zone, lastUser)
VALUES
(80, '0.0', FALSE, FALSE, FALSE, FALSE, 0, 0),
(100, '0.0', FALSE, FALSE, TRUE, FALSE, 0, 0),
(10, '0.0', FALSE, TRUE, FALSE, FALSE, 0, 0);