"use strict";
exports.__esModule = true;
function Hello(name) {
    return "Hello " + name + "!";
}
exports.Hello = Hello;
function Send(phone, text) {
    var win = window.open("https://wa.me/" + phone + "?text=" + encodeURIComponent(text), '_blank');
    win.focus();
}
exports.Send = Send;
