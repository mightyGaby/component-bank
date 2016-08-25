(function($) {

	var js = window.js || (window.js = {});

	js.app = {
		init: function() {
			this.displayProjects();
		},

		displayProjects: function(){
			$('.category_links a').on('click', function(){
				var category = $(this).attr('class');
				var selected = '.' + category;
				$('.projectContainer').children().attr("aria-hidden", "true");
				console.log($('.projectContainer').find(selected).attr("aria-hidden","false"));
			});
		}
};

	// kickoff app
	$(document).ready($.proxy(js.app.init, js.app));

})(jQuery);
