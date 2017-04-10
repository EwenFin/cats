var app = function(){

  var list = document.createElement("ul");
  list.classList.add("cat");

  var listItem1 = document.createElement("li");
  listItem1.innerText = "Name: Hiero";

  var listItem2 = document.createElement("li");
  listItem2.innerText = "Favourite food: Mouse"

  var picture = document.createElement("li");
  picture.innerHTML = "<img width='500' src='http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg'>"

  listItem2.appendChild(picture);
  listItem1.appendChild(listItem2);
  list.appendChild(listItem1);
  var cats = document.querySelector('#cats')
  cats.appendChild(list)
}

window.onload = app;