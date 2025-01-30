$(".btn").click(function() {

  var userChosenOption = $(this).attr("id");
  console.log(userChosenOption);
  redirect(userChosenOption);
});

function redirect(key){
  var location_rps=key + ".html";
  location.replace(location_rps);
}
function back(){
  location.replace("rps.html");
}