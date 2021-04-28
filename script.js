const HEADER_PIXEL = 100;
const AUTO_SCROLL_TIME = 500;

const menus_string = ['Intro', 'Skills', 'Projects'];
const menus_offset = menus_string.map((v) => {
	return $(`#${v + '_item'}`).offset();
});

$(document).ready(() => {
	$('.nav_btn').hover(
		function () {
			$(this).css('background', 'gray');
		},
		function () {
			changeCurrentBtnGray();
		}
	);

	$(window).on('scroll', changeCurrentBtnGray);
});

function changeCurrentBtnGray() {
	const scroll_top = $(this).scrollTop();
	let idx_cur_item = 0;
	for (let i of menus_offset) {
		if (i.top - HEADER_PIXEL <= scroll_top) {
			idx_cur_item = menus_offset.indexOf(i);
		}
	}
	for (let i = 0; i < menus_string.length; i++) {
		if (i === idx_cur_item) {
			$(`#${menus_string[i] + '_btn'}`).css('background', 'gray');
		} else {
			$(`#${menus_string[i] + '_btn'}`).css('background', 'white');
		}
	}
}

function moveTo(from) {
	const dest = from.replace('btn', 'item');
	const offset = $('#' + dest).offset();
	$('html, body').animate(
		{ scrollTop: offset.top - HEADER_PIXEL },
		AUTO_SCROLL_TIME
	);
}
