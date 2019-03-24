var winheight = 0;
var scrollTop = 0;
var scrolledDown = false;

window.addEventListener("scroll", function()
{
    winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop > winheight)
    {
		if (scrolledDown == false)
		{
	    	scrolledDown = true;
	    	console.log(scrolledDown);
    	}
    }
    else
    {
    	scrolledDown = false;
    	console.log(scrolledDown);
    }
}, false)