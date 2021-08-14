// Vazifa (yosh)


var yosh = prompt("Yoshingizni kiriting (raqamlarda)")

if (yosh > 0 && yosh <= 18) {
    alert("Yoshsiz. O'qishingiz kerak")
}
else if (yosh > 18 && yosh <= 50) {
    alert("Ishlashingiz kerak")
}
else if (yosh > 50 && yosh <= 59) {
    alert("Yaqinda pensyaga chiqasiz")
}
else if (yosh > 59 && yosh <= 150) {
    alert("Pensiyonerga o'xshaysiz, hali tirik bo'lsangiz :)")
}
else{
    alert("Nimadur noto'g'ri ketib qolgan")
}




// // Vazifa (o'rta qiymat)


alert("Ushta son kiriting! Biz o'rta qiymatni topib beramiz");

var son1 = prompt("1-sonni kiriting");
var son2 = prompt("2-sonni kiriting");
var son3 = prompt("3-sonni kiriting");

if (son1 <= son2 && son1 >= son3 ) {
    alert("O'rta qiymat " + son1)
}
else if (son1 <= son3 && son1 >= son2 ) {
    alert("O'rta qiymat " + son1)
}
else if (son2 <= son1 && son2 >= son3 ) {
    alert("O'rta qiymat " + son2)
}
else if (son2 <= son3 && son2 >= son1 ) {
    alert("O'rta qiymat " + son2)
}
else if (son3 <= son2 && son3 >= son1 ) {
    alert("O'rta qiymat " + son3)
}
else if (son3 <= son1 && son3 >= son2 ) {
    alert("O'rta qiymat " + son3)
}
else{
    alert("nimadur noto'g'ri")
}




// Vazifa (salomlashish)


var ism = "sanjar";

var kiritilganIsm = prompt("Ismingizni kiriting");

if (kiritilganIsm == ism) {
    alert("Hello Boss!")
}
else{
    alert("Hello guest")
}