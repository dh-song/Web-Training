window.onload = function () {
	let hamburgerBtn = document.querySelector(".hamburger");
	let restToggleOff = document.querySelector(".rest-toggle-off");
	let restToggleOn = document.querySelector(".rest-toggle-on");
	let restButton = document.querySelector(".commute-info .rest");
	// let xBtn = document.querySelector(".xbtn");
	let sideMenub = document.querySelector(".menu-b"); //유틸?
	let restEditorBox = document.querySelector(".rest-editor-box"); //휴게편집창 추가 부분
	let restEditSubmit = document.querySelector(".rest-edit-submit");//휴게편집창 추가 부분

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

	//휴게편집창 추가 부분 
	restButton.addEventListener("click", restEditorOnListener);
	restEditSubmit.addEventListener("click", restEditorOffListener);

	function restEditorOnListener(){
		restEditorBox.classList.remove("d-none");
		sideMenub.classList.remove("d-none");
		// restPopupChk.checked = true;
	}

	function restEditorOffListener(){
		restEditorBox.classList.add("d-none");
		sideMenub.classList.add("d-none");
		// restPopupChk.checked = false;
	}
	//휴게편집창 추가 부분 ↑↑↑↑




	// 팝업 외부 화면 클릭으로 창 닫기---------
	addEventListener("mouseup", (e) => {
		if (!restEditorBox.classList.contains("d-none")) {
			if (!restEditorBox.contains(e.target)) {
				restEditorOffListener();
			}
		}
	});
	// 팝업 외부 화면 클릭으로 창 닫기---------





	// xBtn.addEventListener("click", function () {
	// 	sideMenu.classList.toggle("d-none");
	// 	hamburgerBtn.classList.toggle("d-none");
	// 	xBtn.classList.toggle("d-none");
	// })


	// 시간 스크립트 임시-------------------------
	let defaults = {
		pagination: '.swiper-pagination',
		slidesPerView: 2,
		freeMode: true,
		freeModeSticky: true,
		freeModeMomentumRatio: 0.25,
		freeModeVelocityRatio: 0.25,
		freeModeMinimumVelocity: 0.1,
		mousewheelControl: true,
		mousewheelSensitivity: 0.5,
		loop: true,
		loopAdditionalSlides: 5,
		direction: 'vertical',
		slideToClickedSlide: true,
		centeredSlides: true
	  };

	let swh = document.querySelector(".swiper-container.hours");
	let swm = document.querySelector(".swiper-container.minutes")
	const swiper = new Swiper(swh,defaults);
	const swiper2 = new Swiper(swm,defaults);
	// -------------------------------------------
}