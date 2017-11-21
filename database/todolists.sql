CREATE TABLE todolist(
  todoListID INTEGER PRIMARY KEY AUTOINCREMENT,
  list TEXT NOT NULL,
  likes INTEGER,
  uID INTEGER REFERENCES user(userID)
);


CREATE TABLE user (
	userID INTEGER PRIMARY KEY AUTOINCREMENT,
  username VARCHAR NOT NULL UNIQUE,
	fullName VARCHAR,
  email VARCHAR, 
	birthDate VARCHAR,
	photoId VARCHAR,
	gender VARCHAR,
  password VARCHAR NOT NULL
);

CREATE TABLE comments (
	commentID INTEGER PRIMARY KEY AUTOINCREMENT,
	comment TEXT,
	date VARCHAR,
	likes INTEGER,
  uID INTEGER REFERENCES user(userID),
  lID INTEGER REFERENCES todolist(todoListID)
);