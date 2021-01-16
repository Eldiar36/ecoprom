const accordions = document.querySelectorAll(".accordion-wrapper");
for (const accordion of accordions) {
    const panels = accordion.querySelectorAll(".accordion");
    for (const panel of panels) {
        const head = panel.querySelector(".accordion-header");
        head.addEventListener('click', () => {
            for (const otherPanel of panels) {
                if (otherPanel !== panel) {
                    otherPanel.classList.remove('accordion-expanded');
                }
            }
            panel.classList.toggle('accordion-expanded');
        });
    }
}
$(document).ready(function(){
    $(".nav-slider").owlCarousel({
        items: 1,
        loop:true,
        nav:false,
        dots:false,
        margin:0,
        responsive: {
            0:{
                items: 1,
                margin:20,
            },
            480:{
                items:2
            },
            767:{
                items:1
            },
        }
    });
});