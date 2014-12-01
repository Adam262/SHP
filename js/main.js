$(document).ready(function() {
 
    $('#fullpage').fullpage(
    {
      resize: false
    });
    // console.log("Got this far");

    $('#hamburger').on("click", function(){
       $('#responsive').toggleClass("not-collapsed", 1000);
    })

    $('#menu a').on("click", function(){
       $('#responsive').toggleClass("not-collapsed", 1000);
    })
});
