AOS.init({
  duration: 1200,
  once: true,
});

// SCROLL PROGRESS

const progressBar = document.querySelector(".progress-bar-scroll");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrollPercent = (scrollTop / height) * 100;

  progressBar.style.width = scrollPercent + "%";
});

// TYPING EFFECT

const words = ["UI/UX Designer", "Frontend Developer", "Creative Designer"];

let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typing() {
  currentWord = words[i];

  if (isDeleting) {
    j--;
  } else {
    j++;
  }

  document.querySelector(".typing").textContent = currentWord.substring(0, j);

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;

    setTimeout(typing, 1500);

    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;

    i++;

    if (i === words.length) {
      i = 0;
    }
  }

  setTimeout(typing, isDeleting ? 60 : 120);
}

typing();

