DROP DATABASE IF EXISTS development_bandwith;
CREATE DATABASE development_bandwith;

DROP DATABASE IF EXISTS test_bandwith;
CREATE DATABASE test_bandwith;


-- Recreate db with new columns
-- don't forget passport and hashing here
-- check if you make multiple tables

CREATE TABLE bandwith
(
    username INT NOT NULL AUTO_INCREMENT,
    password VARCHAR(100) NOT NULL,
    Name VARCHAR(40),
    Age VARCHAR(10),
    Location VARCHAR(30),
    Favorite Genre VARCHAR(30),
    Influences VARCHAR(60),
    Skills VARCHAR(60)
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY
    (id)
);