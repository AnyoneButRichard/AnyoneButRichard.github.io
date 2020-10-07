var link = $(".portfolio-link");
var overlay = $(".overlay");
var img = $(".img");

link.mouseover(
	function(){
		overlay.css("opacity", "1");
		img.css("opacity", "0");
	}
);

link.mouseout(
	function(){
		overlay.css("opacity", "0");
		img.css("opacity", "1");
	}
);