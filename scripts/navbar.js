window.onscroll = function() {scrollFunction()};

function scrollFunction(){
	var navbar = document.getElementById("navbar");
	if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
		navbar.style.top="0";
	}
	else{
		navbar.style.top="-120px";
	}
}
