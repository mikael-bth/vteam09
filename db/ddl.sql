INSERT INTO users (username, password, balance, permission, active, joined)
VALUES
('Oscar', '$2a$10$kYVtijnpy/pW5ddtA2.cg.NV9q2WbmloB5PFH2X7tVDT3D7RAvl5m', 100, TRUE, FALSE, '14 jan 2023'),
('Mo', '$2a$10$kYVtijnpy/pW5ddtA2.cg.NV9q2WbmloB5PFH2X7tVDT3D7RAvl5m', 200, TRUE, FALSE, '14 jan 2023'),
('Georges', '$2a$10$kYVtijnpy/pW5ddtA2.cg.NV9q2WbmloB5PFH2X7tVDT3D7RAvl5m', 10, FALSE, FALSE, '14 jan 2023');
-- Password is 'password' encrypted with bcrypt

INSERT INTO scooters (battery, position, live, pickup, active, service, zone, lastUser)
VALUES
(80, '0.0', FALSE, FALSE, FALSE, FALSE, 0, 0),
(100, '0.0', FALSE, FALSE, TRUE, FALSE, 0, 0),
(10, '0.0', FALSE, TRUE, FALSE, FALSE, 0, 0);