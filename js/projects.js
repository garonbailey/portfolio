'use strict';

let currentProject = 0;
let forwardBtn, backBtn, projectTitle, projectContentDiv;

let projects = [{
		title: "Pick for Me",
		description: "A simple webpage born out of a crippling inability to make a choice! Give it a list and it will select one item from the list of potential choices that you provide it, or provide a random top 3 list, as randomly as JavaScript can with a Fisher-Yates Shuffle algorithm. Built in a couple of hours, when some friends and I considered having a remote internet hangout to all watch a movie together, but needed to decide who would pick the movie.",
		url: "https://garonbailey.github.io/pickForMe/",
		linkText: "Visit Pick for Me"
	}, {
		title: "Made from Scratch",
		description: "A website built for a film project. The challenge here was to build a system where users could get a download of their script. Without wanting to just keep their script open on the internet for anyone to download it, we toyed with the idea of password protecting the entire site, but nixed that since it would then have less utility as a promotional tool. I came up with a system where the user inputs their name and email address to get a unique download link sent to them. That way, the user must use a real email address, and we can track who has made a download of it. The front-end is built using no frameworks or libraries, only vanilla JS, HTML, and CSS.",
		url: "https://madefromscratch.herokuapp.com",
		linkText: "Visit Made from Scratch (still pending possible re-designs)"
	}];

const buildProject = (index) => {
	projectTitle.innerHTML = "";
	projectContentDiv.innerHTML = "";
	let activeProject = projects[index];
	projectTitle.innerHTML = `<h3>${activeProject.title}</h3>`;
	projectContentDiv.innerHTML = `<p>${activeProject.description}</p><div id="project-link"><a href="${activeProject.url}" target="_blank">${activeProject.linkText}</a></div>`;
	//eventually add a div with a project preview image, and I guess it can be a link, too
}

const nextProject = () => {
	// if (currentProject === 0) {
		backBtn.classList.remove('inactive-btn');
	// }
	currentProject++;
	buildProject(currentProject);
	if (currentProject === (projects.length - 1)) {
		forwardBtn.classList.add('inactive-btn');
	}
}

const prevProject = () => {
	// if (currentProject === (projects.length - 1)) {
		forwardBtn.classList.remove('inactive-btn');
	// }
	currentProject--;
	buildProject(currentProject);
	if(currentProject === 0) {
		backBtn.classList.add('inactive-btn');
	}
}

const initProjects = () => {
	forwardBtn = document.querySelector("#project-forward");
	backBtn = document.querySelector("#project-back");
	projectTitle = document.querySelector("#project-title");
	projectContentDiv = document.querySelector("#project-content");
	currentProject = 0;
	buildProject(currentProject);

	forwardBtn.addEventListener("click", (e) => {
		if (currentProject < (projects.length - 1)) {
			nextProject();
		} else {
			e.preventDefault();
			return;
		}
	});

	backBtn.addEventListener("click", (e) => {
		if (currentProject !== 0) {
			prevProject();
		} else {
			e.preventDefault();
			return;
		}
	});
}