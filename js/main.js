//WD2_2021
//ANA ISABEL TEIXEIRA
//DESAFIO_03#

console.log(":)");

//check for page readiness

$(document).ready(function () {
  init();
});
				  
function init() {
	console.log('jQuery ready and document fully loaded');
}

//start of jQuery functions
//DESAFIO PART 1: access an element and change TEXT and CSS .text() .css()

titulo = $("h1");

titulo.click(function () {
	titulo.fadeOut(function () {
		titulo.text(($(titulo).text() == 'Sad Things Happened to Baby Jane.') ? 'What Ever Happened to Baby Jane?' : 'Sad Things Happened to Baby Jane.').fadeIn();
		titulo.css("color" ,"blue" );
	})
});

//DESAFIO PART 2: hide and show p with h2 click

subtitulos = $("h2");

subtitulos.on("click", fadePara);

function fadePara() {
  $(this).next().fadeToggle(1000);
}

//DESAFIO PART 2:  slide-in nav
//DESAFIO PART 2:  clicking cast titles will open cast members names one by one (chaining)

maincast = $("#maincast");
secondarycast = $("#secondarycast");
maincastitem = $(".maincastitem");
secondarycastitem = $(".secondarycastitem");

maincastitem.hide();
secondarycastitem.hide();

maincast.on("click", function() {
  maincastitem.each(function (i) {
    $(this).delay(i * 750).fadeToggle(750);
  });
});

secondarycast.on("click", function() {
  secondarycastitem.each(function (i) {
    $(this).delay(i * 750).fadeToggle(750);
  });
});

//prepend nav

$("main").prepend("<nav><ul><li></li><li></li><li></li></ul></nav>");

//append links

$("li:nth-child(1)").append("<a href='#plot'>Plot</a>");
$("li:nth-child(2)").append("<a href='#cast'>Cast</a>");
$("li:nth-child(3)").append("<a href='#production'>Production</a>");

// sliding in menu and fade in links

navbar = $("nav");
list = $("ul");
navbar.css("backgroundColor", "blue");
navbar.css("position", "fixed");
navbar.css("left", "0");
navbar.css("top", "30px");
navbar.css("width", "10%");
navbar.css("height", "13%");
navbar.css("lineHeight", "1.5");
navbar.css("margin", "0");
navbar.css("borderRadius", "0 20px 20px 0");
navbar.hide();

list.css("width", "200px");
list.css("listStyleType", "none");
list.css("position", "absolute");
list.css("left", "0");
list.css("top", "0");
list.hide();

menu = $("button");

menu.on("click", function() {
	navbar.animate({width: "toggle"}, 1500);
	list.delay(500).animate({ opacity: "toggle"}, 500).delay;
});
