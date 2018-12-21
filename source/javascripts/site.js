// This is where it all goes :)

//Slider value for "TIME"

var slider1 = document.getElementById("slider-TIME");
var output1 = document.getElementById("output-TIME");
var slider2 = document.getElementById("slider-wght");
var output2 = document.getElementById("output-wght");
var slider3 = document.getElementById("slider-wdth");
var output3 = document.getElementById("output-wdth");
var icon = document.querySelector(".js-icon");
var sliderTime = slider1.value,
  sliderWidth = slider2.value,
  sliderWeight = slider3.value;
output1.innerHTML = slider1.value;

var settingsString = function(t, wd, wg) {
  return '"TIME" ' + t + ', "wdth" ' + wd + ', "wght" ' + wg + "";
};

icon.style.fontVariationSettings = settingsString(
  sliderTime,
  sliderWeight,
  sliderWidth
);

slider1.oninput = function() {
  sliderTime = this.value;
  icon.style.fontVariationSettings = settingsString(
    sliderTime,
    sliderWeight,
    sliderWidth
  );
  output1.innerHTML = this.value;
};

//Slider value for "wght"

output2.innerHTML = slider2.value;
slider2.oninput = function() {
  sliderWidth = this.value;
  icon.style.fontVariationSettings = settingsString(
    sliderTime,
    sliderWeight,
    sliderWidth
  );
  output2.innerHTML = this.value;
};

//Slider value for "wdth"

output3.innerHTML = slider3.value;

slider3.oninput = function() {
  sliderWeight = this.value;
  icon.style.fontVariationSettings = settingsString(
    sliderTime,
    sliderWeight,
    sliderWidth
  );
  output3.innerHTML = this.value;
};

//    font-variation-settings: "TIME" 0, "wdth" 100, "wght" 30;
