// // console.log("------------Welcome to JS------------");
// // //varaible: var,let,const:

// // document.write("Hello World")
// // let a=5
// // console.log(a)
// // var b=5
// // console.log(b)
// // const c = 10
// // console.log(c)
// // a=9
// // b=9
// // // c=9

// // if (a===5){
// //     console.log("if conditon")
// // }else{
// //     console.log("else")
// // }
// // for(i = 0; i<1;i--){
// //     console.log(i)
// // }
// let n = 6
// for(i = 1; i<=10;i++){
//     console.log(n+" x "+i+" = "+n*i)
// }
// console.log("------------------2------------")
// for (i = 1;i<=100;i++){
//    if (i%3===0){
//     console.log(i)
// }
// }
// console.log("-------------3-------------")
// for (i = 1;i<=100;i++){
//    if (i%3===0 && i%5===0){
//     console.log(i)
//    }
// }
// console.log("-----------4----------")
// for (i = 1;i<=100;i++){
//    if (i%3===0 && i%5===0 || i%7===0){
//     console.log(i)
//    }
// }
// console.log("----------5---------")
// n = 9
// if (n%2===0){
//     console.log("even")
// }else{
//     console.log("odd")
// }
// console.log("--------6--------")
// n = 6
// let sum = 0
// for(i = 1;i<=n;i++){
//     sum+=i
// }
// console.log(sum)
// console.log("----------7--------")
// console.log(sum/n)
// console.log("-----------8---------")
// let j = 1;
// while(j<=12){
//     if (j%2===0){
//         console.log(j)
//     }
//     j++
// }
// while (j<=100){
//     if (j%3==0){
//         console.log("-")
//     } else if(j%5===0){
//         console.log("+")
//     } else if(j%7===0){
//         console.log("/")
//     }
//     j++
// }
// j =100
// while(j>0){
//     console.log(j)
//     j--
// }
n = 1234
count = 0
while(n>0){
    n=parseInt(n/10)
    console.log(n)
    count++
}
console.log(count)
