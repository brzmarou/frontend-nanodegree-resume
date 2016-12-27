/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {

	"name" : "Mariusz Brzostek",
	"role" : "Web Developer",
	"contactInfo" : "a@b.c",
	"pictureURL" : "http://mariuszbrzostek.pl/wp-content/uploads/2013/06/dyplom-e1378050767288.jpg",
	"welcomeMassage" : " Powitalna wiadomość!",
	"skills": ["programowanie", "Pozycjonowanie stron", "wordpress"]
};


work = {
	"companies" : [
		{
			"workEmployer" : "Centrum Edukacji Nauczycieli w Gdańsku",
			"workTitle" : "Specjalista ds. e-learningu",
			"workDates" : "2014-2015",
			"workLocation" : "Gdańsk, Polska",
			"workDescription" : "administracja systemami, tworzenie e-learningu, programowanie"
			},
			{
			"workEmployer" : "Gdański Dom Książki w Gdańsku",
			"workTitle" : "informatyk",
			"workDates" : "2013",
			"workLocation" : "Gdańsk, Polska",
			"workDescription" : "administracja systemami, e-marketing"
			}
		]
}
var education = {
	"schools":[ 
		{
			"name" : " WSZ w Gdańsku",
			"degree" : "inżynier",
			"years" : "2004 - 2008",
			"city" : "Gdańsk,Polska",
			"major" : "sieci komputerowe i systemy rozproszone"
		},
		{
			"name" : " AM w Gdynii",
			"degree" : "magister",
			"years" : "2008 - 2012",
			"city" : "Gdynia,Polska",
			"major" : "zarządzanie e-biznesem"
		}
	]

}
/*bracet notification
var education = {}

education["name"] = "WSZ";
education["years"] = "2008-2012";
education["city"] = "Gdańsk, Polska";
*/

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContactInfo = HTMLemail.replace("%data%", bio.contactInfo);
var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMassage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMassage);

var formattedSkillsTemp = [];
for(var i=0; i<bio.skills.length; i++) {
	 formattedSkills[i] = HTMLskills.replace("%data%", bio.skills[i]);
}

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#footerContacts").prepend(formattedContactInfo);
$("#header").append(formattedPictureURL);
$("#header").append(formattedWelcomeMassage);
$("#header").append(HTMLskillsStart);
for(var i=0; i<bio.skills.length; i++) {
	$("#header").append(formattedSkills[i]);
}

for(var i=0; i < education.schools.length; i++) {
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.companies[i].workEmployer));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work.companies[i].workTitle));
$("#workExperience").append(HTMLworkDates.replace("%data%", work.companies[i].workDates));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work.companies[i].workLocation));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work.companies[i].workDescription));
}

for(var i=0; i < education.schools.length; i++) {
$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", education.schools[i].name));
$("#education").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
$("#education").append(HTMLschoolDates.replace("%data%", education.schools[i].years));
$("#education").append(HTMLschoolLocation.replace("%data%", education.schools[i].city));
$("#education").append(HTMLschoolMajor.replace("%data%", education.schools[i].major));
}
