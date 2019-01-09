function initMap() {
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer({
        polylineOptions: {
          geodesic:true,
          strokeWeight:5,
          strokeOpacity:0.6,
          strokeColor: "#D2691E"
        }
      });
      
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
    	  mapTypeControl: false,
    	  streetViewControl: false,
    	  fullscreenControl: false,
        center: {lat: 18.558484, lng:73.955196}
      });
      directionsDisplay.setMap(map);
      directionsService.route({
          origin: "Grant Road, Pune",
          destination: "Grant Road, Pune",
          waypoints: [{
            location: "Hyderabad, Telangana",
            stopover: true
          },{
            location: "Puri, Odisha",
            stopover: true
          },{
            location: "Gangtok, Sikkim",
            stopover: true
          },{
            location: "Zuluk, Sikkim, India",
            stopover: true
          },{
            location: "Paro, Bhutan",
            stopover: true
          },{
            location: "Thimphu, Bhutan",
            stopover: true
          },{
            location: "Barpeta Road, Assam 781315",
            stopover: true
          },{
            location: "Tawang",
            stopover: true
          },{
            location: "Itanagar",
            stopover: true
          },{
            location: "Majuli, Assam",
            stopover: true
          },{
            location: "Shillong, Meghalay",
            stopover: true
          },{
            location: "Dawki, Meghalaya 793109",
            stopover: true
          },{
            location: "Living Root Bridge, East Khasi Hills, Meghalaya 793110",
            stopover: true
          },{
            location: "Ranikor, Meghalaya 793106, India",
            stopover: true
          },{
            location: "Siju caves, Damra-Dambu-Baghmara-Barenggapara Road, Meghalaya 794114",
            stopover: true
          },{
            location: "Dhupguri, West Bengal, India",
            stopover: true
          },{
            location: "Damak, Nepal",
            stopover: true
          },{
            location: "Varanasi, Uttar Pradesh",
            stopover: true
          },{
            location: "Khajuraho, Madhya Pradesh 471606",
            stopover: true
          },{
            location: "Kanha Tiger Reserve, Madhya Pradesh",
            stopover: true
          }],
          optimizeWaypoints: false,
          travelMode: 'DRIVING'
      }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
            setTimeout(function(){
              window.viewProfile("fb");
            }, 10000);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
      });
};
