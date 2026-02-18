'use strict';

const searchBtn = document.querySelector('.search_btn');
const search = document.querySelector('.search');
const chevronDown = document.querySelector('.chevron_down');

searchBtn.addEventListener('click', (e) => {
    search.classList.toggle('active')
})
document.addEventListener('keydown', (e) => {
    if (search.classList.contains('active') && e.key === 'Escape') {
        search.classList.remove('active');
    }
})

// document.addEventListener('click', (e) => {
//     if (search.classList.contains('active') && !e.target.classList.contains('search') || !e.target.classList.contains('search_btn')) {
//         search.classList.remove('active');
//     }
// })

const tourTypeLi = document.querySelector('.tour_types_li');
const tourTypeUl = document.querySelector('.tour_types_ul');

tourTypeLi.addEventListener('mouseenter', (e) => {
    tourTypeUl.classList.add('active');
    chevronDown.classList.add('active');

})

tourTypeLi.addEventListener('mouseleave', (e) => {
    tourTypeUl.classList.remove('active');
    chevronDown.classList.remove('active');
})


const navPrimary = document.querySelector('.nav_primary');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navPrimary.classList.toggle('active')
})

document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape' && navPrimary.classList.contains('active')){
        navPrimary.classList.remove('active')
    }
})


const mediaWatcher = window.matchMedia("(max-width:870px)");

function handleMediaQueryChange(event) {
    if (event.matches) {
        searchBtn.removeEventListener('click', (e) => {
            search.classList.toggle('active')
        })
    }
    else { console.log('did not match') }

}

mediaWatcher.addEventListener('change', handleMediaQueryChange
)
