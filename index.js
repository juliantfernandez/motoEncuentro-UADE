document.addEventListener('DOMContentLoaded', function () {
    let burguer = document.getElementById('burguer');
    let navList = document.querySelector('nav ul');

    burguer.addEventListener('click', function () {
        navList.classList.toggle('active');
        navList.classList.toggle('disable');
    });
});