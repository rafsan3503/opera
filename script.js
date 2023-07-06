const handlePreloader = () => {
  const preloader = document.getElementById("loading");
  const progress = document.getElementById("progress");
  let count = 0;
  setTimeout(() => {
    preloader.style.display = "none";
  }, 4000);
};

const themeBtn = document.getElementById("theme-btn");
let theme = "light";
const heroBg = document.getElementById("hero-bg");
const navLogo = document.getElementById("nav-logo");
const twiterLink = document.getElementById("twiter-link");
// const serviceLogo = document.getElementById("service-logo");
const protocolLogo = document.getElementById("protocol-logo");
const imgWhySection = document.getElementById("img-whySection");
const topBannerText = document.getElementById("top-banner-text");
const starIcons = document.querySelectorAll(".star-icon");
const launchingBorder = document.getElementById("launching-border");
const whySection = document.getElementById("why-section");
const protocolSection = document.getElementById("protocol");

themeBtn.addEventListener("click", themeToggle);
function themeToggle() {
  if (theme === "light") {
    themeBtn.innerHTML = `<img src="images/light-mode.png" alt="" />`;
    document.body.style.background = "#0d0d0d url('images/dark-bg.png')";
    heroBg.style.background = "url('images/bg.png') no-repeat center center/cover";
    protocolSection.style.background = "url('images/bg-why.png') no-repeat center center/cover";
    whySection.style.background = "url('images/bg-why.png') no-repeat center center/cover";
    document.querySelectorAll("h1").forEach((heading) => {
      heading.style.color = "white";
    });

    document.querySelectorAll("h2").forEach((heading) => {
      heading.style.color = "white";
    });

    document.querySelectorAll("p").forEach((p) => {
      p.style.color = "white";
    });

    document.querySelectorAll("span").forEach((span) => {
      span.style.color = "white";
    });

    document.querySelectorAll(".btn-theme").forEach((button) => {
      button.classList.remove("bg-black", "text-white");
      button.classList.add("bg-white", "text-black");
    });

    navLogo.setAttribute("src", "./images/logo.png");
    // serviceLogo.setAttribute("src", "./images/logo.png");
    protocolLogo.setAttribute("src", "./images/protocol-logo.png");
    imgWhySection.setAttribute("src", "./images/parttern.gif");
    // topBannerText.setAttribute("src", "./images/LIQUID-2.png");
    imgWhySection.classList.add("w-[400px]", "ml-[74px]");
    twiterLink.innerHTML = "<img src='./images/twitter.png'/>";

    starIcons.forEach((star) => {
      star.setAttribute("src", "./images/Star.png");
    });

    launchingBorder.classList.add("border-white")

    whySection.classList.add("border-white")

    theme = "dark";
  } else {
    themeBtn.innerHTML = `<img src="images/dark-mode.png" alt="" />`;
    document.body.style.background = "";
    whySection.style.background = "";
    protocolSection.style.background = "";


    heroBg.style.background =
      "url(./images/bg.svg) no-repeat center center/cover";

    document.querySelectorAll("h1").forEach((heading) => {
      heading.style.color = "black";
    });

    document.querySelectorAll("h2").forEach((heading) => {
      heading.style.color = "black";
    });

    document.querySelectorAll("p").forEach((p) => {
      p.style.color = "black";
    });

    document.querySelectorAll("span").forEach((span) => {
      span.style.color = "black";
    });

    document.querySelectorAll(".btn-theme").forEach((button) => {
      button.classList.remove("bg-white", "text-black");
      button.classList.add("bg-black", "text-white");
    });

    navLogo.setAttribute("src", "./images/logo.svg");
    // serviceLogo.setAttribute("src", "./images/logo.svg");
    protocolLogo.setAttribute("src", "./images/O_btp.png");
    imgWhySection.setAttribute("src", "./images/parttern.svg");
    // topBannerText.setAttribute("src", "./images/LIQUID (2).svg");
    imgWhySection.classList.add("w-full", "ml-0");
    twiterLink.innerHTML = "<img src='./images/twiter.svg'/>";

    starIcons.forEach((star) => {
      star.setAttribute("src", "./images/Star-dark.png");
    });

    launchingBorder.classList.remove("border-white")
    launchingBorder.classList.add("border-black")

    whySection.classList.remove("border-white")
    whySection.classList.add("border-black")

    theme = "light";
  }
}

themeToggle();
