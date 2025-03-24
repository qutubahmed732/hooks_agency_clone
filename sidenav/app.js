document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".dropdown-heading_services");
    const dropdownItems = document.querySelectorAll(".dropdown_content_services");

    heading.addEventListener("click", function () {
        dropdownItems.forEach(item => {
            if (item.style.display === "block") {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        });

        const nav_items = document.querySelector(".nav_links");
        nav_items.style.overflowY = nav_items.style.overflowY == "scroll" ? "auto" : "scroll";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".dropdown-heading_about");
    const dropdownItems = document.querySelectorAll(".dropdown_content_about");

    heading.addEventListener("click", function () {
        dropdownItems.forEach(item => {
            if (item.style.display === "block") {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }

            const nav_items = document.querySelector(".nav_links");
            nav_items.style.overflowY = nav_items.style.overflowY == "scroll" ? "auto" : "scroll";
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const heading = document.querySelector(".dropdown-heading_resources");
    const dropdownItems = document.querySelectorAll(".dropdown_content_resources");

    heading.addEventListener("click", function () {
        dropdownItems.forEach(item => {
            if (item.style.display === "block") {
                item.style.display = "none";
            } else {
                item.style.display = "block";
            }
        });

        const nav_items = document.querySelector(".nav_links");
        nav_items.style.overflowY = nav_items.style.overflowY == "scroll" ? "auto" : "scroll";

        const aside = document.querySelector("aside");
        aside.style.overflow = aside.style.overflow == "scroll" ? "auto" : "scroll";
    });
});


document.querySelector(".menu").addEventListener("click", () => {
    let aside = document.querySelector("aside");
    aside.style.right = aside.style.right == "0%" ? "-120%" : "0%";
})
document.querySelector(".fa-xmark").addEventListener("click", () => {
    let aside = document.querySelector("aside");
    aside.style.right = "-120%";
})