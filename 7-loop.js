console.log("i m learning Loops");


for(let i=0;i<10;i++){
    if(i==5)
    {
       continue;

    }
    console.log(i);
}

// let j=0;
// while(j<10){
//     console.log(j);
//     j++
// }
// let k=0;
// do{
//     console.log(k)
//     k++

// }while(k<10)



const arr=[1,2,3,4,5,6]
arr.forEach(function(element,array,index){
        console.log(element,array,index);
})

console.log("-----------------------")

const myObj={
    name:"aafaq",
    class:"software engineering",
    model_no:"civic"
}

// myObj.forin(let key in MyObj) {
    
        
//     }


console.log(myObj)
console.log("---------------------------------------------------------------------")
const myJson=JSON.stringify(myObj)
console.log(myJson);




for(let key in myObj){
    console.log(`${key} of the Object is ${myObj[key]}`)

}


