INSERT INTO users (username, password, balance, permission, active, joined)
VALUES
('Oscar', '$2a$10$kYVtijnpy/pW5ddtA2.cg.NV9q2WbmloB5PFH2X7tVDT3D7RAvl5m', 100, TRUE, FALSE, '14 jan 2023'),
('Mo', '$2a$10$kYVtijnpy/pW5ddtA2.cg.NV9q2WbmloB5PFH2X7tVDT3D7RAvl5m', 200, TRUE, FALSE, '14 jan 2023'),
('Georges', '$2a$10$kYVtijnpy/pW5ddtA2.cg.NV9q2WbmloB5PFH2X7tVDT3D7RAvl5m', 10, FALSE, FALSE, '14 jan 2023');
-- Password is 'password' encrypted with bcrypt

INSERT INTO scooters (battery, position, live, active, service, zone, lastUser)
VALUES
(80, '56.16156,15.58655', TRUE, FALSE, FALSE, 0, 0),
(100, '56.16156,15.58661', TRUE, TRUE, FALSE, 0, 0),
(10, '56.16156,15.58665', FALSE, FALSE, TRUE, 0, 0);