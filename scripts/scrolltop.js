var winheight = 0;
var scrollTop = 0;
var scrolledDown = false;
var scrollTopBtn;
var html, body;

window.addEventListener("scroll", function()
{
   if (scrollTopBtn == null)
   {
		scrollTopBtn = document.getElementById("scrolltotop");
   }
    winheight = window.innerHeight || (document.documentElement || document.body).clientHeight;
    scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop > winheight)
    {
		if (scrolledDown == false)
		{
	    	scrolledDown = true;
	    	scrollTopBtn.style.display = "block";
	    	scrollTopBtn.style.animation = "scrollbtn-slide-in " + 1 + "s";
    	}
    }
    else
    {
    	if (scrolledDown == true)
		{
	    	scrolledDown = false;
	    	scrollTopBtn.style.animation = "scrollbtn-slide-out " + 1 + "s";
	    	setTimeout(function() { scrollTopBtn.style.display = "none"; }, 1000);
    	}
    }
}, false)


function scrollToTop(totalTime, easingPower)
{
	html = document.documentElement;
  	body = document.body;
	var timeInterval = 1;
	var scrollTop = Math.round(body.scrollTop || html.scrollTop);
	var timeLeft = totalTime;
	var scrollByPixel = setInterval(function()
	{
		var percentSpent = (totalTime - timeLeft) / totalTime;
		if (timeLeft >= 0) {
		  var newScrollTop = scrollTop * (1 - Math.pow(2 * percentSpent, easingPower));
		  body.scrollTop = newScrollTop;
		  html.scrollTop = newScrollTop;
		  timeLeft--;
		}
		else
		{
		  clearInterval(scrollByPixel);
		}
	}, timeInterval);
}

function instantscrolltotop()
{
	var element = document.getElementById('item-info');
	element.scrollTop = 0;
}