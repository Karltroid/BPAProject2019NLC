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