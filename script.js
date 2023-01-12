/* When the user clicks on the button,
toggle between hiding and showing the emoji keyboard */
function closeEmojiBoard() {
  document.getElementById("emojipicker").classList.toggle("show");
  document.getElementById("cross").classList.toggle("show");

  if (document.getElementById("button").innerHTML == "Add emoji") {
    document.getElementById("button").innerHTML = "Close keyboard";
  } else {
    document.getElementById("button").innerHTML = "Add emoji";
  }
}

/*
When the user clicks on the cross button, delete the last element that has class "list-group-item" (delete last emoji)
*/
function deleteLastEmoji() {
  let elems = document.querySelectorAll(".list-group-item");
  let el = elems[elems.length - 1];
  el.parentNode.removeChild(el);
}

/*
This is Sortable library
Via this lib you can sort emojis and remove it when emoji outside 
*/
const sortTrue = document.querySelector("#sortTrue");

Sortable.create(sortTrue, {
  group: "sorting",
  sort: true,
  removeOnSpill: true,
  onSpill: function (evt) {
    evt.item;
  },
});

/*
This is Emoji-picker-element library
This code takes emoji from emojikeyboard and puts it into div 
*/
document
  .querySelector("emoji-picker")
  .addEventListener("emoji-click", (event) => {
    // console.log(event.detail.unicode);
    let li = document.createElement("div");
    li.className = "list-group-item";
    li.innerHTML = `${event.detail.unicode}`;
    document.querySelector("#sortTrue").append(li);
  });
