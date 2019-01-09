var socket = io.connect("https://foodandadventure.com:3001");

var getLocUpdate = function(){
	//socket.emit('addLoc', "26.578648, 89.452594");
};

socket.on('connection', function(soc){
	console.log('User connected : ' + soc);
});

var sendLocUpdate = function(location){
	var req = {
			"LOCATION": location.name,
            "LAT": location.lat,
            "LNG": location.lng,
            "UPDATED_BY": window.name,
            "EVENT": "ishanya",
            "TIMESTAMP": "07 Dec 2017 16:00"
        }
	socket.emit('addLoc', JSON.stringify(req));
};

socket.on('locUpdate', function(msg){
	console.log('message: ' + msg);
});