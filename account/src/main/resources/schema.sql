CREATE TABLE User
  (
  userName VARCHAR(20) NOT NULL,
  password VARCHAR(40) NOT NULL,
  PRIMARY KEY (userName)
  );

CREATE TABLE Account
  (
  name VARCHAR(20) NOT NULL,
  lastSeen TIMESTAMP,
  note VARCHAR(20000),
  PRIMARY KEY (name)
  );
