const navigator = document.querySelector('.nav-bar .navigator i'),
navigator2 = document.querySelector('.nav-bar .navigator i')
navBar = document.querySelector('.nav-bar ul');


navigator.onclick = () => {
    navBar.classList.toggle('active');
    navigator2.classList.toggle('active')
}