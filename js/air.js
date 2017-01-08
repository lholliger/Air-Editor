var l,c, inf;


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
var a =  document.getElementById(line).innerHTML;
str = a.replaceAt(column, "<u>" + a.slice(column,column+1) + "</u>");
	console.log(a.slice(column,column+1));
	document.getElementById(line).innerHTML = str;
    setTimeout(function() { off(line, column); }, 250);
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
console.log("run");
clearInterval(interval);
l = line;
c = column;
document.getElementById(l).className = "sel";
setTimeout(function() { on(line, column); }, 250);
interval = setInterval(function() {
setTimeout(function() { on(line, column); }, 250);
}, 500);
}
document.onkeydown=function(e){
    runkey(e.keyCode);
    
}

function runkey(code) {
    console.log(code);
	if (code == 38) {
		sel((l - 1),c);
	}
	else if (code == 40) {
		sel((l + 1),c);
	}
	else if (code == 37) {
		sel(l,c - 1);
	}
	else if (code == 39) {
		sel(l,c + 1);
	}
	else if (code == 8) {
		off(l,c)
		str = document.getElementById(l).innerHTML;
		document.getElementById(l).innerHTML = str.slice(0, c-1) + str.slice(c);
		sel(l, c - 1);
	}
	else {
		off(l, c);
		a = document.getElementById(l).innerHTML;
		document.getElementById(l).innerHTML = a.splice(c, c, String.fromCharCode(code));
		sel(l, c + 1);
	}
}

