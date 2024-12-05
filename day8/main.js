
let newArr = [5,5,6,4,3,5,4,56,4,3]
let count = 0
for (i of newArr){
    if(i%2==0){
        count++
    }
}
console.log(count)
console.log("------------")
newArr = newArr.filter(i=>i!=5)
console.log(newArr)
console.log("------------")
newArr = newArr.map(i=>i+1)
console.log(newArr)
console.log("------------")
newArr = [1,2,3,4,5,7,8,9]
for(let i = 1;i<=newArr.length;i++){
    if (newArr[i]!=i+newArr[0]){
        console.log(`#${newArr[0]+i}`)
        i++
        
    }
}
console.log("------------")
let n = 5;
let sum = 0;
for (let i = 0;i<=n;i++){
    if(i%2!==0){
        sum+=i
    }
}
console.log(sum)
console.log("------------")
newArr = [5,5,6,4,3,5,4,56,4,3]
let l=0,s=0;
for(i of newArr){
    s=i
    if (l<i){
        l=i
    } else if(s>i){
        s=i
    }
}
console.log(l,s)





// Objects
console.log("-------Object-------")
let student_id_card = {
    name:"rohan",
    rollnumber:4553,
    adress:"abc....",
    section:"C",
    course:"B.tech",
    branch:"CSE"
}

for(i of Object.keys(student_id_card)){   //iterate
    console.log(student_id_card[i])
}

student_id_card.result = "pass"//add
student_id_card.id = 999//add
student_id_card.rollnumber = 2554//update
console.log(student_id_card)
delete student_id_card.result //delete
console.log(student_id_card)