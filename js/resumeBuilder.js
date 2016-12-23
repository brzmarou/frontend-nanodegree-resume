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

var cen = {
	"workEmployer" : "Centrum Edukacji Nauczycieli w Gdańsku",
	"workTitle" : "Specjalista ds. e-learningu",
	"workDates" : "2014-2015",
	"workLocation" : "Gdańsk, Polska",
	"workDescription" : "administracja systemami, tworzenie e-learningu, programowanie"
}

var gdk = {
	"workEmployer" : "Gdański Dom Książki w Gdańsku",
	"workTitle" : "informatyk",
	"workDates" : "2013",
	"workLocation" : "Gdańsk, Polska",
	"workDescription" : "administracja systemami, e-marketing"
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContactInfo = HTMLemail.replace("%data%", bio.contactInfo);
var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMassage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMassage);

var formattedSkills1 = HTMLskills.replace("%data%", bio.skills[0]);
var formattedSkills2 = HTMLskills.replace("%data%", bio.skills[1]);
var formattedSkills3 = HTMLskills.replace("%data%", bio.skills[2]);
var formattedSkills4 = HTMLskills.replace("%data%", bio.skills[3]);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#footerContacts").prepend(formattedContactInfo);
$("#header").append(formattedPictureURL);
$("#header").append(formattedWelcomeMassage);
$("#header").append(HTMLskillsStart);
$("#header").append(formattedSkills1);
$("#header").append(formattedSkills2);
$("#header").append(formattedSkills3);
$("#header").append(formattedSkills4);

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", cen.workEmployer));
$("#workExperience").append(HTMLworkTitle.replace("%data%", cen.workTitle));
$("#workExperience").append(HTMLworkDates.replace("%data%", cen.workDates));
$("#workExperience").append(HTMLworkLocation.replace("%data%", cen.workLocation));
$("#workExperience").append(HTMLworkDescription.replace("%data%", cen.workDescription));

$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", gdk.workEmployer));
$("#workExperience").append(HTMLworkTitle.replace("%data%", gdk.workTitle));
$("#workExperience").append(HTMLworkDates.replace("%data%", gdk.workDates));
$("#workExperience").append(HTMLworkLocation.replace("%data%", gdk.workLocation));
$("#workExperience").append(HTMLworkDescription.replace("%data%", gdk.workDescription));





