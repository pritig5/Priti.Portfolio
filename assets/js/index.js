/*=============== SERVICES MODAL ===============*/
const modal = document.querySelectorAll('.services__modal'),
    modalButton = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close')
      

let activeModal = (modalClick) =>{
    modal[modalClick].classList.add('active-modal')
}

modalButton.forEach((modalButton, i) =>{
    modalButton.addEventListener('click', () =>{
        activeModal(i)
    })
})

modalClose.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modal.forEach((modalRemove) => {
            modalRemove.classList.remove('active-modal')
        })
    })
})
/*=============== SWIPER TESTIMONIAL ===============*/

// let newSwiper = new Swiper(".new-swiper", {
//     spaceBetween: 24,
//     loop: 'true',

//     breakpoints: {
//         576: {
//           slidesPerView: 2,
//         },
//         768: {
//           slidesPerView: 3,
//         },
//         1024: {
//           slidesPerView: 4,
//         },
//     },
// });


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)