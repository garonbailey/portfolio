'use strict';

let copyright, mainContent, navigationMenu, navMenuToggle, themeSwitch, currentTheme, mailTo;

//set footer text with current year
let currentYear = new Date();
currentYear = currentYear.getFullYear();

/* previously toyed with changing color theme on click; abandoning for now, but leaving the code in case
   I want to try to re-implement it later. 
//theme text 
let darkText = "Go Light!";
let lightText = "Go Dark!";
let lightTheme = {
	backgroundColor: 'floralwhite', //get this in rgb for the purposes of the gradients
	color: '#1C3144'
}
const switchColors = () => {
	console.log("hit switch colors; current theme? ", currentTheme);
	let body = document.querySelector("body");
	if (currentTheme === 'dark') {
		currentTheme = 'light';
		themeSwitch.innerText = lightText;
		body.setAttribute('style', `background-color: ${lightTheme.backgroundColor} !important; color: ${lightTheme.color} !important;`)
	} else {
		currentTheme = 'dark';
		themeSwitch.innerText = darkText;
		body.removeAttribute('style');
	}
	console.log("and new theme? ", currentTheme);
	//functionality here to apply a dark theme or a light theme; proposed:
	//plain text or an object or whatever with the light styles, get page elements and apply
	//them directly if switching to light; if switching to dark, remove those.
}

*/
const scrollToTop = () => {
	window.scrollTo(0,0);
}

const changePage = pageTag => {
	let currentActivePage = document.querySelector('.active');
	let selectedPage = document.getElementById(pageTag);
	currentActivePage.classList.remove('active');
	currentActivePage.classList.add('inactive');
	selectedPage.classList.remove('inactive');
	selectedPage.classList.add('active');
	if (!navigationMenu.classList.contains('closed')) {
		navigationMenu.classList.add('closed');
		navMenuToggle.classList.toggle('change');
	}
	window.location.hash = pageTag;
	setTimeout(scrollToTop, 50);
	//scrollToTop();
}

const changeTab = tabTag => {
	let currentActiveTab = document.querySelector('.active-div');
	let currentActiveTabBtn = document.querySelector('.active-tab');
	let selectedTab = document.getElementById(tabTag);
	let selectedTabBtn = document.getElementById(`${tabTag}-tab`);
	currentActiveTab.classList.remove('active-div');
	currentActiveTab.classList.add('inactive-div');
	currentActiveTabBtn.classList.remove('active-tab');
	selectedTabBtn.classList.add('active-tab');
	selectedTab.classList.remove('inactive-div');
	selectedTab.classList.add('active-div');
}

const toggleMenu = elem => {
	elem.classList.toggle('change');
	navigationMenu.classList.toggle('closed');
}

const submitContact = () => {
	let form = document.getElementById('contact-form');
	let formName = document.getElementById('name').value;
	let formReplyTo = document.getElementById('email').value;
	let formBody = document.getElementById('form-message').value;
	// let formMethod = "POST";
	// let formAction = "https://formspree.io/mnqzwvbb";
	// console.log("eventually build AWS Lambda service to handle email contacts");
	// console.log("input form: ", form);
	// console.log("form data! name: ", formName, "; email: ", formReplyTo, "; message body: ", formBody);
	// console.log("method: ", formMethod);
	// console.log("action: ", formAction);
	//format the data into the proper json object, i guess? or change the form to a more traditional form with
	// POST and action
	//make fetch request with this information
	/*
		action="https://formspree.io/mnqzwvbb"
  		method="POST"
	*/
}

const externalLinks = {
	linkedin: "https://linkedin.com/in/garonbailey",
	github: "https://github.com/garonbailey"
}

const externalLink = link => {
	window.open(externalLinks[link], "_blank");
}

//for temporary purposes, code to obfuscate a mailto link; eventually, build a back-end email handler and form
// Email obfuscator script 2.1 by Tim Williams, University of Arizona
// Random encryption key feature coded by Andrew Moulden
// This code is freeware provided these four comment lines remain intact
// A wizard to generate this code is at http://www.jottings.com/obfuscator/
const emailHandler = () => {
	let coded = "rFa7L@rFa7L5FVklY.87P",
	  	key = "IGm9JotzwricY3MODRhkH02PbU71TsaV8nuE4AfedqCpB56xSjgFQyLWvNKXlZ",
	  	shift = coded.length,
	  	link = "";
	  for (let i = 0; i < coded.length; i++) {
	    if (key.indexOf(coded.charAt(i))==-1) {
	      var ltr = coded.charAt(i);
	      link += (ltr);
	    } else {     
	      var ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
	      link += (key.charAt(ltr));
	    }
	  }
	window.open(`mailto:${link}?subject=Contact from garonbailey.com`, "_blank");
	// mailTo.innerHTML = `<a href="mailto:${link}?subject=Contact from garonbailey.com" target="_blank">Email me!</a>`;
}

window.onload = () => {
	copyright = document.getElementById('copyright');
	mainContent = document.getElementById('layout-content-container');
	navigationMenu = document.getElementById('menu');
	navMenuToggle = document.getElementById('menu-toggle');
	// mailTo = document.getElementById('email-me');
	initProjects();
	// buildEmailLink();

	copyright.innerText = (currentYear == 2020)?currentYear:'2020-' + currentYear;

	let currentLocation = window.location.hash;
	if (currentLocation) {
		changePage(currentLocation.replace("#", ""));
	} else {
		//nothing
	} 
}