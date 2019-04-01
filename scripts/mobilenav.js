var navitems = ["mobile-nav-header", "Home", "Maps", "Places", "Food", "Transit", "Attire"];

function opennav()
{
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	document.getElementById("mobile-nav-items").style.display = "block";
	var openSpeed = 1;
	var speed = 0.4;
	for (i = 0; i < navitems.length; i++)
	{ 
		document.getElementById(navitems[i]).style.animation = "slide-in " + openSpeed * speed + "s";
		speed += 0.1;
	}

	setTimeout(function()
	{
		document.getElementById("index-scrollable-area").style.display = "none";
	}, openSpeed * 1000);
}

function closenav()
{
	document.getElementById("index-scrollable-area").style.display = "block";
	document.getElementsByTagName("body")[0].style.overflow = "auto";
	document.getElementById("mobile-nav-header").style.animation = "slide-out " + closeSpeed * 1 + "s";
	var closeSpeed = 2;
	var speed = 1;
	for (i = 0; i < navitems.length; i++)
	{ 
		document.getElementById(navitems[i]).style.animation = "slide-out " + closeSpeed * speed + "s";
		speed -= 0.1;
	}

	setTimeout(function()
	{
		document.getElementById("mobile-nav-items").style.display = "none";
	}, (closeSpeed * .15) * 1000);
}