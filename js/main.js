$(document).ready(function() {
 
    $('#fullpage').fullpage();
    console.log("Got this far");

    $('#hamburger').on("click", function(){
       $('#responsive').toggleClass("not-collapsed", 1000);
    })
});
