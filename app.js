const items = document.querySelectorAll(".item");

window.addEventListener("scroll", () => {
    const triggerButton = (window.innerHeight / 5) * 4;

    items.forEach((item) => {
        const a = item.getBoundingClientRect().top;

        if (a < triggerButton) {
            item.classList.add("show");
        } else {
            item.classList.remove("show");
        }
    });
});
