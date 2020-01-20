// Author: Patrick Ingram
// Date: 10/15/2018
// Assignment: Chapter 6 Individual Case Project

function flashText() {
	var career = document.getElementById("flash");
	var lang = document.getElementById("flashlang");
	
	if (document.querySelector("#career option").value == "1") {
		career.style.color = "red";
	} else {
		career.style.color = "lime";
	}
	
	if (document.getElementsByName("langname").checked) {
		lang.style.color = "lime";
	} else {
		lang.style.color = "red";
	}
}

function eventValidate() {
	var userListen = document.querySelector("input[name=langname]");
	var userSelect = document.querySelector("#career option");
	userListen.addEventListener('change', flashText, false)
	userSelect.addEventListener('click', flashText, false)
}
	
if (window.addEventListener) {
	window.addEventListener("load", eventValidate, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", eventValidate);
}