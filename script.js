//your JS code here. If required.
let selectitem = document.querySelector("#colorSelect");
let removebtn = document.querySelector("input");

removebtn.addEventListener("click", () => {
  let selectedIndex = selectitem.selectedIndex;

  if (selectedIndex !== -1) {
    let button = selectitem.options[selectedIndex];

    selectitem.remove(selectedIndex);
  }
});
