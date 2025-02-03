//----- form btn
const formFiedset = document.querySelectorAll('.mftr_cont fieldset');
formFiedset.forEach(fieldset => {
    fieldset.addEventListener('click', (e) =>{

        const formBtn = fieldset.querySelectorAll('input');
        
        if(e.target.tagName === 'INPUT'){ 
            formBtn.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
        }

    });
});

//----- main swiper
let main_slide = new Swiper(".main_swiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

//----- md swiper
let md_slide = new Swiper(".md_swiper", {
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
          el: ".swiper-pagination",
      clickable: true,

    },
});

//----- tab btn
const tabSection = document.querySelector('.section4 .tab_menu');

tabSection.addEventListener('click', (e) => {

    const tabMenuBtn = tabSection.querySelectorAll('li');

    if(e.target.tagName === 'LI'){
        tabMenuBtn.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
    }
    
})

//----- marquee json + swiper marquee

const marquee1 = document.getElementById("review_marquee1")
const marquee2 = document.getElementById("review_marquee2")

fetch('../data/review.json')
    .then(response => response.json())
    .then(reviews => {
        reviews.forEach(review => {
            const li = document.createElement('li');
            
            li.classList.add('swiper-slide');
            li.innerHTML = `
                <a href="${review.href}">
                    <div class="img_box">
                        <img src="${review.img}" alt="${review.alt}">
                    </div>
                    <div class="txt_box">
                        <div class="user_info d-flex">
                            <b class="review_user">${review.nickname}</b>
                            <i class="review_rate">${review.rating}</i>
                        </div>
                        <p class="review_txt">${review.desc}</p>
                    </div>
                </a>
            `;
            marquee1.appendChild(li);
            marquee2.appendChild(li.cloneNode(true));
        });
    });


setTimeout(function(){
    let review_marquee1 = new Swiper(".flow_swiper1", {
        slidesPerView: "auto",
        loop: true,
        speed: 5000,
        freeMode: true,
        allowTouchMove: false,
        autoplay:{
            delay: 0,
            //pauseOnMouseEnter: true,
        }
    });
    const reviewContainer1 = document.querySelector(".flow_swiper1");
    function stopAutoplay1(){
        const swiperTranslate = review_marquee1.getTranslate();
        review_marquee1.setTranslate(swiperTranslate);
        review_marquee1.autoplay.stop();
    }
    function startAutoplay1(){
        review_marquee1.slideTo(review_marquee1.activeIndex, 2500, false);
        review_marquee1.autoplay.start();
    }
    reviewContainer1.addEventListener("mouseenter", () => stopAutoplay1());
    reviewContainer1.addEventListener("mouseleave", () => startAutoplay1());


    let review_marquee2 = new Swiper(".flow_swiper2", {
        slidesPerView: "auto",
        loop: true,
        speed: 5000,
        freeMode: true,
        allowTouchMove: false,
        autoplay:{
            delay: 0,
            //pauseOnMouseEnter: true,
            reverseDirection: true,
        }
    });
    const reviewContainer2 = document.querySelector(".flow_swiper2");
    function stopAutoplay2(){
        const swiperTranslate = review_marquee2.getTranslate();
        review_marquee2.setTranslate(swiperTranslate);
        review_marquee2.autoplay.stop();
    }
    function startAutoplay2(){
        review_marquee2.slideTo(review_marquee2.activeIndex, 2500, false);
        review_marquee2.autoplay.start();
    }
    reviewContainer2.addEventListener("mouseenter", () => stopAutoplay2());
    reviewContainer2.addEventListener("mouseleave", () => startAutoplay2());
}, 500)




        