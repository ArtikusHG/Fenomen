$(document).ready(l);
function time() {
var t = new Date;
var m = t.getMinutes();
var h = t.getHours();
var s = t.getSeconds();
if (m < 10) {
	m = "0" + t.getMinutes();
}
if (h < 10) {
	h = "0" + t.getHours();
}
if (s < 10) {
	s = "0" + t.getSeconds();
}
var time = h + ":" + m + ":" + s;
$("#time").text(time);
}
function date() {
var t = new Date;
var d = t.getDay();
var y = t.getFullYear();
var m = t.getMonth();
var n = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var i = n[m];
var date = i + " " + d + ", " + y
$("#date").text(date);
}
function quote() {
console.clear();
var i = Math.floor(Math.random() * 16);
var quotes = ["Keep calm and carry on.", "Never give up.", "Just be happy.", "Yesterday you said tomorrow.", "Just be yourself.", "Everyone you meet has something to teach you.", "Don't stress. Do your best. Forget the rest.", "Today is another chance to get it right.", "Don't sweat the small stuff.", "Things that were hard to bear are sweet to remember.", "The energy of the mind is the essence of life.", "You always succeed in producing a result.", "Only do what your heart tells you.", "You can observe a lot just by watching."];;
$("#quote").hide().text(quotes[i]).fadeIn(1000);
console.log("Current quote: " + quotes[i]);
}
function bg() {
var bgs = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg", "27.jpg", "28.jpg", "29.jpg", "30.jpg"];
var i = Math.floor(Math.random() * 30);
$("body").hide().attr("background", "bg/" + bgs[i]).fadeIn(1000);
console.log("Current background: " + i + ".jpg");
}
function info() {
console.log("Fenomen new tab.");
console.log("Version: 2.0");
console.log("Version type: release");
console.log("Build: 1");
console.log("Browser: Chrome");
}
function devHelp() {
console.log("Fenomen developer help");
console.log("devHelp() - show developer help");
console.log("bg() - change background");
console.log("quote() - change quote");
console.log("info() - show build info");
}
function l() {
date();
time();
quote();
bg();
console.log("Fenomen scripts loaded.");
setInterval(time, 1000);
setInterval(quote, 10000);
setInterval(bg, 10000);
setInterval(date, 30000);
}