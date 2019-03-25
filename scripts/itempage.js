var itempage;

function loaditem(item)
{
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	itempage.style.display = "block";
	itempage.style.animation = "itempage-slide-in " + .5 + "s ease-in-out";
}

function hideitem()
{
	itempage.style.animation = "itempage-slide-out " + .25 + "s ease-in-out";
	setTimeout(function()
	{
		document.getElementsByTagName("body")[0].style.overflow = "auto"
		itempage.style.display = "none";
	}, 240);
}

// run when the page is ready
window.onload = function()
{
	itempage = document.getElementById('item-info');
}