$( document ).ready(function() {
	  // Handler for .ready() called.

	  	function reset_first_question () {
	  		var testing = $("a:visible").attr("data-a-text");
 		  $("a:visible").typed({
        	strings: [testing],
        	typeSpeed: 50
      		});
	  	}

		$("div").hide();
		$("#div1").show();
		reset_first_question();

		$( "a" ).click(function(event) {
		 event.preventDefault();
		 if ($(this).hasClass("rebirth")){
		 	$("a").attr("style","").text("");
		 	$("div").hide();
		 	$("#div1").show();
		 	reset_first_question();
		 } else {
		 	$("a:visible").hide()
		 $("#"+$(this).attr("data-div-go-to")).show();
		 $( "a:visible" ).each(function() {
		 	var testing = $(this).attr("data-a-text");
 		 	 $(this).typed({
        		strings: [testing],
        		typeSpeed: 50
      			});
			});
		
		 }
			
		}); //end a click function



	});