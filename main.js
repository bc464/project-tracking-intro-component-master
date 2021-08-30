function myFunction() {
	let icon = document.querySelector("#icon");
    let dropdownContent = document.querySelector(".dropdown-content");
    let dropdown = document.querySelector(".dropdown");
	let iconClose = document.querySelector(".icon-close");
	if(icon.style.display === "block") {
		icon.style.display = "none";
		iconClose.style.display = "block";
		iconClose.style.visibility = "visible";
		dropdownContent.style.display = "block";
	} else {
		icon.style.display = "block";
		dropdownContent.style.display = "none";
		iconClose.style.visibility = "hidden";
	}
}