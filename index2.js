'use strict'

const formLogin = document.querySelector('.form_container');
const formSignup = document.querySelector('.form_signup');
const signupLink = document.querySelector('.signup_link');

signupLink.addEventListener('click', () => {
    formLogin.classList.add('active');
    formSignup.classList.add('active');
})

const passwordInput = document.querySelector('#password');
const svgVisible = document.querySelector('.svg_visible');
const svgVisibleOff = document.querySelector('.svg_visible_off');

svgVisible.addEventListener('click', () => {
    passwordInput.setAttribute('type', 'text');
    svgVisible.classList.add('active');
    svgVisibleOff.classList.add('active');
})

svgVisibleOff.addEventListener('click', () => {
    passwordInput.setAttribute('type', 'password');
    svgVisible.classList.remove('active');
    svgVisibleOff.classList.remove('active');

})


const svgVisibleSignup = document.querySelector('.svg_visible_signup')
const svgVisibleOffSignup = document.querySelector('.svg_visible_off_signup')

const svgVisibleSignupRe = document.querySelector('.svg_visible_signup_re')
const svgVisibleOffSignupRe = document.querySelector('.svg_visible_off_signup_re')

const passwordSignup = document.querySelector('#password_signup')
const passwordSignupRe = document.querySelector('#password_re')

svgVisibleSignup.addEventListener('click', () => {
    svgVisibleSignup.classList.add('active');
    svgVisibleOffSignup.classList.add('active');
    passwordSignup.setAttribute('type', 'text')

})
svgVisibleSignupRe.addEventListener('click', () => {
    svgVisibleSignupRe.classList.add('active');
    svgVisibleOffSignupRe.classList.add('active');
    passwordSignupRe.setAttribute('type', 'text')
})

svgVisibleOffSignup.addEventListener('click', () => {
    svgVisibleSignup.classList.remove('active');
    svgVisibleOffSignup.classList.remove('active');
    passwordSignup.setAttribute('type', 'password')
})
svgVisibleOffSignupRe.addEventListener('click', () => {
    svgVisibleSignupRe.classList.remove('active');
    svgVisibleOffSignupRe.classList.remove('active');
    passwordSignupRe.setAttribute('type', 'password')
})