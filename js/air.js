var l,c;

function init() {
sel(1,3);
}
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index + 1);
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
console.log("run");
clearInterval(interval);
l = line;
c = column;
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
	if (code == 40) {
		sel((l + 1),c);
	}
	if (code == 37) {
		sel(l,c - 1);
	}
	if (code == 39) {
		sel(l,c + 1);
	}
}


init();