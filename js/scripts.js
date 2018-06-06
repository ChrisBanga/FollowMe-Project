$("button#location").click(function(event){
  event.preventDefault();
  initMap();
  $("#header").hide();
  $("input#map").show();
})

//$("form#subscription").submit(function(){
  //event.preventDefault();
  //alert("Congratulations! You have successfully registered.")
//})
  function sendMail(){
    var email = document.getElementById('mailTo').value
    var subject = "This is my location"
    var body = document.getElementById('subjectText').value
    var link= "mailto:"+ email
            + "?subject=" + subject
            + "&body=" + body
    ;
            window.location.href = link;
  }

  var map, infoWindow, myLink;
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

        var myLink = "https://www.google.com/maps/@"+position.coords.latitude+","+position.coords.longitude+",16z";
        $("button#toLink").click(function(event){
          event.preventDefault();
          $("#showLink").append(myLink);
        })

        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);
        map.setZoom(20);
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
