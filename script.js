$(document).ready(function(){
  // Add smooth scrolling to all links
  
  var id_link
  var id_menu_element

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
        if(id_link){

	  	document.getElementById(id_link).style.color = "black";
	  	document.getElementById(id_menu_element).style.color = "black";
  		}

      event.preventDefault();

      // Store hash
      hash = this.hash;
      id_link = hash.replace(/#/g, "");

      id_menu_element = this.id
      
      document.getElementById(id_link).style.color = "var(--orange)";
      document.getElementById(id_menu_element).style.color = "var(--orange)";

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top -200
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        //window.location.hash = hash;
      });
    } // End if
  });
});