

//! AOS library
AOS.init();

//! =========================== Navbar ===========================
// Drowpdown(en & ar)
const langTrigger = document.querySelector('.lang-trigger');
const langMenu = document.querySelector('.lang-menu');

langTrigger.addEventListener('click', () => {
    langMenu.style.display = langMenu.style.display === 'block' ? 'none' : 'block';
});

langMenu.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        const selectedText = item.textContent.trim();
        langTrigger.querySelector('p').textContent = selectedText;
        langMenu.style.display = 'none';
    });
});

document.addEventListener('click', (e) => {
    if (!langTrigger.contains(e.target)) {
        langMenu.style.display = 'none';
    }
});

// Navbar
const menu = document.querySelector('.responsive-Menu');
const showMenu = document.querySelector('.show-menu');
const closeMenu = document.querySelector('.close');

showMenu.addEventListener('click', () => {
    menu.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('show');
});

// Active Link Navbar
const currentPage = window.location.pathname.split("/").pop(); 
const navLinks = document.querySelectorAll("nav ul.links li a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        document.querySelectorAll(".bottom-bar ul.links li").forEach(li => {
            li.classList.remove("active");
        });

        link.parentElement.classList.add("active");
    }
});

// Active Link
// const navItems = document.querySelectorAll("ul.links li");

// navItems.forEach(item => {
//     item.addEventListener("click", () => {
//         navItems.forEach(i => i.classList.remove("active"));
//         item.classList.add("active");
//     });
// });

//قفل المينيو لما اضغط براها
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !showMenu.contains(e.target)) {
        menu.classList.remove('show');
    }
});


// Dropdown-Menu
const dropdowns = document.querySelectorAll('li.dropdown > a');

dropdowns.forEach(link => {
    const menu = link.parentElement.querySelector('.dropdown-menu');

    link.addEventListener('click', (e) => {
        e.preventDefault();

        const isVisible = menu.style.display === 'flex';
        menu.style.display = isVisible ? 'none' : 'flex';
        menu.style.flexDirection = 'column';

        dropdowns.forEach(otherLink => {
            const otherMenu = otherLink.parentElement.querySelector('.dropdown-menu');
            if (otherMenu !== menu) {
                otherMenu.style.display = 'none';
            }
        });
    });
});

// تقفل لما نضغط برا
document.addEventListener('click', (e) => {
    dropdowns.forEach(link => {
        const menu = link.parentElement.querySelector('.dropdown-menu');
        if (!link.contains(e.target) && !menu.contains(e.target)) {
            menu.style.display = 'none';
        }
    });
});


//****************************** بتاعت الدروب داون بتاعت المعدات ف النافبار (Tabs) ****************************** 
// document.querySelectorAll('.tab-pane').forEach(tab => {
//     const firstBoxItems = tab.querySelectorAll('.first-box ul li');
//     const secondBoxItems = tab.querySelectorAll('.second-box ul li');

//     firstBoxItems.forEach(item => {
//         item.addEventListener('click', () => {

//             firstBoxItems.forEach(i => i.classList.remove('active'));
//             item.classList.add('active');

//             const target = item.dataset.target;

//             secondBoxItems.forEach(i => {
//                 if (target === 'all' || i.classList.contains(target)) {
//                     i.style.display = 'block';
//                 } else {
//                     i.style.display = 'none';
//                 }
//             });
//         });
//     });
// });


// Overlay Navbar-Responsive
const overlay = document.querySelector('.overlay');

showMenu.addEventListener('click', () => {
    menu.classList.add('show');
    overlay.classList.add('show'); // ✔️
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('show');
    overlay.classList.remove('show'); // ✔️
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !showMenu.contains(e.target)) {
        menu.classList.remove('show');
        overlay.classList.remove('show'); // ✔️
    }
});

