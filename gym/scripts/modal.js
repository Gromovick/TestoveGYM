function closeOpen() {
    document.querySelector('.modal').classList.toggle('modal--active');
}

document.querySelector('#modalOpen').addEventListener('click', closeOpen);
document.querySelector('#modalClose').addEventListener('click', closeOpen);


