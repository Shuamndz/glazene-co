const openPopupBtn = document.getElementById("button-nRC7rKrl1B");
const closePopupBtn = document.getElementById("closeLPmodal");
const popupModal = document.getElementById("modal");

openPopupBtn.addEventListener("click", () => {
    popupModal.classList.add("open");
});

closePopupBtn.addEventListener("click", () => {
    popupModal.classList.remove("open");
});

