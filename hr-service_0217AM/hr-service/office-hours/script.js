window.onload = function () {
	let hamburgerBtn = document.querySelector(".hamburger");
	let restToggleOff = document.querySelector(".rest-toggle-off");
	let restToggleOn = document.querySelector(".rest-toggle-on");
	let restButton = document.querySelector(".commute-info .rest");
	// let xBtn = document.querySelector(".xbtn");
	let sideMenub = document.querySelector(".menu-b");

	let sideMenu = document.querySelector(".side-bar")
	hamburgerBtn.addEventListener("click", function () {
		sideMenu.classList.toggle("d-none");
		// sideMenu.transform: translateX
		sideMenub.classList.toggle("d-none");
	})
	restToggleOff.addEventListener("click", restToggleListener);
	restToggleOn.addEventListener("click", restToggleListener);

	function restToggleListener() {
		restToggleOff.classList.toggle("d-none");
		restToggleOn.classList.toggle("d-none");
		restButton.classList.toggle("d-none");
	}

	// xBtn.addEventListener("click", function () {
	// 	sideMenu.classList.toggle("d-none");
	// 	hamburgerBtn.classList.toggle("d-none");
	// 	xBtn.classList.toggle("d-none");
	// })
}