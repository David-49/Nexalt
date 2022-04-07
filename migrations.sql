CREATE TYPE user_type AS ENUM ('Alternant', 'Entreprise', 'Administrateur');

DROP TABLE User_tab

CREATE TABLE IF NOT EXISTS User_tab 
(
	user_id BIGSERIAL NOT NULL PRIMARY KEY,
	first_name VARCHAR(105) NOT NULL,
	last_name VARCHAR(105) NOT NULL,
	email VARCHAR(320) UNIQUE,
	user_type_selected user_type NOT NUL,
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS Student 
(
	student_id BIGSERIAL NOT NULL PRIMARY KEY,
	phone_number VARCHAR(15),
	birthdate DATE,
	title VARCHAR(220),
	description TEXT,
	search_area VARCHAR(80),
	FOREIGN KEY (user_id) REFERENCES User_tab (user_id)
)

CREATE TABLE IF NOT EXISTS Account
(
	account_id BIGSERIAL NOT NULL PRIMARY KEY,
	"type" VARCHAR(15),
	provider VARCHAR(25),
	providerAccountId VARCHAR(255),
	refresh_token VARCHAR(255),
	exprire_at TIMESTAMP,
	token_type VARCHAR(255),
	id_token VARCHAR(255),
	session_state VARCHAR(255),
	oauth_token_secret VARCHAR(255),
	oauth_token VARCHAR(255),
	FOREIGN KEY (user_id) REFERENCES User_tab (user_id)
)

CREATE TABLE IF NOT EXISTS Session
(
	session_id BIGSERIAL NOT NULL PRIMARY KEY,
	expires TIMESTAMP,
	sessionToken VARCHAR(255),
	FOREIGN KEY (user_id) REFERENCES User_tab (user_id)
)

CREATE TABLE IF NOT EXISTS VerificationToken
(
	identifier BIGSERIAL NOT NULL,
	"token" VARCHAR(255),
	expires TIMESTAMP
)

CREATE TYPE contract_type AS ENUM ('CDI', 'Indépendant', 'CDD', 'Altertant', 'Freelance', 'Intermittent du spectable', 'CDI temps partiel', 'Stage', 'Service civique', 'CDD temps partiel', 'Fonctionnaire', 'Intérimaire' )

CREATE TABLE IF NOT EXISTS Experience
(
	id_experience BIGSERIAL NOT NULL PRIMARY KEY,
	job_name VARCHAR(100),
	company_name VARCHAR(60),
	contract_type_selected contract_type,
	start_date DATE NOT NULL,
	end_date DATE,
	description TEXT,
	localization VARCHAR(80),
	FOREIGN KEY (id_student) REFERENCES Student (id_student)
)

CREATE TABLE IF NOT EXISTS Formation 
(
	formation_id BIGSERIAL NOT NULL PRIMARY KEY,
	school_name VARCHAR(90),
	school_degree VARCHAR(50),
	stuty_context VARCHAR(90),
	description TEXT,
	start_date DATE,
	end_date DATE,
	FOREIGN KEY (student_id) REFERENCES Student (student_id)
)

CREATE TABLE IF NOT EXISTS Student_skill
(	
	FOREIGN KEY (student_id) REFERENCES Student (student_id)
	FOREIGN KEY (skill_id) REFERENCES Skill (skill_id)
)

CREATE TABLE IF NOT EXISTS Skill
(
	skill_id BIGSERIAL NOT NULL PRIMARY KEY,
	skill_name VARCHAR(50)
)

CREATE TABLE IF NOT EXISTS Employer
(
	employer_id BIGSERIAL NOT NULL PRIMARY KEY,
	company_name VARCHAR(90),
	siret: Int NOT NULL UNIQUE,
	localization VARCHAR(90),
)

CREATE TABLE IF NOT EXISTS Files
(
	file_id BIGSERIAL NOT NULL PRIMARY KEY,
	url VARCHAR(2048),
	file_name VARCHAR(256),
	file_mime VARCHAR(5),
	tag VARCHAR(70),
	uploaded_at TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES User_tab (user_id),
	FOREIGN KEY (student_id) REFERENCES Student (student_id),
	FOREIGN KEY (message_id) REFERENCES Messages (message_id),
	FOREIGN KEY (portfolio_id) REFERENCES Messages (portfolio_id),
	FOREIGN KEY (post_id) REFERENCES Post (post_id)
)

CREATE TABLE IF NOT EXISTS Portfolio
(
	portfolio_id BIGSERIAL NOT NULL PRIMARY KEY,
	title VARCHAR(100),
	description TEXT,
	FOREIGN KEY (student_id) REFERENCES Student (student_id)
)

CREATE TABLE IF NOT EXISTS Messages
(
	message_id BIGSERIAL NOT NULL PRIMARY KEY,
	from_id BIGSERIAL NOT NULL,
	to_id BIGSERIAL NOT NULL,
	msg_content TEXT NOT NULL,
	send_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	is_seen BOOLEAN
)

CREATE TABLE IF NOT EXISTS Chat
(
	chat_id BIGSERIAL NOT NULL PRIMARY KEY,
	first_user_id BIGINT NOT NULL,
	second_user_id BIGINT NOT NULL,
	chat_name VARCHAR(30),
	created_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS Comment_post
(
	comment_post_id BIGSERIAL NOT NULL PRIMARY KEY,
	comment_parent_id BIGINT NOT NULL,
	comment_content TEXT NOT NULL,
	published_date TIMESTAMP NOT NULL,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

CREATE TABLE IF NOT EXISTS Post
(
	post_id BIGSERIAL NOT NULL PRIMARY KEY,
	title VARCHAR(100) NOT NULL,
	post_content TEXT NOT NULL,
	created_at TIMESTAMP NOT NULL,
	published_at TIMESTAMP NOT NULL,
	updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (user_id) REFERENCES User_tab (user_id)
)

CREATE TABLE IF NOT EXISTS Caterogy
(
	category_id BIGSERIAL NOT NULL PRIMARY KEY,
	category_label VARCHAR(50) NOT NULL,
	FOREIGN KEY (post_id) REFERENCES Post (post_id)
)

CREATE TABLE IF NOT EXISTS Liked
(
	liked_id BIGSERIAL NOT NULL PRIMARY KEY,
	liked_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY (post_id) REFERENCES Post (post_id),
	FOREIGN KEY (user_id) REFERENCES User_tab (user_id),
	FOREIGN KEY (comment_id) REFERENCES Comment_post (comment_id),
	FOREIGN KEY (student_id) REFERENCES Student (student_id),
	FOREIGN KEY (employer_id) REFERENCES Employer (employer_id),
	
)
