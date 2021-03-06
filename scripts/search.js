var currentFilter = "all"; // default filter to start for mobile
var d_currentFilter = "d-all"; // default filter to start for dekstop


function categoryfilter(filter)
{
	// Declare local variables
	var filterbutton, itemlist, items, filteredList = [];

	// Change which filter button is highlighted
	// 1. Turn off old filter current button
	filterbutton = document.getElementById(currentFilter);
	filterbutton.style.borderBottomColor = "rgba(0,0,0,0)";
	filterbutton.style.color = "var(--lightBlue)";
	if(currentFilter != filter){currentFilter = filter;} // Update currentFilter with the new filter for the next method run
	// 2. Turn on new filter button 
	filterbutton = document.getElementById(filter);
	filterbutton.style.color = "white";
	filterbutton.style.borderBottom = "solid 3px white";

	// Hide all search items
	// Create a list of every item that has the filter's class
	itemlist = document.getElementById("items");
	items = itemlist.getElementsByClassName('item');
	for (i = 0; i < items.length; i++)
	{ 
		items[i].style.display = "none";
		if(items[i].classList.contains(filter))
		{
			filteredList.push(items[i]);
		}
	}
	searchfilter(filteredList); // send the filtered list to search to be filtered even more with the user's search
}

function d_categoryfilter(filter)
{
	// Declare local variables
	var filterbutton, itemlist, items, filteredList = [];

	// Change which filter button is highlighted
	// 1. Turn off old filter current button
	filterbutton = document.getElementById(d_currentFilter);
	
	filterbutton.style.borderBottomColor = "rgba(0,0,0,0)";
	filterbutton.style.color = "var(--lightBlue)";
	if(d_currentFilter != filter){d_currentFilter = filter;} // Update currentFilter with the new filter for the next method run
	// 2. Turn on new filter button 
	filterbutton = document.getElementById(filter);
	console.log(filterbutton);
	filterbutton.style.color = "white";
	filterbutton.style.borderBottom = "solid 3px white";

	// Hide all search items
	// Create a list of every item that has the filter's class
	itemlist = document.getElementById("d-items");
	items = itemlist.getElementsByClassName('d-item');
	console.log(items);
	for (i = 0; i < items.length; i++)
	{ 
		items[i].style.display = "none";
		console.log(items[i].classList + " --> " + filter);
		if(items[i].classList.contains(filter))
		{
			filteredList.push(items[i]);
		}
	}
	d_searchfilter(filteredList); // send the filtered list to search to be filtered even more with the user's search
}


function searchfilter(filtereditems)
{
	// Declare local variables
	var input, filter, itemTitle, i, txtValue;
	input = document.getElementById('searchbar');
	filter = input.value.toUpperCase();

	// Loop through all filterd items
	// Show those who do match the search query
	for (i = 0; i < filtereditems.length; i++)
	{
		// get the name value of the item
		itemTitle = filtereditems[i].getElementsByTagName("h1")[0];
		txtValue = itemTitle.textContent || itemTitle.innerText;

		// see if the name value has the users search anywhere in it
		if (txtValue.toUpperCase().indexOf(filter) > -1)
		{
			filtereditems[i].style.display = "flex";
		}
	}
}

function d_searchfilter(filtereditems)
{
	// Declare local variables
	var input, filter, itemTitle, i, txtValue;
	input = document.getElementById('d-searchbar');
	filter = input.value.toUpperCase();

	console.log(filtereditems);
	// Loop through all filterd items
	// Show those who do match the search query
	for (i = 0; i < filtereditems.length; i++)
	{
		// get the name value of the item
		itemTitle = filtereditems[i].getElementsByTagName("h1")[0];
		txtValue = itemTitle.textContent || itemTitle.innerText;

		// see if the name value has the users search anywhere in it
		if (txtValue.toUpperCase().indexOf(filter) > -1)
		{
			filtereditems[i].style.display = "flex";
		}
	}
}


// run when the page is ready
window.onload = function()
{
	categoryfilter(currentFilter); // auto load the all filter to start
	d_categoryfilter(d_currentFilter); // auto load the all filter to start
}