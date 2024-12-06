// const sum = (a,b)=>{
//     console.log(a+b)
// }
// const display = document.getElementById("display")
// let count = 0
// const add = ()=>{
//     display.innerHTML = `<p>${++count}</p>`
// } 
// const sub = ()=>{
//     display.innerHTML = `<p>${--count}</p>`
// } 

const a = 5
const b = 9
console.log("--------value of a--------:",a)
try{
    a = 6
    console.log("-----------value of a-----------:",a)
}catch (error){
    console.log(error)
}
console.log("--------value of b--------:",b)
function myPromisefun(res,rej){
    let delay = 100000
    while (delay--){
        rej("Hello World")
    }
}
function solve(fun1,fun2){
    //code...
    let n = 9999999999
    while(n--);
    fun2("")
}
const myPromise =new Promise(solve);

console.log(myPromise)