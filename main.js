const menu = document.querySelector('.menu');
const openBar = document.querySelector('#open');
const closeBar = document.querySelector('#close')

openBar.addEventListener('click', ()=>{
    menu.style.display = 'flex'
    closeBar.style.display = 'flex'
    openBar.style.display = 'none';
})
closeBar.addEventListener('click', ()=>{
    menu.style.display = 'none'
    closeBar.style.display = 'none'
    openBar.style.display = 'flex';
})