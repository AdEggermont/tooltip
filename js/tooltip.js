$(document).ready(function() {

	var $tooltipTrigger = $('#button a'),
		$tooltip = $('#tooltip'),
		speed = 200,
		startPos = parseInt($tooltip.css('left'));

	$tooltipTrigger.hover(function() {
		$tooltip.animate({'left' : startPos + 60}, { duration: speed, queue: false });
		$tooltip.fadeIn(speed);
	}, function() {
		$tooltip.animate({'left' : startPos}, { duration: speed, queue: false });
		$tooltip.fadeOut(speed);
	});
});
