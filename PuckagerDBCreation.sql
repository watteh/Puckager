/****************************************************************************************************************************************
** Filename: PuckagerDBCreation.sql
** Description: Script to create Puckager database for use with DGF Scouting Application
** Author: David Gwyn
** Date Last Updated: 2018-11-21
*****************************************************************************************************************************************
** Change History
*****************************************************************************************************************************************
**	VER		Date			Author					Description
**	---		----------		-----------------		------------------------------------------------------------------------------------
**	1.0		2018-11-21		David G.				Initial script creation to create database and consistent data population
*****************************************************************************************************************************************/

/* Create Puckager Tables and Relationships */

CREATE TABLE Account(
	AccountID int NOT NULL IDENTITY(1,1), 
	UserName varchar(20) NOT NULL,
	Password varchar(12) NOT NULL,
	EmailAddress varchar(50)NOT NULL,
	AccountType varchar(1)
	PRIMARY KEY(AccountID));

CREATE TABLE Recruit(
	RecruitID int NOT NULL IDENTITY(1,1),
	FirstName varchar(50) NOT NULL,
	LastName varchar(50) NOT NULL,
	ContactNumber varchar(20) NOT NULL,
	EmailAddress varchar(50) NOT NULL,
	BirthYear int NOT NULL,
	GraduationYear int NOT NULL,
	CurrentTeam varchar(50),
	JerseyNumber int,
	Position varchar(20) NOT NULL,
	MothersName varchar(50),
	FathersName varchar(50),
	Status varchar(20),
	DateAdded date,
	PRIMARY KEY (RecruitID));

CREATE TABLE PlayerScoutingReport(
	PlayerScoutingReportID int NOT NULL IDENTITY(1,1),
	RecruitID int NOT NULL,
	AccountID int NOT NULL,
	Skating int NOT NULL,
	IndividualOffensiveSkills int NOT NULL,
	IndividualDefensiveSkills int NOT NULL,
	OffensiveTeamPlay int NOT NULL,
	DefensiveTeamPlay int NOT NULL,
	HockeySense int NOT NULL,
	StrengthPower int NOT NULL,
	WorkEthic int NOT NULL,
	OverallRanking int NOT NULL,
	Notes varchar(255),
	ScoutingReportDate date NOT NULL,
	PRIMARY KEY (PlayerScoutingReportID),
	FOREIGN KEY (RecruitID) REFERENCES Recruit(RecruitID),
	FOREIGN KEY (AccountID) REFERENCES Account(AccountID));

CREATE TABLE GoalieScoutingReport(
	GoalieScoutingReportID int NOT NULL IDENTITY(1,1),
	RecruitID int NOT NULL,
	AccountID int NOT NULL,
	Skating int NOT NULL,
	AgilitySpeed int NOT NULL,
	TrafficReboundControl int NOT NULL,
	HockeySense int NOT NULL,
	StrengthFitness int NOT NULL,
	MentalToughness int NOT NULL,
	BattleMentality int NOT NULL,
	OverallRanking int NOT NULL,
	Notes varchar(255),
	ScoutingReportDate date NOT NULL,
	PRIMARY KEY (GoalieScoutingReportID),
	FOREIGN KEY (RecruitID) REFERENCES Recruit(RecruitID),
	FOREIGN KEY (AccountID) REFERENCES Account(AccountID));


/* Populate Account Table with accounts for Administrator, Coach, Scout, and Scheduler */

INSERT INTO Account (Username, Password, EmailAddress, AccountType) VALUES ('admin', 'dgfadmin123', 'admin@dgf.com', 1)
INSERT INTO Account (Username, Password, EmailAddress, AccountType) VALUES ('coach', 'dgfcoach321', 'coach@dgf.com', 2);
INSERT INTO Account (Username, Password, EmailAddress, AccountType) VALUES ('scout', 'dgfscout456', 'scout@dgf.com', 3);
INSERT INTO Account (Username, Password, EmailAddress, AccountType) VALUES ('scheduler', 'dgfsched654', 'scheduler@dgf.com', 4);


