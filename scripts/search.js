var currentFilter = "all";

function search()
{
	// Declare variables
	var input, filter, itemlist, items, itemTitle, i, txtValue;
	input = document.getElementById('searchbar');
	filter = input.value.toUpperCase();
	itemlist = document.getElementById("items");
	items = itemlist.getElementsByClassName('item');

	// Loop through all list items, and hide those who don't match the search query
	for (i = 0; i < items.length; i++)
	{
		itemTitle = items[i].getElementsByTagName("h1")[0];
		txtValue = itemTitle.textContent || itemTitle.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1)
		{
			items[i].style.display = "";
		}
		else
		{
			items[i].style.display = "none";
		}
	}
}


function switchfilter(filter)
{
	var filterbutton = document.getElementById(currentFilter);
	filterbutton.style.borderBottomColor = "rgba(0,0,0,0)"
	filterbutton.style.color = "var(--lightBlue)";
	currentFilter = filter;
	filterbutton = document.getElementById(filter);
	filterbutton.style.color = "white";
	filterbutton.style.borderBottom = "solid 3px white";

	var itemlist = document.getElementById("items");
	var items = itemlist.getElementsByClassName('item');
	for (i = 0; i < items.length; i++)
	{ 
		items[i].style.display = "none";
		if(items[i].classList.contains(filter))
		{
			items[i].style.display = "flex";
		}
	}
}

// run when the page is ready
window.onload = function()
{
	switchfilter('all'); // auto load the all filter to start
}