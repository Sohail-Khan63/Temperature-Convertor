let inputCelsius = document.querySelector("#celsius");
let inputFahrenheit = document.querySelector("#fahrenheit");
let inputKilven = document.querySelector("#Kilven");
let convertBtns = document.querySelectorAll(".convert-btn");
let clearBtn = document.querySelector(".clear-All");

window.addEventListener("DOMContentLoaded", () => {
  convertBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      let celsius = parseFloat(inputCelsius.value);
      let fahrenheit = parseFloat(inputFahrenheit.value);
      let kilven = parseFloat(inputKilven.value);
      let celsiusToFahrenheit = (celsius * 9) / 5 + 32;
      let fahrenhitToCelsius = ((fahrenheit - 32) * 5) / 9;
      let celsiusToKelvin = celsius + 273.15;
      let kelvinToCelsius = kilven - 273.15;
      let fahrenhitToKelvin = ((fahrenheit - 32) * 5) / 9 + 273.15;
      let kelvinToFahrenheit = ((kilven - 273.15) * 9) / 5 + 32;
      const name = btn.getAttribute("name");
      if (name === "celsius-btn" && !isNaN(celsius)) {
        inputFahrenheit.value = celsiusToFahrenheit.toFixed(2);
        inputKilven.value = celsiusToKelvin.toFixed(2);
      }else if(name === "fahrenheit-btn" && !isNaN(fahrenheit)){
        inputCelsius.value = fahrenhitToCelsius.toFixed(2);
        inputKilven.value = fahrenhitToKelvin.toFixed(2);
      }else if(name === "kilven-btn" && !isNaN(kilven)){
        inputCelsius.value = kelvinToCelsius.toFixed(2);
        inputFahrenheit.value = kelvinToFahrenheit.toFixed(2);
      }
    });
  });
});
clearBtn.addEventListener("click",()=>{
  inputCelsius.value = '';
  inputFahrenheit.value = '';
  inputKilven.value = '';
})