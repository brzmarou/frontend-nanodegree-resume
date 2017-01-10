/*
This is empty on purpose! Your code to build the resume will go here.
 */

$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

var bio = {
	"person" : [
		{
		"name" : "Mariusz Brzostek",
		"role" : "Web Developer",
		"contactInfo" : "a@b.c",
		"pictureURL" : "http://mariuszbrzostek.pl/wp-content/uploads/2013/06/dyplom-e1378050767288.jpg",
		"welcomeMassage" : " Powitalna wiadomość!",
		"skills": ["programowanie", "Pozycjonowanie stron", "wordpress"]
		}
	]
}


var work = {
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

var projects = {
	"applications": [
		{
			"title" : " Portal CEN",
			"dates" : "2015",
			"description" : "Główny portal Centrum edukacji Nauczycieli w Gdańsku. Postawiony na Wordpressie, z wykorzystaniem Frameworka GENESIS.",
			"image" : "http://mariuszbrzostek.pl/wp-content/uploads/2013/06/dyplom-e1378050767288.jpg"
		},
		{
			"title" : " Portal CEN",
			"dates" : "2015",
			"description" : "System rejestracyjny na szkolenia Centrum edukacji Nauczycieli w Gdańsku. Postawiony na Wordpressie, z wykorzystaniem Frameworka GENESIS.",
			"image" : "http://mariuszbrzostek.pl/wp-content/uploads/2013/06/dyplom-e1378050767288.jpg"

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

var formattedSkills = [];
for(var i=0; i<bio.person[0].skills.length; i++) {
	 formattedSkills[i] = HTMLskills.replace("%data%", bio.person[0].skills[i]);
}


$("#header").prepend(HTMLheaderRole.replace("%data%", bio.person[0].role));
$("#header").prepend(HTMLheaderName.replace("%data%", bio.person[0].name));
$("#topContacts").prepend(HTMLemail.replace("%data%", bio.person[0].contactInfo));
$("#header").append(HTMLbioPic.replace("%data%", bio.person[0].pictureURL));
$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.person[0].welcomeMassage));

if(bio.person[0].skills.length > 0) {	
	$("#header").append(HTMLskillsStart);
	for(var i=0; i<bio.person[0].skills.length; i++) {
		$("#skills").append(formattedSkills[i]);
	}
}
/*
for(var i=0; i < work.companies.length; i++) {
$("#workExperience").append(HTMLworkStart);
$("#workExperience").append(HTMLworkEmployer.replace("%data%", work.companies[i].workEmployer));
$("#workExperience").append(HTMLworkTitle.replace("%data%", work.companies[i].workTitle));
$("#workExperience").append(HTMLworkDates.replace("%data%", work.companies[i].workDates));
$("#workExperience").append(HTMLworkLocation.replace("%data%", work.companies[i].workLocation));
$("#workExperience").append(HTMLworkDescription.replace("%data%", work.companies[i].workDescription));
}*/

for (key in work.companies) {
	$("#workExperience").append(HTMLworkStart);
	$("#workExperience").append(HTMLworkDates.replace("%data%", work.companies[key].workDates));
    $("#workExperience").append(HTMLworkLocation.replace("%data%", work.companies[key].workLocation));
    $("#workExperience").append(HTMLworkDescription.replace("%data%", work.companies[key].workDescription));
    var formatedEmployer = HTMLworkEmployer.replace("%data%", work.companies[key].workEmployer);
    var formatedTitle = HTMLworkTitle.replace("%data%", work.companies[key].workTitle)
    var formatedEmployerTitle = formatedEmployer + formatedTitle;
    $(".work-entry:last").append(formatedEmployerTitle);
}

for(var i=0; i < projects.applications.length; i++) {
$("#projects").append(HTMLprojectStart);
$("#projects").append(HTMLprojectTitle.replace("%data%", projects.applications[i].title));
$("#projects").append(HTMLprojectDates.replace("%data%", projects.applications[i].dates));
$("#projects").append(HTMLprojectDescription.replace("%data%", projects.applications[i].description));
$("#projects").append(HTMLprojectImage.replace("%data%", projects.applications[i].image));
}

for(var i=0; i < education.schools.length; i++) {
$("#education").append(HTMLschoolStart);
$("#education").append(HTMLschoolName.replace("%data%", education.schools[i].name));
$("#education").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
$("#education").append(HTMLschoolDates.replace("%data%", education.schools[i].years));
$("#education").append(HTMLschoolLocation.replace("%data%", education.schools[i].city));
$("#education").append(HTMLschoolMajor.replace("%data%", education.schools[i].major));
}
