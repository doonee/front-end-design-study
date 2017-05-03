$(function() {
	$('input[type="time"][value="now"]').each(function() {
		var d = new Date(),
			h = d.getHours(),
			m = d.getMinutes();
		if (h < 10) h = '0' + h;
		if (m < 10) m = '0' + m;
		$(this).attr({
			'value': h + ':' + m
		});
	});
});


//Function to create a new time object
//Function to create a new time object
function Time(){
	var now = new Date();
	this.hour =  now.getHours();
	this.minute =  now.getMinutes();
	this.second =  now.getSeconds();
};


Time.prototype.display = function(tar){
	if (tar == 'time'){
		var hr = this.hour;
		var min = this.minute;
		var sec = this.second;

		if (hr > 12)
			hr -= 12;

		else if(hr == 0)
			hr = 12;

		if (min < 10)
			 min = '0'+ min;

		if (sec < 10)
			sec = '0'+ sec;

		return ''+hr+' : '+min+' : '+sec+''
	}

}

function display(disp){
	var time = new Time();
	return time.display(disp);
}

//Clock Object
var clockInterval;
var clock = new Object();
clock.display = function(){
	var time = new Time();
	return time.display('time');
}

clock.update = function(){
	$('.time').text(clock.display()+'');
	clockInterval = setTimeout(clock.update, 500);
}

clock.update();

//Time Control
function TimeMachine(){
	this.time = new Time();
}