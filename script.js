const HEADER_PIXEL = 100;

let menus, btns;

document.addEventListener('DOMContentLoaded', () => {
	menus = ['Intro', 'Skills', 'Projects'].map((m) => {
		return {
			menu: m,
			top: document.querySelector(`#${m}_item`).getBoundingClientRect()
				.top
		};
	});
	menus.push({
		menu: 'Github',
		top: Infinity
	});
	console.log(menus);

	btns = document.querySelectorAll('.nav_btn');
	for (let b of btns) {
		b.addEventListener('mouseover', () => {
			b.style.background = 'gray';
		});
		b.addEventListener('mouseout', () => {
			changeCurrentBtnGray();
		});
	}

	window.addEventListener('scroll', changeCurrentBtnGray);
});

function changeCurrentBtnGray() {
	const scroll_top = window.scrollY;
	let idx_cur_item = 0;
	for (let i of menus) {
		if (i.top - HEADER_PIXEL <= scroll_top) {
			idx_cur_item = menus.indexOf(i);
		}
	}
	for (let i = 0; i < menus.length; i++) {
		if (i === idx_cur_item) {
			document.querySelector(`#${menus[i].menu}_btn`).style.background =
				'gray';
		} else {
			document.querySelector(`#${menus[i].menu}_btn`).style.background =
				'white';
		}
	}
}

function moveTo(from) {
	const dest = from.replace('btn', 'item');
	const offset = menus.filter((m) => {
		return m.menu === from.replace('_btn', '');
	})[0];
	window.scrollTo({
		top: offset.top,
		behavior: 'smooth'
	});
	console.log(offset.top);
}
