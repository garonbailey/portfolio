var $projectBubble = $('#projects');
var $projectFilter = $('#project-filter');

var $bioBubble = $('#bio');
var $bioFilter = $('#bio-filter');

var $connectBubble = $('#connect');
var $connectFilter = $('#connect-filter');

var $contentTitle = $('#content-title');


$projectBubble.on('mouseenter mouseleave', function () {
	$projectFilter.toggleClass('hidden');
});

$projectBubble.on('mouseenter', function () {
	$contentTitle.text('projects');
});

$projectBubble.on('mouseleave', function () {
	$contentTitle.text('code. build. create.');
});

$bioBubble.on('mouseenter mouseleave', function () {
	$bioFilter.toggleClass('hidden');
});

$bioBubble.on('mouseenter', function () {
	$contentTitle.text('bio');
});

$bioBubble.on('mouseleave', function () {
	$contentTitle.text('code. build. create.');
});

$connectBubble.on('mouseenter mouseleave', function () {
	$connectFilter.toggleClass('hidden');
});

$connectBubble.on('mouseenter', function () {
	$contentTitle.text('connect');
});

$connectBubble.on('mouseleave', function () {
	$contentTitle.text('code. build. create.');
});

var $burger = $('.burger');
var $menu = $('.links');

$burger.on('click', function () {
	$menu.toggleClass("closed");
});