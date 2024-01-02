const hamburgerMenuContainerTag = document.querySelector(
	".hamburger_menu_container"
);
const hamburgerline1Tag = document.querySelector(".line1");
const hamburgerline2Tag = document.querySelector(".line2");
const hamburgerline3Tag = document.querySelector(".line3");
const overlayMenuTag = document.querySelector(".overlayMenu");

hamburgerMenuContainerTag.addEventListener("click", () => {
	if (hamburgerMenuContainerTag.classList.contains("isOpened")) {
		overlayMenuTag.classList.remove("showoverlayMenu");
		hamburgerline2Tag.classList.remove("hideline2");
		hamburgerline1Tag.classList.remove("rotatePlus45Dreg");
		hamburgerline3Tag.classList.remove("rotateMinus45Dreg");
		hamburgerMenuContainerTag.classList.remove("isOpened");
	} else {
		overlayMenuTag.classList.add("showoverlayMenu");
		hamburgerline2Tag.classList.add("hideline2");
		hamburgerline1Tag.classList.add("rotatePlus45Dreg");
		hamburgerline3Tag.classList.add("rotateMinus45Dreg");
		hamburgerMenuContainerTag.classList.add("isOpened");
	}
});
