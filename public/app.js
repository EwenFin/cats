var app = function(){

  // var list = document.createElement("ul");
  // list.classList.add("cat");

  // var listItem1 = document.createElement("li");
  // listItem1.innerText = "Name: Hiero";

  // var listItem2 = document.createElement("li");
  // listItem2.innerText = "Favourite food: Mouse"

  // var picture = document.createElement("li");
  // picture.innerHTML = "<img width='500' src='http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg'>"

  // listItem2.appendChild(picture);
  // listItem1.appendChild(listItem2);
  // list.appendChild(listItem1);
  // var cats = document.querySelector('#cats')
  // cats.appendChild(list)

  addCat("Hiero", "Mouse", "http://www.rd.com/wp-content/uploads/sites/2/2016/02/06-train-cat-shake-hands.jpg")

}
var addCat = function(name, food, pic){
  var catList = createList();
  var catName = createName(name);
  var catFood = createFood(food);
  var catPic = createPic(pic)

  appendCats(catList, catName, catFood, catPic)
}


var createList = function(){
  var list = document.createElement("ul");
  list.classList.add("cat");
  return list;
}

var createName = function(name){
  var catName = document.createElement("li");
  catName.innerText = name;
  return catName;
}

var createFood = function(food){
  var catFood = document.createElement("li");
  catFood.innerText = food;
  return catFood;
}

var createPic = function(link){
  var catPic = document.createElement("li");
  catPic.innerHTML = "<img width='500' src=" + link + ">";
  return catPic;
}

var appendCats = function(list, name, food, link){
  food.appendChild(link);
  name.appendChild(food);
  list.appendChild(name);
  var cats = document.querySelector('#cats');
  cats.appendChild(list);
}

window.onload = app;