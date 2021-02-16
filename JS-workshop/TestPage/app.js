let modalBtn = document.getElementsByClassName('menu-button menu-aboutus')[0];
let modalClose = document.getElementsByClassName('closeMe')[0];

let modalBg = document.querySelector('.modal-bg-aboutus');

modalBtn.onclick = function activeModal() {
    modalBg.classList.add("bg-active");
}; 

 modalClose.onclick = function hiddenModal() {
    modalBg.classList.remove("bg-active");
};  
