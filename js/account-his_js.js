const deliveredTab = document.querySelector('#delivered');
const intransferTab = document.querySelector('#in-transfer');
const processingTab = document.querySelector('#processing');

const deliveredList = document.querySelector('.delivered-list');
const intransferList = document.querySelector('.in-transfer');
const processingList = document.querySelector('.processing');

deliveredList.classList.add('active-list');
deliveredTab.style.fontWeight = 600;

deliveredTab.addEventListener('click', () => {
    deliveredTab.style.fontWeight = 600;
    deliveredList.classList.add('active-list');
    intransferList.classList.remove('active-list');
    intransferTab.style.fontWeight = 'normal';
    processingList.classList.remove('active-list');
    processingTab.style.fontWeight = 'normal';
});

intransferTab.addEventListener('click', () => {
    deliveredList.classList.remove('active-list');
    deliveredTab.style.fontWeight = 'normal';
    intransferList.classList.add('active-list');
    intransferTab.style.fontWeight = 600;
    processingList.classList.remove('active-list');
    processingTab.style.fontWeight = 'normal';
});

processingTab.addEventListener('click', () => {
    deliveredList.classList.remove('active-list');
    deliveredTab.style.fontWeight = 'normal';
    intransferList.classList.remove('active-list');
    intransferTab.style.fontWeight = 'normal';
    processingList.classList.add('active-list');
    processingTab.style.fontWeight = 600;
});