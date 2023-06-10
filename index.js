// navbar
let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

// projects
var swiper = new Swiper(".project-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// Running animation
const text = "Avinash Pandey";

const typedText = document.getElementById("typed-text");
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = typedText.textContent;

  if (!isDeleting && charIndex <= text.length) {
    typedText.textContent = text.substring(0, charIndex);
    charIndex++;
  } else if (isDeleting && charIndex >= 0) {
    typedText.textContent = text.substring(0, charIndex);
    charIndex--;
  }

  if (charIndex === text.length + 1) {
    // Start deleting after a short pause
    isDeleting = true;
    setTimeout(type, 500);
  } else if (charIndex === -1) {
    // Switch to typing mode again
    isDeleting = false;
    charIndex = 0;
    setTimeout(type, 500);
  } else {
    // Continue typing or deleting
    const typingSpeed = isDeleting ? 100 : 200;
    setTimeout(type, typingSpeed);
  }
}

type();

