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
            const reviewLi = document.createElement('li');
            
            reviewLi.classList.add('swiper-slide');
            reviewLi.innerHTML = `
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
            marquee1.appendChild(reviewLi);
            marquee2.appendChild(reviewLi.cloneNode(true));
            // 미래의 내가 해결할 부분^-^
            // 스와이퍼랑 같이 알아서 바꿔서 해보세요!!!
        });
    });

//나중에 생각해야지
setTimeout(function() {
    let review_marquee1 = new Swiper(".flow_swiper1", {
        slidesPerView: "auto",
        loop: true,
        speed: 5000,
        freeMode: false,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            //pauseOnMouseEnter: true,
        }
    });

    let review_marquee2 = new Swiper(".flow_swiper2", {
        slidesPerView: "auto",
        loop: true,
        speed: 5000,
        freeMode: true,
        allowTouchMove: false,
        autoplay: {
            delay: 0,
            reverseDirection: true,
            //pauseOnMouseEnter: true,
        }
    });

    // 공통 이벤트 처리 함수
    function addHoverAutoplayControl(swiperInstance, containerSelector) {
        const container = document.querySelector(containerSelector);

        container.addEventListener("mouseenter", function() {
            const translate = swiperInstance.getTranslate();
            swiperInstance.setTranslate(translate);
            swiperInstance.autoplay.stop();
        });

        container.addEventListener("mouseleave", function() {
            swiperInstance.slideTo(swiperInstance.activeIndex, 2500, false);
            swiperInstance.autoplay.start();
        });
    }

    // 각각의 스와이퍼에 이벤트 추가
    addHoverAutoplayControl(review_marquee1, ".flow_swiper1");
    addHoverAutoplayControl(review_marquee2, ".flow_swiper2");

}, 500);
    