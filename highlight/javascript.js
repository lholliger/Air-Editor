String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function HI_REP() {
/*
var redata = document.getElementById("data").innerHTML;
redata = redata.replaceAll("var", "<span style='color: red;'>var</span>");
redata = redata.replaceAll("true", "<span style='color: green;'>true</span>");
redata = redata.replaceAll("false", "<span style='color: green;'>false</span>");
redata = redata.replaceAll(",", "<span style='color: blue;'>,</span>")
document.getElementById("data").innerHTML = redata;
*/
}

function HI_CLR() {
/*
var redata = document.getElementById("data").innerHTML;
redata = redata.replaceAll("<span style='color: red;'>var</span>", "var");
redata = redata.replaceAll("<span style='color: green;'>true</span>", "true");
redata = redata.replaceAll("<span style='color: green;'>false</span>", "false");
redata = redata.replaceAll("<span style='color: blue;'>,</span>>", ",");
document.getElementById("data").innerHTML = redata;
*/
}
