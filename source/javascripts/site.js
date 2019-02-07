// This is where it all goes :)

// Color theme pick animation
var themeButtonSelect = document.querySelector(".theme-picker");
var themeSheet = document.querySelector(".theme-picker-sheet");

themeButtonSelect.addEventListener("click", function() {
  if (themeSheet.className === "theme-picker-sheet") {
    themeSheet.className += " expand";
  } else {
    themeSheet.className = "theme-picker-sheet";
  }
});

// Color theme background change
const themeButtons = document.querySelectorAll(".js-theme-button");
const themeContainer = document.querySelector(".js-theme");

Array.prototype.slice.call(themeButtons).forEach(el => {
  el.addEventListener("click", function() {
    const theme = this.getAttribute("data-theme");
    themeContainer.className = "js-theme theme-" + theme;
  });
});

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
// function iconAnimate() {
//   var iconState = document.getElementById("iconAnimate");
//   if (iconState.className === "top-section__icon js-icon") {
//     iconState.className += " animate";
//   } else {
//     iconState.className = "top-section__icon js-icon";
//   }
// }

// Range and input listener
const range = document.querySelectorAll(".slider");
const field = document.querySelectorAll(".input-box");

// range.addEventListener("click", () => {
//   field.innerHTML = range.value;
// });

// Icon playback functions

// Selected icon states button toggle
var stateBtns = document.getElementsByClassName("js-state-btn");

for (var i = 0; i < stateBtns.length; i++) {
  stateBtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function buttonToggle1() {
  var buttonSelect = document.querySelector(".small-sq");
  if (buttonSelect.className === "small-sq js-loop-button") {
    buttonSelect.className += " toggle-active";
  } else {
    buttonSelect.className = "small-sq js-loop-button";
  }
}

function buttonToggle2() {
  var buttonSelect2 = document.querySelector(".js-button-expand");
  if (buttonSelect2.className === "small-sq js-button-expand") {
    buttonSelect2.className += " toggle-active";
  } else {
    buttonSelect2.className = "small-sq js-button-expand";
  }
}

// Configure sliders
var slider1 = document.getElementById("slider-wdth");
var output1 = document.getElementById("output-wdth");
var slider2 = document.getElementById("slider-wght");
var output2 = document.getElementById("output-wght");
var slider3 = document.getElementById("slider-dura");
var output3 = document.getElementById("output-dura");
var icon = document.querySelector(".js-icon");
var sliderWidth = slider1.value,
  sliderWeight = slider2.value;

var settingsString = function(wd, wg) {
  return '"wdth" ' + wd + ', "wght" ' + wg + "";
};

slider1.oninput = function() {
  sliderWidth = this.value;
  icon.style.fontVariationSettings = settingsString(sliderWidth, sliderWeight);
  output1.innerHTML = this.value;
};

slider2.oninput = function() {
  sliderWeight = this.value;
  icon.style.fontVariationSettings = settingsString(sliderWidth, sliderWeight);
  output2.innerHTML = this.value;
};

var stateButton1 = document.getElementById("buttonState1");
var stateButton2 = document.getElementById("buttonState2");

icon.style.fontVariationSettings =
  '"TIME" ' + 0 + ', "wdth" ' + sliderWidth + ', "wght" ' + sliderWeight + "";

stateButton2.addEventListener("click", function() {
  icon.style.fontVariationSettings =
    '"TIME" ' +
    100 +
    ', "wdth" ' +
    sliderWidth +
    ', "wght" ' +
    sliderWeight +
    "";
});

stateButton1.addEventListener("click", function() {
  icon.style.fontVariationSettings =
    '"TIME" ' + 0 + ', "wdth" ' + sliderWidth + ', "wght" ' + sliderWeight + "";
});

// Loop button state toggle
var loopButton = document.querySelector(".js-loop-button");
var iconLoop = document.querySelector(".js-icon");

loopButton.addEventListener("click", function jsLoop() {
  if (iconLoop.className === "top-section__icon js-icon") {
    iconLoop.className += " loop";
    icon.style.fontVariationSettings =
      '"wdth" ' + sliderWidth + ', "wght" ' + sliderWeight + "";
  } else {
    iconLoop.className = "top-section__icon js-icon";
  }
});

// Get code module

// Configure/getcode toggle
var btnToggle = document.getElementsByClassName("js-view-btn");

for (var i = 0; i < btnToggle.length; i++) {
  btnToggle[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("view-active");
    current[0].className = current[0].className.replace(" view-active", "");
    this.className += " view-active";
  });
}

// configure menu function mobile devices
function configMenuExpand() {
  var configMenu = document.querySelector(".config-menu");
  var configBtn = document.querySelector(".configure-button");
  if (configMenu.className === "flex-col config-menu") {
    configMenu.className += " config-active";
  } else {
    configMenu.className = "flex-col config-menu";
  }
}

// Properties/easing button toggle mobile devices
var settingsToggle = document.getElementsByClassName("js-settings-button");

for (var i = 0; i < settingsToggle.length; i++) {
  settingsToggle[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("sett-active");
    current[0].className = current[0].className.replace(" sett-active", "");
    this.className += " sett-active";
  });
}
