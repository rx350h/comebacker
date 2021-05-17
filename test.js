	window.addEventListener("load", function(){
		$('body').append('<div id="comeb" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;align-items: center;justify-content: space-evenly;z-index:99999"><div style="position:relative; max-width: 450px"><a href="https://seduce.work/how-to-seduce-a-man" target="_blank"><img src="https://bigpicture.ru/wp-content/uploads/2012/07/cats-32.jpg" style="width:100%;opacity:1"></a><div class="closeb" style="position:absolute; right:10px;top:10px; font-size: 1.2em; color: #fff; cursor: pointer">X</div></div></div>');

		


		$(document).on("mouseleave", function(){
			$("#comeb").css("display", "flex");
			$("#comeb").css("background-color", "rgba(255,255,255,0.9)");
		});
		$("#comeb").on("click", function(){
			$("#comeb").css("display", "none");
			$("#comeb").remove();
		});
		$(".closeb").on("click", function(){
			$("#comeb").css("display", "none");
			$("#comeb").remove();
		});
		window.addEventListener('scroll', () => {
			if (pageYOffset == 0 && window.innerWidth < 800 || (window.innerHeight + window.scrollY) >= (+document.body.offsetHeight - 10)){
				$("#comeb").css("display", "flex");
				$("#comeb").css("background-color", "rgba(255,255,255,0.9)");
			}
		});
	});
