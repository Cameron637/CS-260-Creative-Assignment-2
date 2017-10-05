$(document).ready(function() {
$("#submit").click(function(e){
  console.log("#zip");
  console.log("#city");
  var value = $("#zip").val();
  var latitude;
  var longitude
  console.log(value);
  e.preventDefault();
$("#displayCity").text(value);
  var myurl= "http://api.zippopotam.us/us/";
  myurl += value;
  //myurl += ".json";
  console.log(myurl);
  $.getJSON(myurl, function(parsed_json) {
      latitude = parsed_json['places']['0']['latitude'];
      longitude = parsed_json['places']['0']['longitude'];
      everything = "<ul>";
      everything += "<li>Latitude: "+latitude;
      everything += "<li>Longitude: "+longitude;
      everything += "</ul>";
      $("#coordinate").html(everything);
  })
  .done(function() {
    var sunriseURL = 'https://api.sunrise-sunset.org/json?lat=' + latitude + '&lng=' + longitude + '&date=today';
    $.getJSON(sunriseURL, function(parsed_json) {
      console.log(parsed_json);
    });
  });

});
});
