export function borderControl(e) {
  const element1 = document.getElementById("btn4");
  const element2 = document.getElementById("btn5");
  const element3 = document.getElementById("btn6");

  element1.addEventListener("click", (e) => {
    element1.classList.add("line");
    element2.classList.remove("line");
    element3.classList.remove("line");
  });

  element2.addEventListener("click", (e) => {
    element1.classList.remove("line");
    element2.classList.add("line");
    element3.classList.remove("line");
  });

  element3.addEventListener("click", (e) => {
    element1.classList.remove("line");
    element2.classList.remove("line");
    element3.classList.add("line");
  });
}
