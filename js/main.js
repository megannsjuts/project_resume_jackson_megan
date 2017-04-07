// this is the tooltipster plugin, which adds a nice greeting when the user
// hovers over my bio image.

$(document).ready(function() {
	$('.tooltip').tooltipster();

});

$('.tooltip').tooltipster({
	theme: 'tooltipster-noir'
});

// this is custom jQuery code that adds interactivity to the page by customizing
// the animate scroll plugin. When user clicks on the paragraph text in the
// header, the page will automatically scroll the education section

$('.scroll').click(function() {
	// this is the animatescroll plugin
	$('.education').animatescroll();
});
