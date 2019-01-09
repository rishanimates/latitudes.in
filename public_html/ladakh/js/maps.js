function initMap() {
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeWeight:3,
          strokeColor: "#D2691E"
        }
      });
      var directionsDisplay1 = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeWeight:3,
          strokeColor: "#808080"
        }
      });
      var directionsDisplay2 = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeWeight:3,
          strokeColor: "#800000"
        }
      });

      var directionsDisplay3 = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeWeight:3,
          strokeColor: "#808000"
        }
      });

      var directionsDisplay4 = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeWeight:3,
          strokeColor: "#008000"
        }
      });

      var directionsDisplay5 = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeColor: "#FF0000",
strokeOpacity: 0.5,
    strokeWeight: 2
        }
      });


      var directionsDisplay6 = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeWeight:5,
          strokeColor: "#000080"
        }
      });

      var directionsDisplay7 = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeWeight:5,
          strokeColor: "#800080"
        }
      });
      
      window.gMap = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        center: {lat: 18.558484, lng:73.955196}
      });
      //directionsDisplay.setMap(gMap);
      directionsDisplay1.setMap(gMap);
      directionsDisplay2.setMap(gMap);
      directionsDisplay3.setMap(gMap);
      directionsDisplay4.setMap(gMap);
      directionsDisplay5.setMap(gMap);
      directionsDisplay6.setMap(gMap);
      directionsDisplay7.setMap(gMap);
      setTimeout(function(){
        window.viewProfile("ishanya");
      }, 5000);
      /*directionsService.route({
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
          }],
          optimizeWaypoints: false,
          travelMode: 'DRIVING'
      }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
            var route = response.routes[0];
            setTimeout(function(){
              window.viewProfile("ishanya");
            }, 5000);
          } else {
            console.error('Directions request failed due to ' + status);
          }
      });*/
      
      directionsService.route({
          origin: "Grant Road, Pune",
          destination: "Shimla, Himachal Pradesh",
          waypoints: [{
            location: "Indore, Madhya Pradesh",
            stopover: false
          },{
            location: "Gwalior Fort, Gwalior, Madhya Pradesh 474008",
            stopover: false
          },{
location:"Taj Mahal, Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
stopover:true
          }],
          optimizeWaypoints: false,
          travelMode: 'DRIVING'
      }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay1.setDirections(response);
            //setTimeout(function(){
              //gMap.setCenter(new google.maps.LatLng(26.578648, 89.452594));
              //gMap.setZoom(8);
            //}, 12000);
          } else {
            console.error('Directions1 request failed due to ' + status);
          }
      });

      directionsService.route({
          origin: "Shimla, Himachal Pradesh",
          destination: "Leh",
          waypoints: [{
            location: "Kinnaur, Himachal Pradesh",
            stopover: false
          },{
            location: "Spiti Valley, Marango Rangarik, Himachal Pradesh 172114",
            stopover: false
          },{
            location: "Batal, Himachal Pradesh",
            stopover: false
          },{
            location: "Pang, Leh Manali Hwy, Pang, Jammu and Kashmir 194201",
            stopover: false
          },{
            location: "Tso Kar, 194201",
            stopover: false
          },{
            location: "Pangong Lake, Leh, Jammu and Kashmir 194201",
            stopover: true
          },{
location:"Turtuk",
stopover: true
},{
location:"Khardung La, 194101",
stopover: false
}],
          optimizeWaypoints: false,
          travelMode: 'DRIVING'
      }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay2.setDirections(response);
            //setTimeout(function(){
              //gMap.setCenter(new google.maps.LatLng(26.578648, 89.452594));
              //gMap.setZoom(8);
            //}, 12000);
          } else {
            console.error('Directions2 request failed due to ' + status);
          }
      });

      directionsService.route({
          origin: "Leh",
          destination: "Chandigarh",
          waypoints: [{
            location: "Kargil, 194103",
            stopover: false
          },{
            location: "Srinagar",
            stopover: true
          },{
location:"Keylong, Himachal Pradesh 175132", 
stopover:true
}],
          optimizeWaypoints: false,
          travelMode: 'DRIVING'
      }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay3.setDirections(response);
            //setTimeout(function(){
              //gMap.setCenter(new google.maps.LatLng(26.578648, 89.452594));
              //gMap.setZoom(8);
            //}, 12000);
          } else {
            console.error('Directions3 request failed due to ' + status);
          }
      });


      directionsService.route({
          origin: "Chandigarh",
          destination: "Grant Road, Pune",
          waypoints: [{
            location: "Jaipur, Rajasthan",
            stopover: true
          },{
            location: "Udaipur, Rajasthan",
            stopover: true
          },{
            location: "Ahmedabad, Gujarat",
            stopover: false
          }],
          optimizeWaypoints: false,
          travelMode: 'DRIVING'
      }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay4.setDirections(response);
setTimeout(function(){
gMap.setCenter(new google.maps.LatLng(23,83));
              gMap.setZoom(5.3);
}, 12000);

          } else {
            console.error('Directions4 request failed due to ' + status);
          }
      });

      directionsService.route({
          origin: "Srinagar",
          destination: "Ahmedabad, Gujarat",
          waypoints: [{
            location: "Amritsar, Punjab",
            stopover: true
          },{
            location: "Udaipur, Rajasthan",
            stopover: true
          },{
            location: "Ahmedabad, Gujarat",
            stopover: true
          }],
          optimizeWaypoints: false,
          travelMode: 'DRIVING'
      }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay5.setDirections(response);
          } else {
            console.error('Directions5 request failed due to ' + status);
          }
      });
};

