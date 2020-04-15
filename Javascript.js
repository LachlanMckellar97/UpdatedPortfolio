const toggleButton = document.getElementById('toggleButton')
const navbarLinks = document.getElementsByClassName('navbarLinks')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})