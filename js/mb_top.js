document.addEventListener("DOMContentLoaded", () => {
    const closeBtn = document.querySelector(".close-btn"); 
    const mbTop = document.querySelector("#mb-top"); 

    if (closeBtn && mbTop) {
        closeBtn.addEventListener("click", () => {
            mbTop.style.display = "none"; 
        });
    }
});

