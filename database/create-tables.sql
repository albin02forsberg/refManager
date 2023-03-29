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
    name varchar(255) NOT NULL,
    created datetime NOT NULL,
    creator INTEGER,
    FOREIGN KEY (creator) REFERENCES Person(id)
);

CREATE TABLE Game(
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    date datetime NOT NULL,
    teamHome id INTEGER NOT NULL,
    teamAway varchar(255) NOT NULL,
    scoreHome INTEGER,
    scoreAway INTEGER,
    referee INTEGER,
    refereeAD INTEGER,
    refereeAD2 INTEGER,
    created datetime NOT NULL,
    creator INTEGER,
    FOREIGN KEY (teamHome) REFERENCES Team(id),
    FOREIGN KEY (referee) REFERENCES Person(id),
    FOREIGN KEY (refereeAD) REFERENCES Person(id),
    FOREIGN KEY (refereeAD2) REFERENCES Person(id)
    FOREIGN KEY (creator) REFERENCES Person(id)
)