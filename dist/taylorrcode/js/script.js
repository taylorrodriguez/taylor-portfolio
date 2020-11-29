const homeButton = document.querySelector("#home button");
const arrow = document.querySelector("img[src*='arrow']");
const desk = document.querySelector(".desk");
const nav = document.querySelector(".nav");
const navListItems = document.querySelectorAll(".nav ul li");
const navIcon = document.querySelector(".nav-icon");

const sticky = desk.offsetTop; // for sticky nav
const stickyNav = nav.offsetHeight;

//Main button link and animates the arrow

homeButton.addEventListener("click", () => {
  location.href = "#projects";
});
homeButton.addEventListener("mouseover", () => {
  arrow.style.transform = "rotate(90deg)";
});
homeButton.addEventListener("mouseout", () => {
  arrow.style.transform = "rotate(0deg)";
});

// Creates the sticky navigation when scrolling

window.onscroll = function () {
  stickyNavScroll();
};

function stickyNavScroll() {
  if (window.pageYOffset >= sticky && window.pageYOffset >= stickyNav) {
    desk.classList.add("sticky");
    nav.classList.add("sticky-nav");
  } else {
    desk.classList.remove("sticky");
    nav.classList.remove("sticky-nav");
  }
}

//Makes the nav disappear when a list item is clicked

for (let i = 0; i < navListItems.length; i++) {
  navListItems[i].addEventListener("click", () => {
    nav.classList.remove("visible");
    for (let i = 0; i < navIcon.children.length; i++) {
      navIcon.children[i].classList.remove("new-bar");
      navIcon.children[i].classList.add("bar");
      navIcon.children[i].classList.add("old-nav");
    }
    navIcon.children[2].classList.remove("new-nav3");
  });
}

//Animates the navigation "hamburger" icon

navIcon.addEventListener("click", () => {
  nav.classList.toggle("visible");

  if (nav.classList.contains("visible")) {
    for (let i = 0; i < navIcon.children.length; i++) {
      navIcon.children[i].classList.remove("bar");
      navIcon.children[i].classList.add("new-bar");
      navIcon.children[i].classList.remove("old-nav");
    }

    navIcon.children[0].classList.add("new-nav1");
    navIcon.children[1].classList.add("new-nav2");
    navIcon.children[2].classList.add("new-nav3");
  } else {
    for (let i = 0; i < navIcon.children.length; i++) {
      navIcon.children[i].classList.remove("new-bar");
      navIcon.children[i].classList.add("bar");
      navIcon.children[i].classList.add("old-nav");
    }

    navIcon.children[0].classList.remove("new-nav1");
    navIcon.children[1].classList.remove("new-nav2");
    navIcon.children[2].classList.remove("new-nav3");
  }
});

//Animates the about me pixelated icon

const icon = document.querySelector("img[src*='icon']");

let iconArray = ["./img/about-icon.gif", "./img/about-icon2.gif"];

let j = 0;
setInterval(function switchIcon() {
  icon.setAttribute("src", iconArray[j]);
  j++;
  if (j == iconArray.length) {
    j = 0;
  }
}, 1500);

//social links in footer hover

const socialLinks = document.querySelectorAll(".link-holder svg");
console.log(socialLinks);

for (let i = 0; i < socialLinks.length; i++) {
  socialLinks[i].addEventListener("mouseover", () => {
    socialLinks[i].setAttribute("fill", "lightseagreen");
  });
  socialLinks[i].addEventListener("mouseout", () => {
    socialLinks[i].setAttribute("fill", "white");
  });
}

//project hover animations

const projectOverlay = document.querySelectorAll(".project-overlay");

for (let i = 0; i < projectOverlay.length; i++) {
  projectOverlay[i].addEventListener("mouseover", () => {
    projectOverlay[i].children[1].style.bottom = "-45%"; //-150px
    projectOverlay[i].children[0].style.top = "40px";
  });
  projectOverlay[i].addEventListener("mouseout", () => {
    projectOverlay[i].children[1].style.bottom = "-90%";
    projectOverlay[i].children[0].style.top = "-70px";
  });
}