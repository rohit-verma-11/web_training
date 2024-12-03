console.log("-------------Welcome to Js-------------")
const title = document.getElementById("title")
console.log(title)
title.innerText = "hii i'm Rohit"
const title2 = document.getElementsByClassName("title2")[0]
title2.innerText="hii i'm Karito"
const boxes = document.getElementsByClassName("box")
for ( i of boxes){
    i.innerText = "Hello World "
}
