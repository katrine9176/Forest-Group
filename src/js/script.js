const burgerButton = document.querySelector(".nav__burger--burger");
const close = document.querySelector(".nav__burger--close");
const linksBox = document.querySelector(".nav__links");
const links = document.querySelectorAll(".nav__links-link");
const footerYear = document.querySelector(".footer__year-date");
const userName = document.querySelector("#name");
const userSurname = document.querySelector("#surname");
const mail = document.querySelector("#mail");
const formMessage = document.querySelector("#content");
const confirmFormbutton = document.querySelector(".contact__form-btn");
const notification = document.querySelector(".contact__form-error");

const handleNav = () => {
	linksBox.classList.add("handle-nav");
	document.body.classList.add("overflow-y");
	burgerButton.style.display = "none";
	close.style.display = "block";

	const closeNav = () => {
		linksBox.classList.remove("handle-nav");
		document.body.classList.remove("overflow-y");
		burgerButton.style.display = "block";
		close.style.display = "none";
	};

	close.addEventListener("click", closeNav);
	links.forEach((link) => {
		link.addEventListener("click", closeNav);
	});
};

const setFormNotificationMessage = (message, isError = false) => {
	notification.textContent = message;
	notification.style.color = isError ? "red" : "green";
	setTimeout(() => {
		notification.textContent = "";
	}, 2000);
};

const checkForm = () => {
	const emailRegexp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/i;
	const formCondition = Boolean(
		userName.value && userSurname.value && formMessage.value
	);
	const isEmailCorrect = emailRegexp.test(mail.value);
	const hasError = true;
	if (formCondition) {
		setFormNotificationMessage("");
	} else {
		setFormNotificationMessage("Uzupełnij wszystkie pola!", hasError);
	}
	if (!isEmailCorrect) {
		setFormNotificationMessage("Nieprawidłowy email!", hasError);
	}
	if (isEmailCorrect && formCondition) {
		userName.value = "";
		userSurname.value = "";
		mail.value = "";
		formMessage.value = "";
		setFormNotificationMessage("Wiaodmość wysłana!", !hasError);
	}
};

const handleCurrentYear = () => {
	const date = new Date();
	const year = date.getFullYear();
	footerYear.innerText = year;
};

burgerButton.addEventListener("click", handleNav);

confirmFormbutton.addEventListener("click", (e) => {
	e.preventDefault();
	checkForm();
});

handleCurrentYear();
