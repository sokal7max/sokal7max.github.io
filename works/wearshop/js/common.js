$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		autoplay: true,
		loop: true,
		dots: true,
		dotsEach: true,
        items: 1,
		smartSpeed: 700,
        autoHeight: true
	});

	let menSubnav = document.getElementById('men_subnav');
	let womSubnav = document.getElementById('wom_subnav');
	let subnav = document.getElementById('nav_dropdown-men');



	document.addEventListener('click', function (e) {
		let targetEl = e.target;
		
		let targetElLeft = targetEl.getBoundingClientRect().left;

		if (targetEl.id === 'men_subnav' || targetEl.id ==='wom_subnav') {
			subnav.style.display = 'block';
			subnav.style.left = targetElLeft - ((subnav.offsetWidth / 2) - (targetEl.offsetWidth / 2)) + 'px';
		} else {
			subnav.style.display = 'none';
		}
	})



  });
