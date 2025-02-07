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
        nextEl: ".swiper-button-prev",
        prevEl: ".swiper-button-next",
    },
    pagination: {
          el: ".swiper-pagination",
      clickable: true,

    },
});

//----- tab
fetch('../data/mainTabMenu.json')
  .then(response => response.json())
  .then(data => {
    const tabsContainer = document.getElementById('tabMenu');
    const contentContainer = document.getElementById('tabContent');

    // tabBtn
    data.forEach((tab, index) => {
      const tabButton = document.createElement('li');
      if (index === 0) tabButton.classList.add('active');
      tabButton.textContent = `#${tab.tabnm}`;
      
      tabButton.addEventListener('click', () => {
        document.querySelectorAll('#tabMenu li').forEach(t => t.classList.remove('active'));
        tabButton.classList.add('active');
        renderContent(tab.tablist);
      });

      tabsContainer.appendChild(tabButton);
    });

    // firstContentsRendering
    renderContent(data[0].tablist);

    function renderContent(tablist) {
        contentContainer.innerHTML = '';
        
        tablist.forEach(item => {
            const contentItem = document.createElement('li');
            contentItem.className = 'd-flex align-items-end content_desc';
            contentItem.style.backgroundImage = `url("${item.src}")`;
    
            contentItem.innerHTML = `
                <a href="${item.href}" class="d-flex align-items-center justify-content-center">
                    <b>${item.title}</b>
                    <span>${item.desc}</span>
                </a>
            `;
    
            contentContainer.appendChild(contentItem);
        });
    }
  })
  .catch(error => console.error('Error loading JSON:', error));


  
//----- marquee json + swiper marquee

const marquee1 = document.getElementById("review_marquee1");
const marquee2 = document.getElementById("review_marquee2");

fetch('../data/review.json')
    .then(response => response.json())
    .then(reviews => {
        const midpoint = Math.ceil(reviews.length / 2);  // 데이터 절반 (15개)

        const list1 = []; // marquee1에 들어갈 요소들
        const list2 = []; // marquee2에 들어갈 요소들
        const cloneCount = 10; // 루프처럼 보이게 하기 위해 추가할 개수

        reviews.forEach((review, index) => {
            const reviewLi = document.createElement('li');
            reviewLi.classList.add('marquee_content');
            reviewLi.innerHTML = `
                <a href="${review.href}">
                    <div class="img_box">
                        <img src="${review.img}" alt="${review.alt}">
                    </div>
                    <div class="txt_box">
                        <div class="user_info d-flex pc">
                            <b class="review_user">${review.nickname}</b>
                            <i class="review_rate">${review.rating}</i>
                        </div>
                        <p class="review_txt pc">${review.desc}</p>
                        <div class="user_info mb">
                            <b class="review_user">${review.nickname} 님의 후기</b>
                        </div>
                    </div>
                </a>
            `;

            if (index < midpoint) {
                list1.push(reviewLi); // 1~15번째 아이템
            } else {
                list2.push(reviewLi); // 16~30번째 아이템
            }
        });

        // 앞부분 일부 아이템을 복제하여 뒤에 추가 (루프 효과)
        const cloneList1 = list1.slice(0, cloneCount).map(item => item.cloneNode(true));
        const cloneList2 = list2.slice(0, cloneCount).map(item => item.cloneNode(true));

        // 리스트 추가
        list1.forEach(item => marquee1.appendChild(item));
        cloneList1.forEach(item => marquee1.appendChild(item));

        list2.forEach(item => marquee2.appendChild(item));
        cloneList2.forEach(item => marquee2.appendChild(item));
    });