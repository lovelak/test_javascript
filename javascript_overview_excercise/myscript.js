var firstname = prompt("Input Your Firstname : ");
var lastname = prompt("Input Your Lastname : ");
var age = prompt("Input Your age : ");
var tall = prompt("Input Your tall : ");
var pet = prompt("Input Your Pet's name : ");

var nameCon = null;
var ageCon = null;
var tallCon = null;
var patCon = null;

if (firstname[0] === lastname[0]){
  nameCon = true;
} else {
  nameCon = false;
}

if (age > 19 && age < 31){
  ageCon = true;
} else {
  ageCon = false;
}

if (tall >= 170){
  tallCon = true;
} else {
  tallCon = false;
}

if (pet[pet.length-1] === "y"){
  petCon = true;
} else {
  petCon = false;
}

if (nameCon && ageCon && tallCon && petCon) {
  console.log("you are spy");
}





// if ((firstname[0] === lastname[0]) && (age >= 20 && age <= 30) && (tall >= 170) && (pet[pet.length-1] === "y")) {
//   console.log("you are spy");
// } else {
//   console.log("you are not spy");
// }
