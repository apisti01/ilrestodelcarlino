let lastScrollTop = 0; // Track the last scroll position

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // If scrolling up and currentScroll is greater than 0 to avoid showing the nav at the very top
    if (currentScroll < lastScrollTop && currentScroll > 0) {
        document.getElementById("appeared-nav").classList.add("sticky-nav");
    } else {
        document.getElementById("appeared-nav").classList.remove("sticky-nav");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);