/* Populate Recruit Table with recruits for all positions (Goale, Forwards, Defenceman) */

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Teaghan', 'MacRae', '(905) 778-9158', 'tmacrae@gmail.com', 2003, 2021, 'NYS BAA', 5, 'Defenceman', 'Stephanie', 'Kevin', 'Available', '2018-10-16');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Victoria', 'Bullock', '(905) 201-0573', 'vbullock@gmail.com', 2002, 2020, 'Toronto MAA', 28, 'Forward', 'Scott', 'Deborah', 'Not Interested', '2018-09-18');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Logan', 'Biggs', '(416) 237-1254', 'lbiggs@gmail.com', 2002, 2020, 'Toronto MAA', 16, 'Forward', 'Joe Duz', 'Erin Biggs', 'Committed', '2018-05-01');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Emma', 'Catalano', '(647) 223-6037', 'ecatalano@gmail.com', 2002, 2020, 'Toronto MAA', 80, 'Goalie', '', 'Anna', 'Committed', '2018-11-21');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Alexa', 'Feasby', '(905) 640-0895', 'afeasby@gmail.com', 2001, 2019, 'Toronto MAA', 14, 'Defenceman', 'Mike', 'Lindsay', 'Unavailable', '2018-05-01');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Gillian', 'Miller', '(905) 338-5038', 'gmiller@gmail.com', 2002, 2020, 'Toronto MAA', 90, 'Forward', 'Andrew', 'Sherri', 'Available', '2018-02-18');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Marie', 'Morfidis-Toporowski', '(647) 632-9292', 'mmorfidistoporowski@gmail.com', 2002, 2020, 'Toronto MAA', 92, 'Defenceman', 'Erifili Morfidis', 'Don Toporowski', 'Available', '2018-01-03');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Bailey', 'Oakes', '(905) 313-8740', 'bailoakes@gmail.com', 2003, 2021, 'NYS BAA', 77, 'Defenceman', 'Steve', 'Denise', 'Committed', '2018-08-20');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Brooklyn', 'Oakes', '(905) 313-8740', 'brookoakes@gmail.com', 2004, 2022, 'NYS BAA', 37, 'Goalie', 'Steve', 'Denise', 'Not Interested', '2018-07-06');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Cailey', 'Davis', '(289) 716-7156', 'cdavis@gmail.com', 2003, 2021, 'NYS BAA', 17, 'Forward', 'Ben', 'Jackie', 'Available', '2018-09-17');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Michaela', 'Lio', '(416) 743-2564', 'mlio@gmail.com', 2003, 2021, 'NYS BAA', 71, 'Forward', 'Marcello', 'Antonetta', 'Available', '2018-05-29');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Cameron', 'Sikitch', '(905) 881-5455', 'csititch@gmail.com', 2003, 2021, 'NYS BAA', 7, 'Defenceman', 'Blaine', 'Michele', 'Available', '2018-03-25');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Isabel', 'Wunder', '(416) 787-2777', 'iwunder@gmail.com', 2003, 2021, 'NYS BAA', 9, 'Forward', 'Michael', 'Joanna Wunder', 'Committed', '2018-08-17');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Caitlin', 'Hollands', '(647) 391-1098', 'chollands@gmail.com', 2003, 2021, 'Markham BAA', 95, 'Forward', 'Kevin', 'Pamela', 'Not Interested', '2018-02-01');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Olivia', 'Pridham', '(905) 642-9303', 'opridham@gmail.com', 2003, 2021, 'Markham BAA', 61, 'Defenceman', 'Brandon', 'Sue', 'Available', '2018-09-03');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Emily', 'Smyth', '(905) 430-8080', 'esmythe@gmail.com', 2002, 2020, 'Whitby MAA', 48, 'Forward', 'Todd', 'Pamela', 'Available', '2018-10-15');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Sophie', 'Hudson', '(647) 668-4424', 'shudson@gmail.com', 2003, 2021, 'Mississauga BAA', 94, 'Forward', 'Dave', 'Catherine', 'Available', '2018-10-31');

INSERT INTO Recruit (FirstName, LastName, ContactNumber, EmailAddress, BirthYear, GraduationYear, CurrentTeam, JerseyNumber, Position, MothersName, FathersName, Status, DateAdded)
VALUES ('Lauren', 'Kadar', '(514) 344-0037', 'lkadar@gmail.com', 2003, 2022, 'LCC Lions Boys', 11, 'Forward', 'Steven', 'Deborah Voronoff', 'Not Interested', '2018-07-15');

/* Populate GoalieScoutingReport table with scouting reports for RecruitID's 9 and 4 */

INSERT INTO GoalieScoutingReport (RecruitID, AccountID, Skating, AgilitySpeed, TrafficReboundControl, HockeySense, StrengthFitness, MentalToughness, BattleMentality, OverallRanking, Notes, ScoutingReportDate)
VALUES (9, 2, 3, 3, 3, 3, 3, 4, 3, 3, 'Will be ready in 2020-21.', '2018-11-21');

INSERT INTO GoalieScoutingReport (RecruitID, AccountID, Skating, AgilitySpeed, TrafficReboundControl, HockeySense, StrengthFitness, MentalToughness, BattleMentality, OverallRanking, Notes, ScoutingReportDate)
VALUES (4, 3, 3, 3, 4, 3, 3, 4, 4, 4, 'Two year MAA player, ready for Juniors in 2019-20.', '2018-10-10');

/* Populate PlayerScoutingReport table with player scouting reports for RecruitID's 1, 7, 10, and 13 */

INSERT INTO PlayerScoutingReport (RecruitID, AccountID, Skating, IndividualOffensiveSkills, IndividualDefensiveSkills, OffensiveTeamPlay, DefensiveTeamPlay, HockeySense, StrengthPower, WorkEthic, OverallRanking, Notes, ScoutingReportDate)
VALUES (1, 2, 4, 4, 3, 4, 3, 3, 3, 3, 3, 'Strength and power needs work.', '2018-09-18');

INSERT INTO PlayerScoutingReport (RecruitID, AccountID, Skating, IndividualOffensiveSkills, IndividualDefensiveSkills, OffensiveTeamPlay, DefensiveTeamPlay, HockeySense, StrengthPower, WorkEthic, OverallRanking, Notes, ScoutingReportDate)
VALUES (7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 'Fitness needs improvement, simplify game as well.', '2018-10-31');

INSERT INTO PlayerScoutingReport (RecruitID, AccountID, Skating, IndividualOffensiveSkills, IndividualDefensiveSkills, OffensiveTeamPlay, DefensiveTeamPlay, HockeySense, StrengthPower, WorkEthic, OverallRanking, Notes, ScoutingReportDate)
VALUES (13, 2, 3, 4, 3, 4, 3, 4, 3, 3, 4, 'Goal scorer, leads MAA team this season.', '2018-11-01');

INSERT INTO PlayerScoutingReport (RecruitID, AccountID, Skating, IndividualOffensiveSkills, IndividualDefensiveSkills, OffensiveTeamPlay, DefensiveTeamPlay, HockeySense, StrengthPower, WorkEthic, OverallRanking, Notes, ScoutingReportDate)
VALUES (10, 3, 3, 4, 3, 4, 3, 4, 3, 3, 3, 'Hockey player through and through, needs to improve compete level.', '2018-09-18');