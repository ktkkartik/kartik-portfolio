
const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");


sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

sidebarClose.addEventListener("click" , () =>{
    nav.classList.remove("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});
function checkScreenSize() {
    const leftSection = document.getElementById("leftSection");
    const rightSection = document.getElementById("rightSection");
    const leftSection2 = document.getElementById("leftSection2");
    const rightSection2 = document.getElementById("rightSection2");
    if (window.innerWidth < 768) {
        leftSection.parentNode.insertBefore(rightSection, leftSection);
        leftSection2.parentNode.insertBefore(rightSection2, leftSection2);
    } else {
        leftSection.parentNode.insertBefore(leftSection, rightSection);
        leftSection2.parentNode.insertBefore(leftSection2, rightSection2);
    }
}


    const counters = document.querySelectorAll(".num");
    const speed = 200; // Lower is faster

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute("data-val");
                const count = +counter.innerText;

                const increment = Math.ceil(target / speed);

                if (count < target) {
                    counter.innerText = count + increment;
                    setTimeout(updateCount, 20);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };

    // Trigger animation when the counters are in view
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                observer.disconnect(); // Run once
            }
        });
    }, {
        threshold: 0.6 // Adjust when to trigger (60% in view)
    });

    observer.observe(document.querySelector(".wrapperx"));

