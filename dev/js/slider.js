(function($){
	var js = window.js || (window.js = {});

	js.slider = function(root, params){
		this.root = $(root);

		this.init();
	};

	js.slider.prototype = {
		init: function(){
			//object variables
				
		    //setup
		    this.setup();

			//events
			this.events();
		},

		setup: function() {
			$('.slider').slick({
				infinte: true,
				slidesToShow: 3,
				slidesToScroll: 1,
				draggable: true
			});
		},

		events:function() {
			
		}
	};
})(jQuery);