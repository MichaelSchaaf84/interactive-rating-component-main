document.getElementById("subBtn").addEventListener("click", submit);

function submit() {
  getRadioValue();
  showThanks();
}
function getRadioValue() {
  let val = document.querySelector('input[name="toggleRadio"]:checked').value;
  console.log(val);
  if (val == null) {
    console.log("error");
  }
  document.querySelector(
    ".sel"
  ).innerHTML = `<p>You selected ${val} out of 5</p>`;
}
function showThanks(val) {
  document.querySelector(".card.two").style.display = "block";
  document.querySelector(".card").style.display = "none";
  console.log(val);
}
