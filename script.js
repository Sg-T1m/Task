const InputCheckPrime = document.querySelector(".CheckPrime");
const BtnCheckStart = document.querySelector(".Check");
const Resul = document.querySelector(".Result");
BtnCheckStart.addEventListener("click", transformationArray);

function transformationArray() {
  Resul.innerHTML = "";
  var ValueInput = InputCheckPrime.value;
  var ArrayStr = ValueInput.split(" ");
  checkIsNumber(ArrayStr);
}
function checkIsNumber(Array) {
  Array.forEach((Elem) => {
    if (!isNaN(+Elem)) {
      if (ChecIsPrime(Elem)) {
        ShowPrime(Elem);
      }
    }
  });
}

function ChecIsPrime(Number) {
  for (let i = 2; i < Number; i++) {
    if (Number % i === 0) return false;
  }
  return Number !== 1;
}
function ShowPrime(NumberIsPrime) {
  let TextValue = document.createElement("div");
  TextValue.classList.add("PrimeNumber");
  TextValue.innerHTML = `
    <p> ${NumberIsPrime} </p>`;

  Resul.appendChild(TextValue);
}
