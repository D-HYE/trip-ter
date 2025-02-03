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
        });
    });

let review_marquee = new Swiper(".flow_swiper1", {
    slidesPerView: "auto",
    loop: true,
    speed: 5000,
    freeMode: true,
    allowTouchMove: true,
    autoplay:{
        delay: 0,
    }
});
const reviewContainer = document.querySelector(".flow_swiper1");

function stopAutoplay(){
    const swiperTranslate = review_marquee.getTranslate();
    review_marquee.setTranslate(swiperTranslate);
    review_marquee.autoplay.stop();
}
function startAutoplay(){
    review_marquee.slideTo(review_marquee.activeIndex, 2500, false);
    review_marquee.autoplay.start();
}

reviewContainer.addEventListener("mouseenter", () => stopAutoplay());
reviewContainer.addEventListener("mouseleave", () => startAutoplay());
        