$(document).ready(function() {
$("#submit").click(function(e){
  console.log("#zip");
  console.log("#city");
  var value = $("#zip").val();
  console.log(value);
  e.preventDefault();
$("#displayCity").text(value);
  var myurl= "http://api.zippopotam.us/us/";
  myurl += value;
  //myurl += ".json";
  console.log(myurl);
  $.ajax({
    url : myurl,
    dataType : "json",
    success : function(parsed_json) {
      var latitude = parsed_json['places']['0']['latitude'];
      var longitude = parsed_json['places']['0']['longitude'];
      everything = "<ul>";
      everything += "<li>Latitude: "+latitude;
      everything += "<li>Longitude: "+longitude;
      everything += "</ul>";
      $("#coordinate").html(everything);
    }
  });

});
});
