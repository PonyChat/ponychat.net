$(window).load(function(){
	$(document).ready(function () {
		var location;
		var interval;
		// Get ISP and location info
		/*$.get("https://ipinfo.io", function (response) {
			var isp = response.org;
			isp = isp.replace(/^\S+\s/, "");
			isp = isp.replace(/,.+$/, "");
			$("#isp").text(isp);
			if (response.region !== null) {
				var region = response.region + ", " + response.country;
			} else {
				var region = response.country;
			}
			location = isp + " in " + region;
			$("#alert-title").text("Checking " + location + "...");
			connChecker();
			interval = setInterval(connChecker, 5000);
		}, "jsonp");*/
		// Check connection status to PonyChat
		var regularCheck;
		var sslCheck;
		var failCheck;
		var policyCompleted = false;
		var completed = false;
		var connChecker = function () {
			// Test regular connection
			if (interval) {
				if (regularCheck) regularCheck.abort();
				if (sslCheck) sslCheck.abort();
				if (failCheck) failCheck.abort();
				clearInterval(interval);
			} else {
				regularCheck = $.ajax({
					url: "http://irc.ponychat.net:6667/"
				}).fail(function (xhr, status, error) {
					if (status === "abort") {
						$("#alert").removeClass("alert-info").addClass("alert-danger");
						$("#alert-title").text("Uh-oh... :(");
						$("#alert-data").text("We couldn't establish an IRC connection to the network");
						if (sslCheck) sslCheck.abort();
					} else {
						if (completed) {
							$("#alert").removeClass("alert-info").addClass("alert-success");
							$("#alert-title").text("Success!");
							$("#alert-data").text("You should have no problems connecting!");
						} else {
							completed = true;
						}
					}
				});
				sslCheck = $.ajax({
					url: "https://irc.ponychat.net:6697/"
				}).fail(function (xhr, status, error) {
					if (status === "abort") {
						$("#alert-title").text("Uh-oh... :(");
						if (completed) {
							$("#alert").removeClass("alert-info").addClass("alert-warning");
							$("#alert-data").text("We could estable an IRC connection, but not an encrypted one.");
						} else {
							$("#alert").removeClass("alert-info").addClass("alert-danger");
							$("#alert-data").text("We couldn't establish any connection to the network.");
						}
						if (regularCheck) regularCheck.abort();
					} else {
						if (completed) {
							$("#alert").removeClass("alert-info").addClass("alert-success");
							$("#alert-title").text("Success!");
							$("#alert-data").text("You should have no problems connecting, even over SSL!");
						} else {
							completed = true;
						}
					}
				});
			}
		};
		connChecker();
	});
});
