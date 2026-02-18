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

const mediaQuery = window.matchMedia('(min-width:570px)');

function tourTypesClick(e) {
    if (e.matches) {
        tourTypeLi.removeEventListener('click', tourTypesToggle)
        tourTypeLi.addEventListener('mouseenter', tourTypesAdd)
        tourTypeLi.addEventListener('mouseleave', tourTypesRemove)
    } else {
        tourTypeLi.addEventListener('click', tourTypesToggle)
        tourTypeLi.removeEventListener('mouseenter', tourTypesAdd)
        tourTypeLi.removeEventListener('mouseleave', tourTypesRemove)
    }
}

function tourTypesAdd() {
    tourTypeUl.classList.add('active');
    chevronDown.classList.add('active');
}

function tourTypesRemove() {
    tourTypeUl.classList.remove('active');
    chevronDown.classList.remove('active');
}

function tourTypesToggle() {
    tourTypeUl.classList.toggle('active');
    chevronDown.classList.toggle('active');
}

mediaQuery.addEventListener('change', tourTypesClick)
tourTypesClick(mediaQuery)


const navPrimary = document.querySelector('.nav_primary');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    navPrimary.classList.toggle('active')
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navPrimary.classList.contains('active')) {
        navPrimary.classList.remove('active')
    }
})


