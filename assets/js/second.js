
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
