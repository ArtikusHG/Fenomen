var fenomen = (function () {
	
	var time = function () {
		var t = new Date;
		var m = t.getMinutes();
		var h = t.getHours();
		var s = t.getSeconds();
		
		if (m < 10) {
			m = "0" + m;
		}
		if (h < 10) {
			h = "0" + h;
		}
		if (s < 10) {
			s = "0" + s;
		}
		return h + ":" + m + ":" + s;
	}
	
	var date = function () {
		var t = new Date;
		var d = t.getDay();
		var y = t.getFullYear();
		var m = t.getMonth();
		var n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
		var i = n[m];
		
		return i + " " + d + ", " + y
	}
	
	function unfade(element) {
	    var op = 0.1;  // initial opacity
	    element.style.display = 'block';
	    var timer = setInterval(function () {
	        if (op >= 1){
	            clearInterval(timer);
	        }
	        element.style.opacity = op;
	        op += op * 0.1;
	    }, 10);
	}
	
	var randomInArray = function(arr) {
		return Math.floor(Math.random() * arr.length);
	} 
	
	var quotes = [
		'Keep calm and carry on.', 
		'Never give up.', 
		'Just be happy.', 
		'Yesterday you said tomorrow.', 
		'Just be yourself.', 
		'Everyone you meet has something to teach you.', 
		'Don' + "'" + 't stress. Do your best. Forget the rest.', 
		'Today is another chance to get it right.', 
		'Don' + "'" + 't sweat the small stuff.', 
		'Things that were hard to bear are sweet to remember.', 
		'The energy of the mind is the essence of life.', 
		'You always succeed in producing a result.', 
		'Only do what your heart tells you.', 
		'You can observe a lot just by watchin.'
	];
	
	var backgroundImages = function() {
		
		var noOfImages = 30;
		var bgs = [];
		
		for ( var i = 0, l = noOfImages; i < l; i++ ) {
			var no = i + 1; 
			bgs.push(no + '.jpg');
		}
		
		return bgs; 
	}
	
	return {
		name: 'Fenomen new tab.',
		version: '2:0',
		type: 'release',
		build: '1',
		browser: 'Chorme',
		time: time,
		date: date,
		random: randomInArray,
		fadeIn: unfade, 
		backgrounds: backgroundImages,
		quotes: quotes
	}
	
}()); 

function time() {
	var time = fenomen.time();
	document.getElementById('time').innerText = time;
}
function date() {
	var date = fenomen.date();
	document.getElementById('date').innerText = date;
}

function quote() {
	var q = fenomen.quotes;
	var i = fenomen.random(q);
	document.getElementById('quote').innerText = q[i];
	
	console.clear();
	console.log("Current quote:"  + q[i]);
}

function bg() {
	var bgs = fenomen.backgrounds();
	var i = fenomen.random(bgs);

	var body = document.getElementsByTagName('body')[0];
	var image = 'bg/' + bgs[i];

	body.style.backgroundImage = 'url(' + image + ')';
	fenomen.fadeIn(body);
	
	console.log("Current background: " + i + ".jpg");
}

function info() {
	console.log(fenomen.name);
	console.log("Version: ", fenomen.version);
	console.log("Version type: ", fenomen.release);
	console.log("Build: ", fenomen.build);
	console.log("Browser: ", fenomen.browser);
}

function devHelp() {
	console.log("Fenomen developer help");
	console.log("devHelp() - show developer help");
	console.log("bg() - change background");
	console.log("quote() - change quote");
	console.log("info() - show build info");
}

date();
time();
quote();
bg();

console.log("Fenomen scripts loaded.");

setInterval(time, 1000);
setInterval(quote, 10000);
setInterval(bg, 10000);
setInterval(date, 30000);
