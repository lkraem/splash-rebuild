const quoteArea = document.getElementById("displayed-quote") as HTMLElement;

const logos = document.getElementById("logos") as HTMLElement;
const logosChildren = logos.children;

const quotes = [
  `“From an exfoliating cleanser that refines skin’s texture to a brightening vitamin C serum, they’ve introduced science-packed ingredients into easy packaging for all your travel needs.”`,
  `“DPTMNT was curated for the jet-setter or someone with a minimalist skincare routine, creating a “no matter where or when” approach for your skin.”`,
  `“What makes DPTMNT so unique (and pretty damn genius) is how they’re packaged — and applied.”`,
  `“DPTMNT is perfect to use on-the-go, no matter where or when you need a skin loving boost.”`,
  `“If you'll be on the go this summer, you're just in luck. DPTMNT is a new beauty brand specializing in products that you can take your skin care with you without a hassle.”`,
];

const follow = document.getElementById("followlink") as HTMLElement;

const navContainerTop = document.getElementById(
  "nav-container-top"
) as HTMLElement;
const navContainer = document.getElementById("header-lg") as HTMLElement;
const textLogo = document.getElementById("textlogo-lg") as HTMLElement;

//// Logo Transition

const observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].intersectionRatio === 0) {
      navContainer.classList.add("header-lg-sticky");
      textLogo.classList.add("textlogo-lg-sticky");
    } else if (entries[0].intersectionRatio === 1) {
      navContainer.classList.remove("header-lg-sticky");
      textLogo.classList.remove("textlogo-lg-sticky");
      navContainer.classList.add("header-lg-default");
      textLogo.classList.add("textlogo-lg-default");
    }
  },
  { threshold: [0, 1] }
);

observer.observe(navContainerTop);

//// Quote Function

for (let i = 0; i < quotes.length; i++) {
  logosChildren[i].addEventListener("mouseenter", (event) => {
    quoteArea.innerText = `${quotes[i]}`;
  });
}

//// Rainbow Function

let colorful = false;
let delay = 600;
let fontColors = [
  "salmon",
  "LightGreen",
  "LightSteelBlue",
  "LightPink",
  "LemonChiffon",
];
let colorCounter = 0;

follow.addEventListener("mouseenter", (event) => {
  colorful = true;
  colorLoop();
});

follow.addEventListener("mouseleave", (event) => {
  colorful = false;
  follow.style.color = "black";
});

function colorLoop() {
  if (colorful) {
    updateFontColor();
    setTimeout(() => {
      window.requestAnimationFrame(colorLoop);
    }, delay);
  }
}

let updateFontColor = () => {
  follow.style.color = fontColors[colorCounter];
  colorCounter = (colorCounter + 1) % fontColors.length;
};
