// this all code is for navigation

const about_button = document.querySelector(".about");
const about_section = document.querySelector(".about-section");

about_button.addEventListener("click", () => {
    about_section.style.display = about_section.style.display == "flex" ? "none" : "flex";
})

const service_button = document.querySelector(".services");
const services_section = document.querySelector(".services_section");

service_button.addEventListener("click", () => {
    services_section.style.display = services_section.style.display == "flex" ? "none" : "flex";
})

const resources_button = document.querySelector(".resources");
const resources_section = document.querySelector(".resources_section");

resources_button.addEventListener("click", () => {
    resources_section.style.display = resources_section.style.display == "flex" ? "none" : "flex";
})

const right_chevron = document.querySelector(".fa-chevron-right");

right_chevron.addEventListener("click", () => {
    const image = document.querySelector(".image");

    let bgImage = window.getComputedStyle(image).backgroundImage;

    if (bgImage.includes("image.jfif")) {
        image.style.backgroundImage = "url('assets/web-design.webp')";
    } else {
        image.style.backgroundImage = "url('assets/logos/image.jfif')";
    }
});

// this code is for accordion

document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', (e) => {
        document.querySelectorAll('.accordion-content').forEach(content => {
            if (content !== header.nextElementSibling) {
                content.classList.remove('active');
            }
            e.target.style.color = e.target.style.color == "black" ? "#bbb" : "black";
        });
        header.nextElementSibling.classList.toggle('active');
    });
});

// this code is for navbar of mobile

const menu_button_mobile = document.querySelector(".menu_button_mobile");

menu_button_mobile.addEventListener("click",()=>{
    alert("hello world")
})