const inputElements = document.querySelectorAll('[type="range"]');
const range = document.querySelector("#range");

function myFunction() {
  let pageViews = document.querySelector("#subscribers");
  let rate = document.querySelector(".rate");
  let keyValue = document.getElementById("range").value;
  let input = document.getElementById("toggleswitch");
  let viewPricing = {
    8: { price: 8, views: "10K" },
    12: { price: 12, views: "50K" },
    16: { price: 16, views: "100K" },
    24: { price: 24, views: "500K" },
    36: { price: 36, views: "1M" },
  };

  let keys = { 0 : 8, 1 : 12, 2 : 16, 3 : 24, 4 : 36 };

  let key = keys[keyValue];

  if (input.checked == true) {
    document.getElementById("rate").innerHTML = " / year"
    if (key in viewPricing == true) {
      let price = viewPricing[key]["price"];
      let views = viewPricing[key]["views"];
      price = parseInt(price) * 12 * 0.75;
      pageViews.innerHTML = views;
      rate.innerHTML = `\$${price}`;
    }
  } else {
    document.getElementById("rate").innerHTML = " / month"
    if (key in viewPricing == true) {
      let price = viewPricing[key]["price"];
      let views = viewPricing[key]["views"];
      pageViews.innerHTML = views;
      rate.innerHTML = `\$${price}`;
    }
  }
}

function rangeSlide() {
  myFunction();
}

rangeSlide();

// Márk Munkácsi - Styled Range Input - A way out of Range Input nightmare
// (https://dev.to/munkacsimark/styled-range-input-a-way-out-of-range-input-nightmare-jeo)

const handleInput = (inputElement) => {
  let isChanging = false;

  const setCSSProperty = () => {
    const percent =
      ((inputElement.value - inputElement.min) /
        (inputElement.max - inputElement.min)) *
      100;
    inputElement.style.setProperty("--webkitProgressPercent", `${percent}%`);
  };

  // Set event listeners
  const handleMove = () => {
    if (!isChanging) return;
    setCSSProperty();
  };
  const handleUpAndLeave = () => (isChanging = false);
  const handleDown = () => (isChanging = true);

  inputElement.addEventListener("mousemove", handleMove);
  inputElement.addEventListener("mousedown", handleDown);
  inputElement.addEventListener("mouseup", handleUpAndLeave);
  inputElement.addEventListener("mouseleave", handleUpAndLeave);
  inputElement.addEventListener("click", setCSSProperty);

  // Init input
  setCSSProperty();
};

inputElements.forEach(handleInput);
