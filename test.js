window.addEventListener("load", function(){

	jQuery(document).html(`<div id="comeb" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%;align-items: center;justify-content: space-evenly;z-index:99999">
		<div style="position:relative; max-width: 450px">
			<a href="https://seduce.work/how-to-seduce-a-man" target="_blank"><img src="//pl.gautamblogs.com/man.png" style="width:100%; opacity:1"></a>
			<div class="closeb" style="position:absolute; right:10px;top:10px; font-size: 1.2em; color: #fff; cursor: pointer">      X      </div>
		</div>
	</div>`)

	


	jQuery(document).on("mouseleave", function(){
		jQuery("#comeb").css("display", "flex");
		jQuery("#comeb").css("background-color", "rgba(255,255,255,0.9)");
	});
	jQuery("#comeb").on("click", function(){
		jQuery("#comeb").css("display", "none");
		jQuery("#comeb").remove();
	});
	jQuery(".closeb").on("click", function(){
		jQuery("#comeb").css("display", "none");
		jQuery("#comeb").remove();
	});
	window.addEventListener('scroll', () => {
	    if (pageYOffset == 0 && window.innerWidth < 800 || (window.innerHeight + window.scrollY) >= (+document.body.offsetHeight - 10)){
	        jQuery("#comeb").css("display", "flex");
			jQuery("#comeb").css("background-color", "rgba(255,255,255,0.9)");
	    }
	});
});
