$(document).ready(function() {
	$('.tooltip').tooltipster();

});

$('.tooltip').tooltipster({
	theme: 'tooltipster-noir'
});

$('.scroll').click(function() {
	$('.education').animatescroll();
});
