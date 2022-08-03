menuListArray = ["Pizza Vegetariana"];

function getMenu(){
var htmldata= "";
menuListArray.sort();
for(var i= 0; i < menuListArray.lenght; i++){
    htmldata= htmldata + menuListArray[i] + "<br>";
}
document.getElementById("displayMenu").innerHTML= htmldata;
}

function addItem(){
var htmldata= "";
var item= document.getElementById("addItem").value;
var imgTags= "<img id= 'im1' src= 'pizzaImg.png'>";
menuListArray.sort();
for(var i= 0; i < menuListArray.lenght; i++){
    htmldata= htmldata + imgTags + menuListArray[i] + "<br>";
}
document.getElementById("displayAddedMenu").innerHTML= htmldata;
}

function addTop(){
    var item= document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem();
}