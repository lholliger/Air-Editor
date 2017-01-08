function init() {
sel(1,3);
}
function on(line, column) {
var a =  document.getElementById(line).innerHTML;
var b = "|";
var position = column;
var output = [a.slice(0, position), b, a.slice(position, a.length)].join('');

    document.getElementById(line).innerHTML = output;
    setTimeout(function() { off(line, column); }, 750);
}


function off(line, column) {
var str = document.getElementById(line).innerHTML;
var str2 = str.slice(0, column) + str.slice(column+1);
console.log(str.slice(0, column-1));
console.log(str.slice(column));

document.getElementById(line).innerHTML = str2;
    console.log("off");
}


function sel(line, column) {
setInterval(function() {
setTimeout(function() { on(line, column); }, 750);
}, 1500);
}

init();
