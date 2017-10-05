'use strict';

$(document).ready(function () {
  $('#zip').on('keyup', function(key) {
    if (key.which === 13) {
      $('#submit').click();
    }
  });

  $('#submit').on('click', function () {
    let latitude;
    let longitude;
    let latLongURL = 'http://api.zippopotam.us/us/' + $('#zip').val();

    $.getJSON(latLongURL, function (json) {
      let city = json.places[0]['place name'] + ', ' + json.places[0]['state abbreviation'];
      latitude = json.places[0].latitude;
      longitude = json.places[0].longitude;
      let html = '<ul>';
      html += '<li>Latitude: ' + latitude;
      html += '<li>Longitude: ' + longitude;
      html += '</ul>';
      $('#coordinate').html(html);
      $('#suncycle h2 span').text(city);
    })
      .done(function () {
        let sunriseURL = 'https://api.sunrise-sunset.org/json?lat=' + latitude + '&lng=' + longitude + '&date=today';

        $.getJSON(sunriseURL, function (json) {
          $('#sunrise h3 span').text(json.results.sunrise);
          $('#sunset h3 span').text(json.results.sunset);
          $('#suncycle').css('display', 'block');
        });
      });
  });
});
