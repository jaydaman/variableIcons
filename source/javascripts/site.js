// This is where it all goes :)

// Color theme pick animation

function themePicker() {
  var themePickExpand = document.getElementById("themePicker");
  if (themePickExpand.className === "theme-picker-sheet") {
    themePickExpand.className += " expand";
  } else {
    themePickExpand.className = "theme-picker-sheet";
  }
}

// Color theme background change

const themeButtons = document.querySelectorAll(".js-theme-button");
const iconName = document.getElementById("iconName");
const themeContainer = document.querySelector(".js-theme");

// console.log(themeButtons);

Array.prototype.slice.call(themeButtons).forEach(el => {
  el.addEventListener("click", function() {
    const theme = this.getAttribute("data-theme");
    themeContainer.className = "js-theme theme-" + theme;
  });
});

// Loop button state toggle

var loopButton = document.getElementById("loopButton");
var iconAnimation = document.querySelector(".js-animation");

console.log(loopButton, iconAnimation);

// function buttonToggle() {
//   loopButton.classList.toggle("btnActive");
//   loopButton.addEventListener("click", function() {});
// }

// Selected icon states button toggle

var btnContainer = document.getElementById("btnContainer");
var btns = document.getElementsByClassName("btnClick");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Hamburger menu function

function menuExpand() {
  var hamburger = document.getElementById("menuExpand");
  if (hamburger.className === "menu") {
    hamburger.className += " expanded";
  } else {
    hamburger.className = "menu";
  }
}

// Icon animation

function iconAnimate() {
  var iconState = document.getElementById("iconAnimate");
  if (iconState.className === "top-section__icon") {
    iconState.className += " animate";
  } else {
    iconState.className = "top-section__icon";
  }
}
// Configure sliders

var slider1 = document.getElementById("slider-TIME");
var output1 = document.getElementById("output-TIME");
var slider2 = document.getElementById("slider-wght");
var output2 = document.getElementById("output-wght");
var slider3 = document.getElementById("slider-wdth");
var output3 = document.getElementById("output-wdth");
var slider4 = document.getElementById("slider-fontsize");
var output4 = document.getElementById("output-fontsize");
var icon = document.querySelector(".js-icon");
// var sliderTime = slider1.value,
// sliderWidth = slider2.value,
// sliderWeight = slider3.value,
// sliderFontsize = slider4.value;
// output1.innerHTML = slider1.value;

var settingsString = function(t, wd, wg) {
  return '"TIME" ' + t + ', "wdth" ' + wd + ', "wght" ' + wg + "";
};

var fontSize = function(fs) {
  return '"font-size"' + fs + "";
};

// fontbox.style.fontSize = fontSize(sliderFontsize);
//
// icon.style.fontVariationSettings = settingsString(
//   sliderTime,
//   sliderWeight,
//   sliderWidth
// );

//Slider value for "TIME"

// slider1.oninput = function() {
//   sliderTime = this.value;
//   icon.style.fontVariationSettings = settingsString(
//     sliderTime,
//     sliderWeight,
//     sliderWidth
//   );
//   output1.innerHTML = this.value;
// };
//
// //Slider value for "wght"
//
// output2.innerHTML = slider2.value;
// slider2.oninput = function() {
//   sliderWidth = this.value;
//   icon.style.fontVariationSettings = settingsString(
//     sliderTime,
//     sliderWeight,
//     sliderWidth
//   );
//   output2.innerHTML = this.value;
// };
//
// //Slider value for "wdth"
//
// output3.innerHTML = slider3.value;
//
// slider3.oninput = function() {
//   sliderWeight = this.value;
//   icon.style.fontVariationSettings = settingsString(
//     sliderTime,
//     sliderWeight,
//     sliderWidth
//   );
//   output3.innerHTML = this.value;
// };
//
// //Slider value for font-size
//
// slider4.oninput = function() {
//   sliderFontsize = this.value;
//   fontbox.style.fontSize = fontSize(sliderFontsize);
//   output4.innerHTML = this.value;
// };

//    font-variation-settings: "TIME" 0, "wdth" 100, "wght" 30;
