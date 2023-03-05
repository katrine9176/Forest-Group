const burger = document.querySelector('.nav__burger--burger')
const close = document.querySelector('.nav__burger--close')
const linksBox = document.querySelector('.nav__links')
const links = document.querySelectorAll('.nav__links-link')
const footerYear = document.querySelector('.footer__year span')
const userName = document.querySelector('#name')
const userSurname = document.querySelector('#surname')
const mail = document.querySelector('#mail')
const content = document.querySelector('#content')
const sendBtn = document.querySelector('.contact__form-btn')
const error = document.querySelector('.contact__form-error')

const handleNav = () => {
	linksBox.classList.add('handle-nav')
	document.body.classList.add('overflow-y')
	burger.style.display = 'none'
	close.style.display = 'block'

	const closeNav = () => {
		linksBox.classList.remove('handle-nav')
		document.body.classList.remove('overflow-y')
		burger.style.display = 'block'
		close.style.display = 'none'
	}

	close.addEventListener('click', closeNav)
	links.forEach(link => {
		link.addEventListener('click', closeNav)
	})
}

const checkForm = () => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

	if (userName.value && userSurname.value && content.value !== '') {
		error.textContent = ''
		if (!re.test(mail.value)) {
			error.textContent = 'Nieprawidłowy email!'
		} else {
			userName.value = ''
			userSurname.value = ''
			mail.value = ''
			content.value = ''
		}
	} else {
		error.textContent = 'Uzupełnij wszystkie pola!'
	}
}

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

burger.addEventListener('click', handleNav)
sendBtn.addEventListener('click', e => {
	e.preventDefault()
	checkForm()
})
handleCurrentYear()
