DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

USE exampledb;

CREATE TABLE users (
  userID int NOT NULL AUTO_INCREMENT,
  email varchar(200) NOT NULL,
  handle varchar(200) NOT NULL,
  username varchar(200) NOT NULL,
  user_password varchar(200) NOT NULL,
  PRIMARY KEY (userID)
);
