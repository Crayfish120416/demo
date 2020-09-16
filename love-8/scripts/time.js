		var together = new Date();
		together.setFullYear(2020,5,18);
		together.setHours(23);
		together.setMinutes(3);
		together.setSeconds(0);
		together.setMilliseconds(0);
	      timeElapse(together);
			setInterval(function () {
				timeElapse(together);
			}, 500);