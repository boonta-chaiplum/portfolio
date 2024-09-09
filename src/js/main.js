import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

import { Tooltip, Toast, Popover } from 'bootstrap';

const navEl = document.querySelector('.navbar');

const stickyEl = document.querySelector('.sticky-opacity')

const displayEl = document.querySelector('#display')

const displaybodyEl = document.querySelector('#display-body')

window.addEventListener('scroll', () => {
    if(window.outerWidth >= 0){

        if (window.scrollY >= 60) {
            navEl.classList.remove();
            navEl.classList.add('navbar-backdrop');
            stickyEl.classList.add('sticky-opacity-none');

        
        
        
        } else if (window.scrollY < 59) {
            navEl.classList.add();
            navEl.classList.remove('navbar-backdrop');
            stickyEl.classList.remove('sticky-opacity-none');
        }
        
       stickyEl.style.opacity = Math.max(100 - window.scrollY) / 100;
    }

});

const Work2El = document.getElementById('Work-2-link');
Work2El.addEventListener('click', () => {
    var myOffcanvas = document.getElementById('offcanvasNavbar');
    var bsOffcanvas = bootstrap.Offcanvas.getInstance(myOffcanvas);
    bsOffcanvas.hide();
});
