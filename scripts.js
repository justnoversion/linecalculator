document.querySelector(".submit-btn").addEventListener("click", function () {
  // get the inputs in variable
  const x1 = parseInt(document.querySelector("#X1").value);
  const x2 = parseInt(document.querySelector("#X2").value);
  const y1 = parseInt(document.querySelector("#Y1").value);
  const y2 = parseInt(document.querySelector("#Y2").value);
  // do the math
  const m = (y2 - y1) / (x2 - x1);
  const b = (y2 * (x2 - x1) - x2 * (y2 - y1)) / (x2 - x1);
  // show input
  document.querySelector("#answer").textContent =
    "y=" + m + "*" + "x" + "+" + b;
});

document.querySelector(".submit-btn1").addEventListener("click", function () {
  const opposite = parseInt(document.querySelector("#opposite").value);
  const adjacent = parseInt(document.querySelector("#adjacent").value);

  const tangent = opposite / adjacent;

  console.log(tangent);
  document.querySelector("#answer1").textContent =
    (Math.atan(tangent) * 180) / Math.PI;
});

document.querySelector(".submit-btn2").addEventListener("click", function () {
  const added = document.querySelector("#inputs").value;
  const str = added;
  const strCopy = str.split(",");
  let final = 0;

  for (const item of strCopy) {

   
    final += parseInt (item);
  }
  document.querySelector("#answer2").textContent = final;
});


