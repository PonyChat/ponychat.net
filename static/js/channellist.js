$.getJSON("http://ponychat-backend.apps.xeserv.us/channels.json", null, function(data, err) {
	if(err != "") {
		alert("Could not load channel list!");
		console.log(err);
	}

	data.channels.forEach(function(channel) {
		console.log(channel.name);
	});
});
