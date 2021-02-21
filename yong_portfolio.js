$(document).ready(function () {
	var check = $("input[type='checkbox']");

	$('.nav_btn').hover(
		function () {
			$(this).css('background', 'gray');
		},
		function () {
			$(this).css('background', 'white');
		},
	);
});

function MoveTo(tag) {
	var offset = $('#' + tag).offset();
	$('html, body').animate({ scrollTop: offset.top - 100 }, 250);
}
