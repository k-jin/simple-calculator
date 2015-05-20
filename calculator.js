var DISPLAY = document.getElementById("display");

var clearbutton = document.getElementById("clearb");
clearbutton.onclick = function() {clear();};

var onebutton = document.getElementById('1b');
onebutton.onclick = function() {append("1");};

var twobutton = document.getElementById('2b');
twobutton.onclick = function() {append("2");};

var threebutton = document.getElementById('3b');
threebutton.onclick = function() {append("3");};

var fourbutton = document.getElementById('4b');
fourbutton.onclick = function() {append("4");};

var fivebutton = document.getElementById('5b');
fivebutton.onclick = function() {append("5");};

var sixbutton = document.getElementById('6b');
sixbutton.onclick = function() {append("6");};

var sevenbutton = document.getElementById('7b');
sevenbutton.onclick = function() {append("7");};

var eightbutton = document.getElementById('8b');
eightbutton.onclick = function() {append("8");};

var ninebutton = document.getElementById('9b');
ninebutton.onclick = function() {append("9");};

var zerobutton = document.getElementById('zerob');
zerobutton.onclick = function() {append("0");};

var decbutton = document.getElementById('decb');
decbutton.onclick = function() {period();};

var plusmnbutton = document.getElementById('plusmnb');
plusmnbutton.onclick = function() {signswitch();};

var minusbutton = document.getElementById('minusb');
minusbutton.onclick = function() {getURL()};

var buzzsites = ["facebook", "twitter"];
var is_on_buzzsite = false;
var website_on = "";


function getURL(){
	for(i = 0; i < buzzsites.length; i++){
		if(window.location.href.indexOf(buzzsites[i]) > -1){
      	is_on_buzzsite = true;
      	website_on = buzzsites[i];
      	break;
    	}	
  	}
  	alert(is_on_buzzsite);
}

function clear() {
	DISPLAY.innerHTML = "0";
}

function append(d) {
	oldValue = DISPLAY.innerHTML;
	
	if 	(oldValue == "0") {
		newValue = d;
	}
	else{
		newValue = oldValue + d;
	}
	DISPLAY.innerHTML = newValue;
}

function period(){
	var value = DISPLAY.innerHTML;
	var n = value.substr(0,value.length);
	var decCheck = n.indexOf(".");
	if (decCheck == -1) {
		append(".");
	}

}

function signswitch() {
	if (DISPLAY.innerHTML != "0"){
		var value = DISPLAY.innerHTML;
		var n = value.substr(0,value.length);
		var negCheck = n.indexOf("-");
		var posCheck = n.indexOf("+")
		if (negCheck == -1 && posCheck == -1){
			DISPLAY.innerHTML = "-" + DISPLAY.innerHTML;
		}
		else if (negCheck == -1) {
			DISPLAY.innerHTML = "-" + DISPLAY.innerHTML.substr(1,DISPLAY.length);
		}
		else {
			DISPLAY.innerHTML = "+" + DISPLAY.innerHTML.substr(1,DISPLAY.length);
		}

	}
}