(function($) {

	var js = window.js || (window.js = {});

	js.app = {
        init: function() {
            this.initComponents();
		},
        
        initComponents: function(){
            // tab module
            $(".slider").each(function(i, el){
                new js.slider(el);
            });
        }
    };

    // kickoff app
    $(document).ready($.proxy(js.app.init, js.app));

})(jQuery);