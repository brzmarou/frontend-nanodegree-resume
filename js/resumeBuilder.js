/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {

	"name" : "Mariusz Brzostek",
	"role" : "Web Developer",
	"contact info" : "a@b.c",
	"picture URL" : "jakis adres",
	"welcome massage" : " powitalna wiadomość",
	"skills": ["programowanie", "Pozycjonowanie stron", "wordpress"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedContactInfo);
$("#header").prepend(pictureURL);
$("#header").prepend(formatedWelcomeMassage);
$("#header").prepend(formatedSkills);