			
// ====================== close and open navbar ==============================
			let menu = document.getElementById('nav')
			let open = document.getElementById('menu-btn')
			let close = document.getElementById('close')

				function openmenu() {
					menu.style.left = "0";
					open.style.display = "none";
					close.style.display = "inline-block"
				}
				function closemenu() {
					menu.style.left = "100%";
					open.style.display = "inline-block";
					close.style.display = "none";
				}
				var scrollTrigger = 60;
				let nav = document.getElementById('navbar');

// ==============change nav color ==============================================

				function change() {
					var nav = document.getElementById('navbar');

					var value = window.scrollY;

					if (value > 250) {
						nav.classList.add('nav-change');
					}
					else {
						nav.classList.remove('nav-change');
					}
				}

				window.addEventListener('scroll', change);