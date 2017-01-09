var l,c, inf;
var debug = true;

function init() {
inf = get('data');
inf = hex2a(inf);
wdata(inf);
l = 1;
c = 3;
sel(1,3);
}
function wdata(string) {
 // <tr><td class='num'>1</td><td id='1'></td></tr>
var str2 = string.split("\n");
var i = 0;
str2.forEach(function(element) {
    i = i + 1;
    document.getElementById("data").innerHTML = document.getElementById("data").innerHTML + "<tr><td class='num'>" + String(i) + "</td><td class='' id='" + String(i) + "'>" + element + "</td></tr>";
});


}


function on(line, column) {
if (debug == true) { console.log("on"); }
var a =  document.getElementById(line).innerHTML;
str = a.replaceAt(column, "<u>" + a.slice(column,column+1) + "</u>");
	document.getElementById(line).innerHTML = str;
}


function off(line, column) {
var str = document.getElementById(line).innerHTML;
str = str.replace("<u>", "");
str = str.replace("</u>", "");

document.getElementById(line).innerHTML = str;
}

interval = 0;
function sel(line, column) {
document.getElementById(l).className = "";
clearInterval(interval);
l = line;
c = column;
document.getElementById(l).className = "sel";
on(line, column);

}
document.onkeydown=function(e){
	off(l, c);
    runkey(e.keyCode);
    
}

function runkey(code) {
    console.log("KEYDOWN: " + code);
	if (code == 38) {
		off(l,c);
		sel((l - 1),c);
	}
	else if (code == 40) {
		off(l,c);
		sel((l + 1),c);
	}
	else if (code == 37) {
		off(l,c);
		sel(l,c - 1);
	}
	else if (code == 39) {
		off(l,c);
		sel(l,c + 1);
	}
	else if (code == 8) {
		off(l,c);
		str = document.getElementById(l).innerHTML;
		document.getElementById(l).innerHTML = str.slice(0, c-1) + str.slice(c);
		sel(l, c - 1);
	}
	else {
		off(l, c);
		a = document.getElementById(l).innerHTML;
		document.getElementById(l).innerHTML = a.splice(c, 0, String.fromCharCode(code));
		sel(l, c + 1);
	}
}

