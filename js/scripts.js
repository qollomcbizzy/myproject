$(document).ready(function(){
  $("button").click(function()
  {
    $("#projectname").fadeout(1000);
    $("#myimage").show();
    $(document).ready(function(){
      $(".clickable").click(function() {
      $("#myimage").fadeOut(1000);
      $("#projectimage").fadeIn(1000);
    });
  });
});
$("button#name").click(function(){
  $("#myname").toggle(3600);
});
});
