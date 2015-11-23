var $showButton = $('.show');
var $about = $('#intro');

$showButton.on('click', function () {
	$about.toggleClass('hidden');
});

var $burger = $('.burger');
var $menu = $('.links');

$burger.on('click', function () {
	$menu.toggleClass("closed");
});