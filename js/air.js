var l,c;

function init() {
sel(1,3);
}
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index + 1);
}

if (!String.prototype.splice) {
    /**
     * {JSDoc}
     *
     * The splice() method changes the content of a string by removing a range of
     * characters and/or adding new characters.
     *
     * @this {String}
     * @param {number} start Index at which to start changing the string.
     * @param {number} delCount An integer indicating the number of old chars to remove.
     * @param {string} newSubStr The String that is spliced in.
     * @return {string} A new string with the spliced substring.
     */
    String.prototype.splice = function(start, delCount, newSubStr) {
        return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
    };
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


init();
