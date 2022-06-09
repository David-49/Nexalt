DROP TYPE IF EXISTS userType CASCADE;
CREATE TYPE userType AS ENUM ('Alternant', 'Entreprise', 'Administrateur');

DROP TABLE IF EXISTS UserAccount CASCADE;

CREATE TABLE IF NOT EXISTS UserAccount 
(
	userId BIGSERIAL NOT NULL PRIMARY KEY,
	firstName VARCHAR(105) NOT NULL,
	lastName VARCHAR(105) NOT NULL,
	email VARCHAR(320) UNIQUE NOT NULL,
	userTypeSelected userType NOT NULL,
	createdAt TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS Student CASCADE;

CREATE TABLE IF NOT EXISTS Student 
(
	studentId BIGSERIAL NOT NULL PRIMARY KEY,
	userId BIGINT,
	phoneNumber VARCHAR(15),
	birthdate DATE,
	title VARCHAR(220),
	description TEXT,
	searchArea VARCHAR(80),
	FOREIGN KEY (userId) REFERENCES UserAccount (userId)
);

DROP TYPE IF EXISTS contractType CASCADE;
CREATE TYPE contractType AS ENUM ('CDI', 'Indépendant', 'CDD', 'Altertant', 'Freelance', 'Intermittent du spectable', 'CDI temps partiel', 'Stage', 'Service civique', 'CDD temps partiel', 'Fonctionnaire', 'Intérimaire' );

DROP TABLE IF EXISTS Experience;
CREATE TABLE IF NOT EXISTS Experience
(
	experienceId BIGSERIAL NOT NULL PRIMARY KEY,
	studentId BIGINT,
	jobName VARCHAR(100),
	companyName VARCHAR(60),
	contractTypeSelected contractType,
	startDate DATE NOT NULL,
	endDate DATE,
	description TEXT,
	localization VARCHAR(80),
	FOREIGN KEY (studentId) REFERENCES Student (studentId)
);

DROP TABLE IF EXISTS Formation;
CREATE TABLE IF NOT EXISTS Formation 
(
	formationId BIGSERIAL NOT NULL PRIMARY KEY,
	studentID BIGINT,
	schoolName VARCHAR(90),
	schoolDegree VARCHAR(50),
	stutyContext VARCHAR(90),
	description TEXT,
	startDate DATE,
	endDate DATE,
	FOREIGN KEY (studentId) REFERENCES Student (studentId)
);

DROP TABLE IF EXISTS Skill CASCADE;
CREATE TABLE IF NOT EXISTS Skill
(
	skillId BIGSERIAL NOT NULL PRIMARY KEY,
	skillName VARCHAR(50)
);


DROP TABLE IF EXISTS StudentSkill;
CREATE TABLE IF NOT EXISTS StudentSkill
(	
	studentId BIGINT,
	skillId BIGINT,
	FOREIGN KEY (studentId) REFERENCES Student (studentId),
	FOREIGN KEY (skillId) REFERENCES Skill (skillId)
);

DROP TABLE IF EXISTS Employer CASCADE;
CREATE TABLE IF NOT EXISTS Employer
(
	employerId BIGSERIAL NOT NULL PRIMARY KEY,
	companyName VARCHAR(90),
	siret BIGINT NOT NULL UNIQUE,
	localization VARCHAR(90)
);

DROP TABLE IF EXISTS Porfolio CASCADE;
CREATE TABLE IF NOT EXISTS Portfolio
(
	portfolioId BIGSERIAL NOT NULL PRIMARY KEY,
	studentId BIGINT,
	title VARCHAR(100),
	description TEXT,
	FOREIGN KEY (studentId) REFERENCES Student (studentId)
);

DROP TABLE IF EXISTS Messages CASCADE;
CREATE TABLE IF NOT EXISTS Messages
(
	messageId BIGSERIAL NOT NULL PRIMARY KEY,
	fromId BIGINT NOT NULL,
	toId BIGINT NOT NULL,
	msgContent TEXT NOT NULL,
	sendAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	isSeen BOOLEAN
);

DROP TABLE IF EXISTS Chat;
CREATE TABLE IF NOT EXISTS Chat
(
	chatId BIGSERIAL NOT NULL PRIMARY KEY,
	firstUserId BIGINT NOT NULL,
	secondUserId BIGINT NOT NULL,
	chatName VARCHAR(30),
	createdAt TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS CommentPost CASCADE;
CREATE TABLE IF NOT EXISTS CommentPost
(
	commentPostId BIGSERIAL NOT NULL PRIMARY KEY,
	commentParentId BIGINT NOT NULL,
	commentContent TEXT NOT NULL,
	publishedDate TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS Post CASCADE;
CREATE TABLE IF NOT EXISTS Post
(
	postId BIGSERIAL NOT NULL PRIMARY KEY,
	userId BIGINT,
	title VARCHAR(100) NOT NULL,
	postContent TEXT NOT NULL,
	createdAt TIMESTAMP NOT NULL,
	publishedAt TIMESTAMP NOT NULL,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (userId) REFERENCES UserAccount (userId)
);

DROP TABLE IF EXISTS Category CASCADE;
CREATE TABLE IF NOT EXISTS Caterogy
(
	categoryId BIGSERIAL NOT NULL PRIMARY KEY,
	postId BIGINT,
	categoryLabel VARCHAR(50) NOT NULL,
	FOREIGN KEY (postId) REFERENCES Post (postId)
);

DROP TABLE IF EXISTS Files;
CREATE TABLE IF NOT EXISTS Files
(
	fileId BIGSERIAL NOT NULL PRIMARY KEY,
	userId BIGINT,
	studentId BIGINT,
	portfolioId BIGINT,
	postId BIGINT,
	messageId BIGINT,
	url VARCHAR(2048),
	fileName VARCHAR(256),
	fileMime VARCHAR(5),
	tag VARCHAR(70),
	uploadedAt TIMESTAMP,
	FOREIGN KEY (userId) REFERENCES UserAccount (userId),
	FOREIGN KEY (studentId) REFERENCES Student (studentId),
	FOREIGN KEY (messageId) REFERENCES Messages (messageId),
	FOREIGN KEY (portfolioId) REFERENCES Portfolio (portfolioId),
	FOREIGN KEY (postId) REFERENCES Post (postId)
);


DROP TABLE IF EXISTS Liked;
CREATE TABLE IF NOT EXISTS Liked
(
	likedId BIGSERIAL NOT NULL PRIMARY KEY,
	postId BIGINT,
	userId BIGINT,
	commentPostId BIGINT,
	studentId BIGINT,
	employerId BIGINT,
	likedDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (postId) REFERENCES Post (postId),
	FOREIGN KEY (userId) REFERENCES UserAccount (userId),
	FOREIGN KEY (commentPostId) REFERENCES CommentPost (commentPostId),
	FOREIGN KEY (studentId) REFERENCES Student (studentId),
	FOREIGN KEY (employerId) REFERENCES Employer (employerId)
);