// swiper
document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".my-new-slider", {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

// //! =========================== Section Filter ===========================
// //? ***************** فورم الإيجار *****************
// const rentSubCategories = {
//     "الرافعات": [
//         "أجزاء ومعدات رافعات",
//         "رافعات صالحة لكل أنواع الطرق",
//         "رافعات مجنزرة",
//         "رافعات الطرق الوعرة",
//         "المصاعد والرافعات المادية",
//         "رافعات برجية",
//         "رافعات صغيرة",
//         "رافعات ذاتية الإرتفاع",
//         "رافعات أخرى"
//     ],
//     "معدات الحفر": [
//         "حفارات كبيرة",
//         "حفارات صغيرة",
//         "معدات الحفر اليدوية",
//         "معدات الحفر الثقيلة"
//     ],
//     "معدات البناء والحفر": [
//         "خلاطات خرسانة",
//         "رافعات البناء",
//         "معدات تسوية الأرض",
//         "معدات الحفر الصغيرة"
//     ],
//     "معدات الطرق": [
//         "معدات الطرق",
//         "آلات تعبيد",
//         "معدات صيانة الطرق",
//         "رافعات طرقية"
//     ]
// };

// // نجيب الـ selects
// const rentMainSelect = document.querySelector('.select-group:nth-of-type(1) select');
// const rentSubSelect = document.querySelector('.select-group:nth-of-type(2) select');

// // تغيير التصنيف الرئيسي → تحديث الفرعي
// rentMainSelect.addEventListener('change', () => {
//     const selected = rentMainSelect.value;
//     rentSubSelect.innerHTML = "";

//     if (rentSubCategories[selected]) {
//         rentSubCategories[selected].forEach(item => {
//             const option = document.createElement('option');
//             option.value = item;
//             option.textContent = item;
//             rentSubSelect.appendChild(option);
//         });
//     }
//     rentMainSelect.dispatchEvent(new Event("change"));
// });

// //? ***************** فورم البيع *****************
// const sellSubCategories = {
//     "الرافعات": [
//         "أجزاء ومعدات رافعات",
//         "رافعات صالحة لكل أنواع الطرق",
//         "رافعات مجنزرة",
//         "رافعات الطرق الوعرة",
//         "المصاعد والرافعات المادية",
//         "رافعات برجية",
//         "رافعات صغيرة",
//         "رافعات ذاتية الإرتفاع",
//         "رافعات أخرى"
//     ],
//     "معدات الحفر": [
//         "حفارات صغيرة",
//         "حفارات جنزير",
//         "حفارات هيدروليك",
//         "حفارات دوارة"
//     ],
//     "معدات البناء والحفر": [
//         "معدات خرسانة",
//         "معدات صب",
//         "معدات تسوية",
//         "معدات دمك"
//     ],
//     "معدات الطرق": [
//         "مداحل",
//         "معدات تخطيط",
//         "معدات رصف"
//     ]
// };

// // نجيب الـ selects
// const sellMainSelect = document.querySelector("#sell-main");
// const sellSubSelect = document.querySelector("#sell-sub");

// // تغيير التصنيف الرئيسي → تحديث الفرعي
// sellMainSelect.addEventListener("change", () => {
//     const selected = sellMainSelect.value;
//     sellSubSelect.innerHTML = "";

//     if (sellSubCategories[selected]) {
//         sellSubCategories[selected].forEach(item => {
//             const option = document.createElement("option");
//             option.value = item;
//             option.textContent = item;
//             sellSubSelect.appendChild(option);
//         });
//     }
//     sellMainSelect.dispatchEvent(new Event("change"));
// });

//! =========================== Section Filter ===========================
document.addEventListener("DOMContentLoaded", function () {

    //? ***************** فورم الإيجار *****************
    const rentMainSelect = document.querySelector('.select-group:nth-of-type(1) select');
    const rentSubSelect = document.querySelector('.select-group:nth-of-type(2) select');

    if (rentMainSelect && rentSubSelect) {
        const rentSubCategories = {
            "الرافعات": [
                "أجزاء ومعدات رافعات",
                "رافعات صالحة لكل أنواع الطرق",
                "رافعات مجنزرة",
                "رافعات الطرق الوعرة",
                "المصاعد والرافعات المادية",
                "رافعات برجية",
                "رافعات صغيرة",
                "رافعات ذاتية الإرتفاع",
                "رافعات أخرى"
            ],
            "معدات الحفر": [
                "حفارات كبيرة",
                "حفارات صغيرة",
                "معدات الحفر اليدوية",
                "معدات الحفر الثقيلة"
            ],
            "معدات البناء والحفر": [
                "خلاطات خرسانة",
                "رافعات البناء",
                "معدات تسوية الأرض",
                "معدات الحفر الصغيرة"
            ],
            "معدات الطرق": [
                "معدات الطرق",
                "آلات تعبيد",
                "معدات صيانة الطرق",
                "رافعات طرقية"
            ]
        };

        // تغيير التصنيف الرئيسي → تحديث الفرعي
        rentMainSelect.addEventListener('change', () => {
            const selected = rentMainSelect.value;
            rentSubSelect.innerHTML = "";

            if (rentSubCategories[selected]) {
                rentSubCategories[selected].forEach(item => {
                    const option = document.createElement('option');
                    option.value = item;
                    option.textContent = item;
                    rentSubSelect.appendChild(option);
                });
            }
        });

        // تفعيل الاختيار لأول مرة
        rentMainSelect.dispatchEvent(new Event("change"));
    }

    //? ***************** فورم البيع *****************
    const sellMainSelect = document.querySelector("#sell-main");
    const sellSubSelect = document.querySelector("#sell-sub");

    if (sellMainSelect && sellSubSelect) {
        const sellSubCategories = {
            "الرافعات": [
                "أجزاء ومعدات رافعات",
                "رافعات صالحة لكل أنواع الطرق",
                "رافعات مجنزرة",
                "رافعات الطرق الوعرة",
                "المصاعد والرافعات المادية",
                "رافعات برجية",
                "رافعات صغيرة",
                "رافعات ذاتية الإرتفاع",
                "رافعات أخرى"
            ],
            "معدات الحفر": [
                "حفارات صغيرة",
                "حفارات جنزير",
                "حفارات هيدروليك",
                "حفارات دوارة"
            ],
            "معدات البناء والحفر": [
                "معدات خرسانة",
                "معدات صب",
                "معدات تسوية",
                "معدات دمك"
            ],
            "معدات الطرق": [
                "مداحل",
                "معدات تخطيط",
                "معدات رصف"
            ]
        };

        // تغيير التصنيف الرئيسي → تحديث الفرعي
        sellMainSelect.addEventListener("change", () => {
            const selected = sellMainSelect.value;
            sellSubSelect.innerHTML = "";

            if (sellSubCategories[selected]) {
                sellSubCategories[selected].forEach(item => {
                    const option = document.createElement("option");
                    option.value = item;
                    option.textContent = item;
                    sellSubSelect.appendChild(option);
                });
            }
        });

        // تفعيل الاختيار لأول مرة
        sellMainSelect.dispatchEvent(new Event("change"));
    }

});


//! =========================== Owl Carousel (Blog) ===========================
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        items: 2,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,
        dots: true,
        nav: false,
        rtl: true,
        margin: 30,

        responsive: {
            0: {
                items: 1
            },
            1100: {
                items: 2
            }
        }
    });
});

//! =========================== Owl (our-partners) ===========================
$(".ourPartners-carousel").owlCarousel({
    loop: true,
    nav: false,
    items: 6,
    dots: false,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 2500, 
    slideTransition: 'linear', 
    rtl: true,
    responsive: {
        0: {
            items: 2,
            margin: 30,
        },
        600: {
            items: 3,
            margin: 10,
        },
        1000: {
            items: 5.5,
            margin: 30,
        }
    }
});

// filter box equipment
function openFilterBox() {
    // if (window.innerWidth <= 1024) {
    if (window.innerWidth <= 1200) {
        const box = document.querySelector(".filter-box");
        box.style.display = box.style.display === "block" ? "none" : "block";
    }
}

function toggleFilter(el) {
    el.classList.toggle("active");
    let content = el.nextElementSibling;
    content.style.display = content.style.display === "flex" ? "none" : "flex";
}

// filter box equipment end


// !ايقاف ال AOS ف الموبايل 
// if (window.innerWidth < 768) {
//     AOS.init({
//         disable: true
//     });
//     }
//     else {
//     AOS.init();
// }
