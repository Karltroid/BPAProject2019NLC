var itempage, itemgallery, itemextrainfo, hoursopendropdown;
var items = 
[
	[
		// food items - title, desc, site link, map, location, times, images...
		['Old Ebbitt Grill', 'Iconic tavern offering American meals, including popular oyster specials, in Victorian-style digs.', 'https://www.ebbitt.com/', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1343824091286!2d-77.03544908523939!3d38.898042179570545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553614542800', '675 15th St NW Washington, DC 20005', '<span>Sun</span> 8:30AM - 2AM', '<span>Mon</span> 7:30AM - 2AM', '<span>Tue</span> 7:30AM - 2AM', '<span>Wed</span> 7:30AM - 2AM', '<span>Thu</span> 7:30AM - 3AM', '<span>Fri</span> 7:30AM - 3AM', '<span>Sat</span> 8:30AM - 3AM', 'images/food/items/OldEbbittGrill/1.jpg', 'images/food/items/OldEbbittGrill/2.jpg', 'images/food/items/OldEbbittGrill/3.jpg', 'images/food/items/OldEbbittGrill/4.jpg', 'images/food/items/OldEbbittGrill/5.jpg'],
		['Founding Farmers DC', 'Co-op-owned American eatery dishing out market-driven comfort cuisine along with rustic-chic style.', 'https://www.wearefoundingfarmers.com/', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1305.5068409301718!2d-77.04520954436336!3d38.90029097254082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553616507715', '1924 Pennsylvania Ave NW, Washington, DC 20006', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'images/food/items/FoundingFarmersDC/1.jpg'],
		['Zaytinya DC', 'Chef José Andrés\' light, airy mainstay offers Eastern Mediterranean small plates & regional wines.', 'https://www.zaytinya.com/', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1036729506463!2d-77.02587268523934!3d38.89874447957046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553615547476', '701 9th St NW, Washington, DC 20001', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'images/food/items/ZaytinyaDC/1.jpg'],
		['Logan Tavern', 'Casual American eatry with a modern tavern feel, known for pre-theater dining & Sunday brunch. (vegan friendly)', 'https://www.logantavern.com/', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.620800172237!2d-77.0348886852389!3d38.90978597956869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553615643332', '1423 P St NW, Washington, DC 20005', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'images/food/items/LoganTavern/1.jpg']
	],
	[
		// place items - title, desc, site link, map, location, times, images...
		['Place Name', 'Place Desc', 'Map Link', 'Address', 'times','images']
	]
	
	// GOOGLE MAP LINE: Remove 1m2! to !5e0! from link
];



function loaditem(itemtype, item)
{
	// load item page info
	for (var i in items[itemtype])
	{
		if (items[itemtype][i][0] == item)
		{
			itempage.getElementsByTagName("h1")[0].innerHTML = items[itemtype][i][0];
			itempage.getElementsByTagName("p")[0].innerHTML = items[itemtype][i][1];
			itempage.getElementsByTagName("a")[0].href = items[itemtype][i][2];
			itempage.getElementsByTagName("iframe")[0].src = items[itemtype][i][3];
			itempage.getElementsByTagName("li")[0].innerHTML = items[itemtype][i][4];
			itemextrainfo.getElementsByTagName("li")[0].innerHTML = items[itemtype][i][5];
			itemextrainfo.getElementsByTagName("li")[1].innerHTML = items[itemtype][i][6];
			itemextrainfo.getElementsByTagName("li")[2].innerHTML = items[itemtype][i][7];
			itemextrainfo.getElementsByTagName("li")[3].innerHTML = items[itemtype][i][8];
			itemextrainfo.getElementsByTagName("li")[4].innerHTML = items[itemtype][i][9];
			itemextrainfo.getElementsByTagName("li")[5].innerHTML = items[itemtype][i][10];
			itemextrainfo.getElementsByTagName("li")[6].innerHTML = items[itemtype][i][11];

			for (var j = 12; j <= items[itemtype][i].length-1; j++)
			{
				var img = document.createElement("img");
				img.setAttribute("src", items[itemtype][i][j]);
				document.getElementById("item-gallery").appendChild(img);
			}
		}
	}

	// show item page and slide it up
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	itempage.style.display = "block";
	itempage.style.animation = "itempage-slide-in " + .5 + "s ease-in-out";
}

function hideitem()
{
	// slide item page down and hide it
	itempage.style.animation = "itempage-slide-out " + .25 + "s ease-in-out";
	setTimeout(function()
	{
		document.getElementsByTagName("body")[0].style.overflow = "auto"
		itempage.style.display = "none";
	}, 240);

	// unload item page' info
	itempage.getElementsByTagName("h1")[0].innerHTML = "";
	itempage.getElementsByTagName("p")[0].innerHTML = "";
	itempage.getElementsByTagName("iframe")[0].src = "";
	itempage.getElementsByTagName("li")[0].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[0].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[1].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[2].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[3].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[4].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[5].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[6].innerHTML = "";
	var oldimages = itemgallery.getElementsByTagName("img");
	for (var oldimage = oldimages.length - 1; oldimage >= 0; oldimage--)
	{
		oldimages[oldimage].parentNode.removeChild(oldimages[oldimage]);
	}
	// close drop down menu if open
	if (hoursopendropdown.innerHTML == "&#x23F7;" || hoursopendropdown.innerHTML == "⏷")
	{
		hoursopendropdown.innerHTML = "&#x23F5;";
		itemextrainfo.getElementsByTagName("ul")[0].style.display = "none";
	}
}


function openclosedropmenu()
{
	if (hoursopendropdown.innerHTML == "&#x23F7;" || hoursopendropdown.innerHTML == "⏷") // if open emoji
	{
		hoursopendropdown.innerHTML = "&#x23F5;"; // set close emoji
		itemextrainfo.getElementsByTagName("ul")[0].style.display = "none";
	}
	else
	{
		hoursopendropdown.innerHTML = "&#x23F7;";
		itemextrainfo.getElementsByTagName("ul")[0].style.display = "block";
	}
}


// run when the page is ready
window.onload = function()
{
	itempage = document.getElementById('item-info');
	itemgallery = document.getElementById("item-gallery");
	itemextrainfo = itempage.getElementsByTagName("li")[1];
	hoursopendropdown = itemextrainfo.getElementsByTagName('span')[0];
}