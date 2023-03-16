const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

buttons.forEach(function (e) {
  e.addEventListener("click", function () {
    if (e.id == "c") {
      display.innerText = "";
    } else if (e.id == "<") {
      let str = display.innerText;
      let hsl = str.substr(0, str.length - 1);
      display.innerText = hsl;
    } else if (e.id == "=") {
      display.innerText = eval(display.innerText);
    } else {
      display.innerText += e.id;
    }
  });
});
