DROP FUNCTION IF EXISTS payScooter;

CREATE FUNCTION payScooter(userID INTEGER, scooterID INTEGER, payAmount INTEGER)
RETURNS TABLE(userID INTEGER, scooterID INTEGER, payAmount INTEGER)
BEGIN ATOMIC

    UPDATE users
    SET balance -= payAmount
    WHERE id = userID;

    UPDATE scooters
    SET active = FALSE, lastUser = userID
    WHERE id = scooterID;

    RETURN (SELECT * FROM users WHERE id = userID);
END

payScooter(1, 1, 10);