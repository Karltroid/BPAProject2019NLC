var openSpeed = 1;
var closeSpeed = 2;
var navitems = ["mobile-nav-header", "Home", "Maps", "Places", "Food", "Transit", "Attire"];

function opennav()
{
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	document.getElementById("mobile-nav-items").style.display = "block";
	var speed = 0.4;
	for (i = 0; i < navitems.length; i++)
	{ 
		document.getElementById(navitems[i]).style.animation = "slide-in " + openSpeed * speed + "s";
		console.log("navitems[" + i + "].style.animation = 'slide-in' + " + openSpeed + " * " + speed + " + 's'");
		speed += 0.1;
	}
}

function closenav()
{
	document.getElementsByTagName("body")[0].style.overflow = "auto";
	document.getElementById("mobile-nav-header").style.animation = "slide-out " + closeSpeed * 1 + "s";
	var speed = 1;
	for (i = 0; i < navitems.length; i++)
	{ 
		document.getElementById(navitems[i]).style.animation = "slide-out " + closeSpeed * speed + "s";
		console.log("navitems[" + i + "].style.animation = 'slide-out' + " + closeSpeed + " * " + speed + " + 's'");
		speed -= 0.1;
	}

	setTimeout(hide, ((closeSpeed * .1) * 1000));
}

function hide()
{
	document.getElementById("mobile-nav-items").style.display = "none";
}