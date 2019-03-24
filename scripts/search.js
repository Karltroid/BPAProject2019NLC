var currentFilter = "all"; // default filter to start


function switchfilter(filter)
{
	// Declare local variables
	var filterbutton, itemlist, items, filteredList = [];

	// Change which filter button is highlighted
	// 1. Turn off old filter current button
	filterbutton = document.getElementById(currentFilter);
	filterbutton.style.borderBottomColor = "rgba(0,0,0,0)"
	filterbutton.style.color = "var(--lightBlue)";
	currentFilter = filter; // Update currentFilter with the new filter for the next method run
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
	search(filteredList); // send the filtered list to search to be filtered even more with the user's search
}


function search(filtereditems)
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


// run when the page is ready
window.onload = function()
{
	switchfilter('all'); // auto load the all filter to start
}