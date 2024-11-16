document.addEventListener("DOMContentLoaded", function () {
    const line = document.querySelector('.line');
    const sections = document.querySelectorAll('.sec');

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to animate elements into viewport
    function animateElements() {
        sections.forEach((section) => {
            if (isInViewport(section)) {
                section.classList.add('show-me');
            }
        });
    }

    // Function to set line height based on viewport
    function setLineHeight() {
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        line.style.height = `${windowHeight}px`;
    }

    // Initial call to set line height
    setLineHeight();

    // Event listener for scrolling
    window.addEventListener('scroll', function () {
        animateElements();
    });

    // Event listener for window resize
    window.addEventListener('resize', function () {
        setLineHeight();
    });

    // Initial call to animate elements in viewport
    animateElements();
});
