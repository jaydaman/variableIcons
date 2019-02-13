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

// Icon animation (old version)
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

// Get state buttons
var stateButton1 = document.getElementById("buttonState1");
var stateButton2 = document.getElementById("buttonState2");

// Configure sliders
var slider1 = document.getElementById("slider-wdth");
var output1 = document.getElementById("output-wdth");
var slider2 = document.getElementById("slider-wght");
var output2 = document.getElementById("output-wght");
var slider3 = document.getElementById("slider-dura");
var output3 = document.getElementById("output-dura");
var button1 = document.getElementById("button-easing");
var icon = document.querySelector(".js-icon");

var sliderWidth = slider1.value,
  sliderWeight = slider2.value;
var sliderDuration = slider3.value;
var delay = 250;

// Set the right animation state depending on which active state button
var settingsString = function(wd, wg) {
  if (
    stateButton1.className === "btn btn-normal line-item js-state-btn active"
  ) {
    // Insert font-variation-settings to element style
    return '"TIME" 0, "wdth" ' + wd + ', "wght" ' + wg + "";
  } else if (
    stateButton2.className === "btn btn-normal line-item js-state-btn active"
  ) {
    return '"TIME" 100, "wdth" ' + wd + ', "wght" ' + wg + "";
  }
};

// Get transition duration value
var durationString = function(dura) {
  return dura + "ms";
};

// Get value to delay loop animation duration to match state animation length
var delayString = function(dura) {
  return Number(dura) + Number(delay) + "ms";
};

// Document load icon style settings
icon.style.fontVariationSettings = `"TIME" 0, "wdth" ${sliderWidth}, "wght" ${sliderWeight}`;

// Function state 1 button click
stateButton1.addEventListener("click", function() {
  icon.style.fontVariationSettings =
    '"TIME" ' + 0 + ', "wdth" ' + sliderWidth + ', "wght" ' + sliderWeight;
});

// Function state 2 button click
stateButton2.addEventListener("click", function() {
  icon.style.fontVariationSettings =
    '"TIME" ' + 100 + ', "wdth" ' + sliderWidth + ', "wght" ' + sliderWeight;
});

// Slider functionality
// Width slider
slider1.oninput = function() {
  sliderWidth = this.value;
  // Style icon with current slider settings
  icon.style.fontVariationSettings = settingsString(sliderWidth, sliderWeight);
  // Output value to input box
  output1.value = this.value;
};
// Width input
output1.oninput = function() {
  sliderWidth = this.value;
  // Style icon with current input settings
  icon.style.fontVariationSettings = settingsString(sliderWidth, sliderWeight);
  // Output value to slider
  slider1.value = this.value;
};

// Weight slider
slider2.oninput = function() {
  sliderWeight = this.value;
  icon.style.fontVariationSettings = settingsString(sliderWidth, sliderWeight);
  output2.value = this.value;
};
// Weight input
output2.oninput = function() {
  sliderWeight = this.value;
  icon.style.fontVariationSettings = settingsString(sliderWidth, sliderWeight);
  slider2.value = this.value;
};

// Duration slider
slider3.oninput = function() {
  sliderDuration = this.value;
  // Set duration length for transition
  icon.style.transitionDuration = durationString(sliderDuration);
  output3.value = this.value;
  // Set duration length for animation
  icon.style.animationDuration = delayString(sliderDuration);
};
// Duration input
output3.oninput = function() {
  sliderDuration = this.value;
  icon.style.transitionDuration = durationString(sliderDuration);
  slider3.value = this.value;
  icon.style.animationDuration = delayString(sliderDuration);
};

// Loop button state toggle
var loopButton = document.querySelector(".js-loop-button");
var iconLoop = document.querySelector(".js-icon");

// search the CSSOM for a specific -webkit-keyframe rule
function findKeyframesRule(rule) {
  // gather first stylesheet
  var ss = document.styleSheets[0];
  // loop through all the rules
  let rules = [];
  for (var j = 0; j < ss.cssRules.length; ++j) {
    // find the -webkit-keyframe rule whose name matches our passed over parameter and return that rule
    if (
      (ss.cssRules[j].type == window.CSSRule.WEBKIT_KEYFRAMES_RULE ||
        ss.cssRules[j].type == window.CSSRule.KEYFRAMES_RULE) &&
      ss.cssRules[j].name == rule
    )
      rules.push(ss.cssRules[j]);
  }
  return rules;

  // rule not found
  return null;
}

function updateLoopKeyframe() {
  let keyFrames = findKeyframesRule("loop");
  for (var i = 0; i < keyFrames.length; i++) {
    keyFrames[i].deleteRule("20%");
    keyFrames[i].deleteRule("50%");
    keyFrames[i].deleteRule("100%");
    keyFrames[i].appendRule(
      `20% {font-variation-settings: "TIME" 0, "wdth" ${sliderWidth}, "wght" ${sliderWeight}}`
    );
    keyFrames[i].appendRule(
      `50% {font-variation-settings: "TIME" 50, "wdth" ${sliderWidth}, "wght" ${sliderWeight}}`
    );
    keyFrames[i].appendRule(
      `80%,100% {font-variation-settings: "TIME" 100, "wdth" ${sliderWidth}, "wght" ${sliderWeight}}`
    );
  }
}

slider1.addEventListener("change", function() {
  updateLoopKeyframe();
});

slider2.addEventListener("change", function() {
  updateLoopKeyframe();
});

loopButton.addEventListener("click", function() {
  if (iconLoop.className === "top-section__icon js-icon") {
    updateLoopKeyframe();
    iconLoop.className += " loop";
  } else {
    iconLoop.className = "top-section__icon js-icon";
  }
});

// Get code module

// Configure/getcode button toggle
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

// Properties/easing view toggle mobile devices
var propertiesView = document.querySelector(".properties-wrapper");
var easingView = document.querySelector(".easing");
var toggleContainer = document.querySelector(".right-container2");
var easingButton = document.querySelector(
  ".config-menu__button-wrapper__easing"
);
