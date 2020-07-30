'use strict';

let currentProject = 0, currentVideo = 0, currentPhoto = 0;
let projectForwardBtn, projectBackBtn, projectTitle, projectContentDiv, videoFwdBtn, videoBackBtn, videoTitle, videoContentDiv, photoGallery, modal;

//define the different project option content
let workProjects = [{
		title: "Pick for Me",
		description: "A simple webpage born out of a crippling inability to make a choice! Give it a list and it will select one item from the list of potential choices that you provide it, or provide a random top 3 list, as randomly as JavaScript can with a Fisher-Yates Shuffle algorithm. Built in a couple of hours, when some friends and I considered having a remote internet hangout to all watch a movie together, but needed to decide who would pick the movie.",
		url: "https://garonbailey.github.io/pickForMe/",
		linkText: "Visit Pick for Me"
	// }, {
	// 	title: "Made from Scratch",
	// 	description: "A website built for a film project. The challenge here was to build a system where users could get a download of their script. Without wanting to just keep their script open on the internet for anyone to download it, we toyed with the idea of password protecting the entire site, but nixed that since it would then have less utility as a promotional tool. I came up with a system where the user inputs their name and email address to get a unique download link sent to them. That way, the user must use a real email address, and we can track who has made a download of it. The front-end is built using no frameworks or libraries, only vanilla JS, HTML, and CSS.",
	// 	url: "https://madefromscratch.herokuapp.com",
	// 	linkText: "Visit Made from Scratch (still pending possible re-designs)"
	}];

let videoProjects = [{
	title: "Break Out!",
	description: "<em>Synopsis:</em> A trapped person plans and executes a breakout attempt.<br/>Made during the Sidewalk Film Center's 2020 Quarantine Scramble competition, a five-day timed filmmaking contest restricted to stay-at-home rules. Apart from a remote-recorded voice performance by my sister, I completed every task on my own. Winner of the competition's Audience Award, voting being done via an online form over a week, which would normally grant it entry into the 2020 Sidewalk Film Festival, but with the pandemic throwing their normal schedule off, it will not screen at the Festival.",
	embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/RNAifMwO3LA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}, {
	title: "Joe the Rapper",
	description: "<em>Synopsis:</em> Music video for \"Joe the Rapper\" by Birmingham artist Thed Weller.<br/>Made during Sidewalk Film Center's Spring 2019 Music Video Scramble competition, a 48-hour timed filmmaking contest. I served as one of the videographers on this shoot.",
	embed: `<iframe width="560" height="315" src="https://www.youtube.com/embed/9bp_ugJupVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
}];

let photos = [];

//place correct project information on the page
const buildProject = (index) => {
	projectTitle.innerHTML = "";
	projectContentDiv.innerHTML = "";
	let activeProject = workProjects[index];
	projectTitle.innerHTML = `<h3>${activeProject.title}</h3>`;
	projectContentDiv.innerHTML = `<p>${activeProject.description}</p><div id="project-link"><a href="${activeProject.url}" target="_blank">${activeProject.linkText}</a></div>`;
	//eventually add a div with a project preview image, and I guess it can be a link, too
}
const buildVideo = (index) => {
	videoTitle.innerHTML = "";
	videoContentDiv.innerHTML = "";
	let activeVid = videoProjects[index];
	videoTitle.innerHTML = `<h3>${activeVid.title}</h3>`;
	videoContentDiv.innerHTML = `<br/><p>${activeVid.description}</p><br/><div id="video-embed">${activeVid.embed}</div>`;
}
const buildPhotoGallery = () => {
	if (photos.length === 0) {
		photoGallery.innerHTML = `<p>Coming Soon</p>`;
	}
}

/* changing projects */
//work
const nextProject = () => {
	// if (currentProject === 0) {
		projectBackBtn.classList.remove('inactive-btn');
	// }
	currentProject++;
	buildProject(currentProject);
	if (currentProject === (workProjects.length - 1)) {
		projectForwardBtn.classList.add('inactive-btn');
	}
}

const prevProject = () => {
	// if (currentProject === (workProjects.length - 1)) {
		projectForwardBtn.classList.remove('inactive-btn');
	// }
	currentProject--;
	buildProject(currentProject);
	if(currentProject === 0) {
		projectBackBtn.classList.add('inactive-btn');
	}
}

//video
const nextVideo = () => {
	// if (currentProject === 0) {
		videoBackBtn.classList.remove('inactive-btn');
	// }
	currentVideo++;
	buildVideo(currentVideo);
	if (currentVideo === (videoProjects.length - 1)) {
		videoFwdBtn.classList.add('inactive-btn');
	}
}

const prevVideo = () => {
	// if (currentProject === (workProjects.length - 1)) {
		videoFwdBtn.classList.remove('inactive-btn');
	// }
	currentVideo--;
	buildVideo(currentVideo);
	if(currentVideo === 0) {
		videoBackBtn.classList.add('inactive-btn');
	}
}

/* Modal functionality */
const openPhoto = (photo) => {
	modal.style.display = "block";
	//let photoDisplay = document.querySelector("#photo-display");
	//photoDisplay.innerHTML = `<img class="big-img" src="${photo}" />`;
	containerDiv.classList.add("dim");
}

const closeModal = () => {
	modal.style.display = "none";
	containerDiv.classList.remove("dim");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const initProjects = () => {
	/* define elements and defaults, build initial views */
	//work projects
	projectForwardBtn = document.querySelector("#project-forward");
	projectBackBtn = document.querySelector("#project-back");
	projectTitle = document.querySelector("#project-title");
	projectContentDiv = document.querySelector("#project-content");
	buildProject(currentProject);

	//video projects
	// videoFwdBtn = document.querySelector("#video-forward");
	// videoBackBtn = document.querySelector("#video-back");
	// videoTitle = document.querySelector("#video-title");
	// videoContentDiv = document.querySelector("#video-content");
	// buildVideo(currentVideo);

	//photo gallery
	//update later once I make a list of and import photos I want
	// photoGallery = document.querySelector("#photo-gallery");
	// modal = document.querySelector("#large-photo");
	// buildPhotoGallery();

	/* event listeners */
	//work projects
	projectForwardBtn.addEventListener("click", (e) => {
		if (currentProject < (workProjects.length - 1)) {
			nextProject();
		} else {
			e.preventDefault();
			return;
		}
	});

	projectBackBtn.addEventListener("click", (e) => {
		if (currentProject !== 0) {
			prevProject();
		} else {
			e.preventDefault();
			return;
		}
	});

	//video projects
	// videoFwdBtn.addEventListener("click", (e) => {
	// 	if (currentVideo < (videoProjects.length - 1)) {
	// 		nextVideo();
	// 	} else {
	// 		e.preventDefault();
	// 		return;
	// 	}
	// });

	// videoBackBtn.addEventListener("click", (e) => {
	// 	if (currentVideo !== 0) {
	// 		prevVideo();
	// 	} else {
	// 		e.preventDefault();
	// 		return;
	// 	}
	// });
}