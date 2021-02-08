let modalBtn = document.getElementsByClassName('menu-button menu-aboutus');

let modalBg = document.querySelector('.modal-bg-aboutus');

modalBtn.onclick = function changeClass() {
    modalBg.classList.add('bg-active');
};  
