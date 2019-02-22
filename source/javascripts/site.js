// This is where it all goes :)

// Color theme pick animation
var themeButtonSelect = document.querySelector(".theme-picker");
var themeSheet = document.querySelector(".theme-picker-sheet");
var buttonActive = document.querySelector(".js-button-expand");

themeButtonSelect.addEventListener("click", function() {
  if (themeSheet.className === "theme-picker-sheet") {
    themeSheet.className += " expand";
    buttonActive.className += " toggle-active";
  } else {
    themeSheet.className = "theme-picker-sheet";
    buttonActive.className = "small-sq js-button-expand";
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

// Icon menu toggle on smaller screens
var iconButton = document.querySelector(".js-icon-button");
var iconMenu = document.querySelector(".left-container1");
iconButton.addEventListener("click", function() {
  if (iconMenu.className === "left-container1 line-item-alt") {
    iconMenu.className += " expanded";
  } else {
    iconMenu.className = "left-container1 line-item-alt";
  }
});

iconMenu.addEventListener("click", function() {
  if (iconMenu.className === "left-container1 line-item-alt expanded") {
    iconMenu.classList.remove("expanded");
  }
});

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

// Configure easing buttons
var button1 = document.getElementById("button-linear");
var button2 = document.getElementById("button-ease");
var button3 = document.getElementById("button-ease-in");
var button4 = document.getElementById("button-ease-out");
var button5 = document.getElementById("button-ease-in-out");

// Set transition-timing-function on click event
button1.addEventListener("click", function() {
  icon.style.transitionTimingFunction = "linear";
  icon.style.animationTimingFunction = "linear";
});
button2.addEventListener("click", function() {
  icon.style.transitionTimingFunction = "ease";
  icon.style.animationTimingFunction = "ease";
});
button3.addEventListener("click", function() {
  icon.style.transitionTimingFunction = "ease-in";
  icon.style.animationTimingFunction = "ease-in";
});
button4.addEventListener("click", function() {
  icon.style.transitionTimingFunction = "ease-out";
  icon.style.animationTimingFunction = "ease-out";
});
button5.addEventListener("click", function() {
  icon.style.transitionTimingFunction = "ease-in-out";
  icon.style.animationTimingFunction = "ease-in-out";
});

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
var icon = document.querySelector(".js-icon");

var sliderWidth = slider1.value,
  sliderWeight = slider2.value;
var sliderDuration = slider3.value;
// buttonEasing = button1.value;
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
    loopButton.className += " toggle-active";
  } else {
    iconLoop.className = "top-section__icon js-icon";
    loopButton.className = "small-sq js-loop-button";
  }
});

// Get code module

// Configure/getcode button toggle
var toggleBtns = document.getElementsByClassName("js-view-btn");

for (var i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("view-active");
    current[0].className = current[0].className.replace(" view-active", "");
    this.className += " view-active";
    displayFlex = document.querySelector(".setting-container-display-flex");
    displayNone = document.querySelector(".setting-container-display-none");
    displayFlex.className = displayFlex.className.replace(
      " setting-container-display-flex",
      " setting-container-display-none"
    );
    displayNone.className = displayNone.className.replace(
      " setting-container-display-none",
      " setting-container-display-flex"
    );
  });
}

// configure menu function mobile devices
var configBtn = document.querySelector(".configure-button");

configBtn.addEventListener("click", function() {
  var configMenu = document.querySelector(".config-menu");
  if (configMenu.className === "flex-col config-menu") {
    configMenu.className += " config-active";
  } else {
    configMenu.className = "flex-col config-menu";
  }
});

// easing buttons toggle mobile devices
var settingsToggle = document.getElementsByClassName("js-easing-button");

for (var i = 0; i < settingsToggle.length; i++) {
  settingsToggle[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("setting-active");
    current[0].className = current[0].className.replace(" setting-active", "");
    this.className += " setting-active";
  });
}

// Properties/easing view toggle mobile devices
var propertiesView = document.querySelector(".js-properties-wrapper");
var easingView = document.querySelector(".easing");
var toggleContainer = document.querySelector(".right-container2");
var easingButton = document.querySelector(
  ".config-menu__button-wrapper__easing"
);

var codeBtn = document.querySelector("#js-code-button");
var codeOutputText = document.querySelector("#code-output");

codeBtn.onclick = () => {
  var easingSetting = document.querySelector(".setting-active").childNodes[0]
    .innerHTML;
  newCodeOutputText = `.hamburger_1-state1 { <br>
      font-variation-settings: “TIME” 0, “wdth” ${sliderWidth}, “wght” ${sliderWeight};<br>
      transition-property: font-variation-settings;<br>
      transition-duration: ${sliderDuration}ms;<br>
      transition-timing-function: ${easingSetting};<br>
    }<br><br>
      .hamburger_1-state2 { <br>
        font-variation-settings: "TIME" 100, “wdth” ${sliderWidth}, “wght” ${sliderWeight};<br>
      }`;
  codeOutputText.innerHTML = newCodeOutputText;

  var expandMobileBackground = document.querySelector(".configure-bg");
  var moveButton = document.querySelector(".configure-button");
  if (expandMobileBackground.className === "configure-bg") {
    expandMobileBackground.className += " expand-background";
  } else {
    expandMobileBackground.className = "configure-bg";
  }

  if (moveButton.className === "configure-button") {
    moveButton.className += " move-button";
  } else {
    moveButton.className = "configure-button";
  }
};

var configureBtn = document.querySelector("#js-configure-button");

configureBtn.onclick = () => {
  var expandMobileBackground = document.querySelector(".configure-bg");
  var moveButton = document.querySelector(".configure-button");
  if (expandMobileBackground.className === "configure-bg expand-background") {
    expandMobileBackground.classList.remove("expand-background");
  } else {
    expandMobileBackground.className = "configure-bg expand-background";
  }

  if (moveButton.className === "configure-button move-button") {
    moveButton.classList.remove("move-button");
  } else {
    moveButton.className = "configure-button";
  }
};

var iconItems = document.querySelectorAll(".icon-item");
var activeIcon = document.querySelector(".js-icon");
var iconTitle = document.querySelector("#icon-title");

for (var i = 0; i < iconItems.length; i++) {
  iconItems[i].addEventListener("click", function() {
    activeIcon.innerHTML = this.innerHTML;
    iconTitle.innerHTML = this.getAttribute("data-title");
    iconButton.innerHTML = this.innerHTML;
    iconMenu.classList.remove("expanded");
  });
}
