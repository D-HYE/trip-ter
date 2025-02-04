const menu = document.querySelector("#hb-submenu");
const hamburgerButton = document.querySelector("#hamburger-btn"); // 햄버거 버튼
const closeButton = menu.querySelector("button.p-0"); // X 버튼
const body = document.querySelector("body"); // 바깥 영역 클릭 감지
const dimBackground = document.getElementById("dim-background");

// 햄버거 버튼 클릭 시 메뉴 열기
hamburgerButton.addEventListener("click", () => {
    menu.classList.add("open"); // 메뉴에 'open' 클래스를 추가하여 보이게 함
    dimBackground.classList.remove("d-none");
    dimBackground.style.display = "block";
});

// X 버튼 클릭 시 메뉴 닫기
closeButton.addEventListener("click", () => {
    menu.classList.remove("open"); // 'open' 클래스를 제거하여 메뉴 숨기기
    dimBackground.classList.add("d-none");
    dimBackground.style.display = "none"
});

// 바깥 영역 클릭 시 메뉴 닫기
body.addEventListener("click", (e) => {
    if (!menu.contains(e.target) && !hamburgerButton.contains(e.target)) {
        menu.classList.remove("open"); // 메뉴가 아닌 영역을 클릭하면 메뉴 숨기기
        dimBackground.classList.add("d-none");
        dimBackground.style.display = "none"
    }
});

const isLoggedIn = false;
const loginSection = document.getElementById("login-section");
const loggedInSection = document.getElementById("logged-in-section");

if (isLoggedIn) {
    loginSection.style.display = "none";
    loggedInSection.classList.remove("d-none");
} else{
    loginSection.style.display = "block";
    loggedInSection.classList.add("d-none");
}