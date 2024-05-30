document.addEventListener("DOMContentLoaded", function () {
  let toggle = "celsius";
  const toggleSelector = document.getElementById("temperature-select");

  toggleSelector.addEventListener("change", function () {
    if (toggle === "celsius") {
      toggle = "fahrenheit";
    } else {
      toggle = "celsius";
    }
  });
  const form = document.getElementById("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const tempInput = document.getElementById("celsius").value;
    const result = document.getElementById("result");

    if (toggle === "celsius") {
      result.textContent = `Temperature in Fahrenheit: ${
        Number(tempInput) + 32
      }`;
    } else {
      result.textContent = `Temperature in Celsius: ${Number(tempInput) - 32}`;
    }
  });
});
