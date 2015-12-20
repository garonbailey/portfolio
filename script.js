var $showButton = $('.show');
var $about = $('#intro');
var $portfolio = $('#portfolio');

$showButton.on('click', function () {
	$about.toggleClass('hidden');
	$portfolio.toggleClass('hidden');
});

var $burger = $('.burger');
var $menu = $('.links');

$burger.on('click', function () {
	$menu.toggleClass("closed");
});