(function($){
	var js = window.js || (window.js = {});

	js.tabModule = function(root, params){
		this.root = $(root);

		this.init();
	};

	js.tabModule.prototype = {
		init: function(){
			//object variables
			
		    //setup
		    this.setup();

			//events
			this.events();
		},

		setup: function() {
			
		},

		events:function() {
			
		}
	};
})(jQuery);