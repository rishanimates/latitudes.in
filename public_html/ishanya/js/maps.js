function initMap() {
      var directionsService = new google.maps.DirectionsService;
      var directionsDisplay = new google.maps.DirectionsRenderer({
        polylineOptions: {
          geodesic:true,
          strokeOpacity:0.6,
          strokeColor: "#D2691E"
        }
      });
      var directionsDisplay1 = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeWeight:5,
          strokeColor: "#808080"
        }
      });
      var directionsDisplay2 = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeWeight:5,
          strokeColor: "#800000"
        }
      });

      var directionsDisplay3 = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeWeight:5,
          strokeColor: "#808000"
        }
      });

      var directionsDisplay4 = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeWeight:5,
          strokeColor: "#008000"
        }
      });

      var directionsDisplay5 = new google.maps.DirectionsRenderer({
        polylineOptions: {
          strokeWeight:5,
          strokeColor: "#008080"
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
          destination: "Hotel Buddha, C-26/35, Lahurabir Rd, Rampuri Colony, Jaitpura, Varanasi, Uttar Pradesh 221001",
          waypoints: [{
            location: "Jatra Hotel, Vrindavan Nagar, Nashik, Maharashtra 422006",
            stopover: true
          },{
            location: "Sanchi, Madhya Pradesh 464661",
            stopover: true
          },{
            location: "Khajuraho, Madhya Pradesh 471606, India",
            stopover: true
          },{
            location: "25.4212284,81.8801207",
            stopover: true
          },{
            location: "Hotel Buddha, C-26/35, Lahurabir Rd, Rampuri Colony, Jaitpura, Varanasi, Uttar Pradesh 221001",
            stopover: true
          },{
            location: "Sarnath, Varanasi, Uttar Pradesh 221007",
            stopover: true
          },{
            location: "Dashashwamedh Ghat, Dashashwamedh Ghat Rd, Ghats of varanasi, Godowlia, Varanasi, Uttar Pradesh 221001",
            stopover: true
          },{
            location: "Kashi Vishwanath Temple, Teliyana, Bazardiha, Maheshpur, Varanasi, Uttar Pradesh 221002",
            stopover: true
          },{
            location: "Assi ghat, Shivala, Varanasi, Uttar Pradesh 221005",
            stopover: true
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
          origin: "Hotel Buddha, C-26/35, Lahurabir Rd, Rampuri Colony, Jaitpura, Varanasi, Uttar Pradesh 221001",
          destination: "Club Mahindra Gangtok, Grba Road,, Chongay Tar, Gangtok, 737103",
          waypoints: [{
            location: "Bhimnagar, Bihar 854340",
            stopover: true
          },{
            location: "26.522862,86.931805",
            stopover: true
          },{
            location: "Itahari, Nepal",
            stopover: true
          },{
            location: "Club Mahindra Gangtok, Grba Road,, Chongay Tar, Gangtok, 737103",
            stopover: true
          },{
            location: "Banjhakri Falls and Park, Gangtok, Sikkim 737101",
            stopover: true
          },{
            location: "Rumtek Dharma Chakra Centre, Tsurphu Labrang Pal Karmae Sangha Dhuche, Dharma Chakra Centre,, Sikkim 737135",
            stopover: true
          },{
            location: "Thakali, Oberoi Building, MG Marg, Gangtok, Sikkim 737101",
            stopover: true
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
          origin: "Club Mahindra Gangtok, Grba Road,, Chongay Tar, Gangtok, 737103",
          destination: "Domino's Pizza, GROUND FLOOR,PRAGATI TOLL, WARD NO 11/27, OPPOSITE VED VYAS NEPALI SCHOOL, JAIGAON, West Bengal 736182",
          waypoints: [{
            location: "Phuentsholing, Bhutan",
            stopover: true
          },{
            location: "Hotel Paro, Paro, Bhutan",
            stopover: true
          },{
            location: "Taktsang, Bhutan",
            stopover: true
          },{
            location: "Hotel Paro, Paro, Bhutan",
            stopover: true
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
          origin: "Domino's Pizza, GROUND FLOOR,PRAGATI TOLL, WARD NO 11/27, OPPOSITE VED VYAS NEPALI SCHOOL, JAIGAON, West Bengal 736182",
          destination: "Nimati ghat ferry service, Kamalabari Ferry Ghat, Komolabari, Assam 785106",
          waypoints: [{
            location: "Baihata, Assam",
            stopover: true
          },{
            location: "Guwahati, Assam",
            stopover: true
          },{
            location: "Tezpur, Assam",
            stopover: true
          },{
            location: "Bomdila, 790001",
            stopover: true
          },{
            location: "Tawang Monastery, Cona, Tawang, Arunachal Pradesh 790104",
            stopover: true
          },{
            location: "Bum La, Cona, Shannan, Arunachal Pradesh 790104",
            stopover: true
          },{
            location: "Sungester Lake, Shannan",
            stopover: true
          },{
            location: "Tawang",
            stopover: true
          },{
            location: "Dirang, 790101",
            stopover: true
          },{
            location: "Bhairabkunda",
            stopover: true
          },{
            location: "26.5812602,93.2883611",
            stopover: true
          }],
          optimizeWaypoints: false,
          travelMode: 'DRIVING'
      }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay4.setDirections(response);
          } else {
            console.error('Directions4 request failed due to ' + status);
          }
      });

      directionsService.route({
          origin: "Majuli Afolamukh Ferry Service, Borboka Pathar, Assam",
          destination: "Majuli Afolamukh Ferry Service, Borboka Pathar, Assam",
          waypoints: [{
            location: "Dakhinpat Satra, Majuli",
            stopover: true
          },{
            location: "Rupali Dresses, Doria Gaon, Assam 785104",
            stopover: true
          },{
            location: "La Mansion Anandale, Natun Kulamora Chapori N.C., Assam 785104",
            stopover: true
          },{
            location: "Salmora Gaon,Majuli, Keturi Bil Khat Pam, Assam 785110",
            stopover: true
          },{
            location: "Mask Temple, Majuli, Dhowachala Gaon, Assam 785106",
            stopover: true
          },{
            location: "Kamalabari Chariali, Assam",
            stopover: true
          },{
            location: "Jengraimukh, Assam",
            stopover: true
          },{
            location: "La Mansion Anandale, Natun Kulamora Chapori N.C., Assam 785104",
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

      directionsService.route({
          origin: "Nimati ghat ferry service, Kamalabari Ferry Ghat, Komolabari, Assam 785106",
          destination: "Hotel Rituraj, Kedar Rd, Machkhowa, Guwahati, Assam 781001",
          waypoints: [{
            location: "Mariani, Assam",
            stopover: true
          },{
            location: "Mawlyngkhung, Meghalaya",
            stopover: true
          },{
            location: "Cherrapunjee Holiday Resort, Latikynsew Village, Cherrapunjee, Meghalaya 793108",
            stopover: true
          },{
            location: "Double Root Bridge, Nongriat, Meghalaya 793111",
            stopover: true
          },{
            location: "Mawsmai Cave, Cherrapunjee, Meghalaya 793108",
            stopover: true
          },{
            location: "Darrang, Meghalaya 793109",
            stopover: true
          },{
            location: "Tamabila 0 points., NH 40, Dawki, Meghalaya 793109",
            stopover: true
          },{
            location: "Jaflong 0 Point, Dawki, Meghalaya 793109",
            stopover: true
          },{
            location: "krang shuri waterfall, West Jaintia Hills, Meghalaya 793109",
            stopover: true
          },{
            location: "Terra Mayaa, 6th Floor, Anil Plaza 2, GS Rd, Guwahati, Assam 781006",
            stopover: true
          }],
          optimizeWaypoints: false,
          travelMode: 'DRIVING'
      }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay6.setDirections(response);
            //setTimeout(function(){
              //gMap.setCenter(new google.maps.LatLng(18.507213, 77.402757));
              //gMap.setZoom(8);
              //setTimeout(function(){
                //window.viewProfile("fb");
              //}, 1000);
            //}, 20000);
          } else {
            console.error('Directions6 request failed due to ' + status);
          }
      });

      directionsService.route({
          origin: "Hotel Rituraj, Kedar Rd, Machkhowa, Guwahati, Assam 781001",
          destination: "18.5580578,73.9529081",
          waypoints: [{
            location: "Puri, Odisha",
            stopover: true
          },{
            location: "Konark, Odisha 752111",
            stopover: true
          },{
            location: "OTDC Water Sports Complex, Chilika Lake, Barkul, Odisha",
            stopover: true
          },{
            location: "Vijayawada, Andhra Pradesh",
            stopover: true
          },{
            location: "Hyderabad, Telangana",
            stopover: true
          },{
            location: "18.5138286,73.7702556",
            stopover: true
          }],
          optimizeWaypoints: false,
          travelMode: 'DRIVING'
      }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay7.setDirections(response);
            setTimeout(function(){
              gMap.setCenter(new google.maps.LatLng(18.507213, 77.402757));
              gMap.setZoom(5);
             // setTimeout(function(){
               // window.viewProfile("fb");
             // }, 1000);
            }, 20000);
          } else {
            console.error('Directions7 request failed due to ' + status);
          }
      });

};

