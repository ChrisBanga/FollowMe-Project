$("button#location").click(function(event){
  event.preventDefault();
  $("#header").hide();
  $("input#map").show();
})
//$("form#subscription").submit(function(){
  //event.preventDefault();
  //alert("Congratulations! You have successfully registered.")
//})
  function sendMail(){
    var link=   "mailto:"+document.getElementById("sponsors").value;
                +"?cc="
                //+"&body=" + escape(document.getElementById("send").value)
            ;

            window.location.href = link;
  }

  var map, infoWindow;
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      //adjust coordinate so that map starts in Nairobi on reload
      //adjust zoom to focus on Nairobi
      center: {lat: 1.957709, lng: 37.297204},
      zoom: 10
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
  }
