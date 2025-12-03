const openPopupBtn = document.getElementById("button-PpaY2q26b1E");
const closePopupBtn = document.getElementById("closeLPmodal");
const popupModal = document.getElementById("modal");

openPopupBtn.addEventListener("click", () => {
    popupModal.classList.add("open");
});

closePopupBtn.addEventListener("click", () => {
    popupModal.classList.remove("open");
});

