CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    firstName varchar(255) NOT NULL,
    lastName varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    phone varchar(255) NOT NULL,
    created datetime NOT NULL,
    password varchar(255)
);
CREATE TABLE Team (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL
);
CREATE TABLE Game(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    date datetime NOT NULL,
    teamHome INTEGER NOT NULL,
    teamAway varchar(255) NOT NULL,
    scoreHome INTEGER,
    scoreAway INTEGER,
    referee INTEGER,
    refereeAD INTEGER,
    refereeAD2 INTEGER,
    created datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (teamHome) REFERENCES Team(id),
    FOREIGN KEY (referee) REFERENCES Person(id),
    FOREIGN KEY (refereeAD) REFERENCES Person(id),
    FOREIGN KEY (refereeAD2) REFERENCES Person(id)
);

CREATE TABLE Schedule(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    created datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ScheduleGame(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    schedule INTEGER NOT NULL,
    game INTEGER NOT NULL,
    FOREIGN KEY (schedule) REFERENCES Schedule(id),
    FOREIGN KEY (game) REFERENCES Game(id)
);

INSERT INTO Schedule (name) VALUES ("Domarschema April 2023");

INSERT INTO Team (name) VALUES ("F13");
INSERT INTO Team (name) VALUES ("P12");
INSERT INTO Team (name) VALUES ("P10");
INSERT INTO Team (name) VALUES ("F08");
INSERT INTO Team (name) VALUES ("P11");
INSERT INTO Team (name) VALUES ("F11");
INSERT INTO Team (name) VALUES ("F09");
INSERT INTO Team (name) VALUES ("F09");

