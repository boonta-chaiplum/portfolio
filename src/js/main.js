import '../scss/styles.scss'

import * as bootstrap from 'bootstrap'

import Alert from 'bootstrap/js/dist/alert';

import { Tooltip, Toast, Popover } from 'bootstrap';

const navEl = document.querySelector('.navbar');

const displayEl = document.querySelector('#display')

const displaybodyEl = document.querySelector('#display-body')

window.addEventListener('scroll', () => {
    if(window.outerWidth >= 0){

        if (window.scrollY >= 58) {
            navEl.classList.remove('bg-transparent-xl');
            navEl.classList.add('border-bottom');
        
        
        
        } else if (window.scrollY < 50) {
            navEl.classList.add('bg-transparent-xl');
            navEl.classList.remove('border-bottom');
        }
        
        // displayEl.style.opacity = Math.max(5, 100 - window.scrollY) / 100;
    }

});

const Work2El = document.getElementById('Work-2-link');
Work2El.addEventListener('click', () => {
    var myOffcanvas = document.getElementById('offcanvasNavbar');
    var bsOffcanvas = bootstrap.Offcanvas.getInstance(myOffcanvas);
    bsOffcanvas.hide();
});
