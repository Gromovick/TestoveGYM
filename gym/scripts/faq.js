document.querySelectorAll(".faq__item").forEach(item => {
    item.addEventListener("click", (e) => {

        document.querySelectorAll(".faq__item").forEach((i) => {
            if (i !== item) {
                i.classList.remove("faq__item--active");
            }
        });

        item.classList.toggle("faq__item--active");
    })
})