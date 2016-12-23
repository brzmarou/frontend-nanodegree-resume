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

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedContactInfo = HTMLemail.replace("%data%", bio.contactInfo);

var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);

var formattedWelcomeMassage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMassage);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#footerContacts").prepend(formattedContactInfo);
$("#header").append(formattedPictureURL);
$("#header").append(formattedWelcomeMassage);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills);