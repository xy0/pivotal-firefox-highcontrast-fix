// ==UserScript==
// @name        XY0-pivotalFix
// @namespace   https://www.pivotaltracker.com/n/projects/
// @description F
// @include     https://www.pivotaltracker.com/*
// @version     1
// @grant       none
// ==/UserScript==

console.log('                              ');
console.log('            \\_|\\            ');
console.log('         ---script---         ');
///////////////////////\\\\\\\\\\\\\\\\\\\\\\\

var sheet = (function() {
  console.log("- Adding new Style Sheet");
  
	// Create the <style> tag
	var style = document.createElement("style");

	// Add a media (and/or media query) here if you'd like!
	// style.setAttribute("media", "screen")
	// style.setAttribute("media", "only screen and (max-width : 1024px)")

	// WebKit hack :(
	style.appendChild(document.createTextNode(""));

	// Add the <style> element to the page
	document.head.appendChild(style);

	return style.sheet;
})();

function addCSSRule(sheet, selector, rules, index) {
  console.log("- Adding Rule to Style Sheet");
	if("insertRule" in sheet) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else if("addRule" in sheet) {
		sheet.addRule(selector, rules, index);
	}
}

// Use it!
addCSSRule(sheet, "*", "color: black");



console.log('         --/script---         ');
