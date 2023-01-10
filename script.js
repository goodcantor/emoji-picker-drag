/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("emojipicker").classList.toggle("show");
  document.getElementById("cross").classList.toggle("show");
  // document.getElementById("button").innerHTML = "Close keyboard";

  if (document.getElementById("button").innerHTML == "Add emoji") {
    document.getElementById("button").innerHTML = "Close keyboard";
  } else {
    document.getElementById("button").innerHTML = "Add emoji";
  }
}

function deleteLast() {
  let elems = document.querySelectorAll(".list-group-item"); // проходимся по всем строкам с классом uniqueClass
  let el = elems[elems.length - 1]; // получаем последний
  el.parentNode.removeChild(el); // удаляем последний
}
