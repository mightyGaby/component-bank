(function($){
	var js = window.js || (window.js = {});

	js.wavesModule = function(root, params){
		this.root = $(root);

		this.init();
	};

	js.wavesModule.prototype = {
		init: function(){
			//object variables
			this.baseurl = 'http://api.worldweatheronline.com/premium/v1/marine.ashx';
			this.key = 'c0b567aa6a4345abbe7195449161907';


		    //setup
		    this.setup();

			//events
			this.events();
		},

		setup: function() {
			$.ajax({
				contentType: "application/json",
				cache: false,
				method: "POST",
				url: this.baseurl + "?key=" + this.key + "&q=28.41,-80.63&format=json&num_of_days=1",
				//data: JSON.stringify(data),
				success: $.proxy(this.onsuccess_ajax, this),
				error: $.proxy(this.onerror_ajax, this)
			});
		},

		events:function() {
			
		},

		onsuccess_ajax: function(response, textStatus, jqXHR) {
			//console.log(response.data.weather[0].maxtempF);
			$(".data").html(response.data.weather[0].maxtempF);
		}
	};
})(jQuery);