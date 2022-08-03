console.log("we are learning functions");
function greet(name){
    console.log(` Hey Good morning ${name}One sweet good morning message from you can make your loved one’s entire day. Help them kick-start their day with a new spirit by showing your love and care through a good morning text, note, card, or email.`)
    
}
// ---------------------//FIRST METHOD//------------------------//

let a="ali";
let b="khumar"
// console.log(` Hey Good morning ${a} One sweet good morning message from you can make your loved one’s entire day. Help them kick-start their day with a new spirit by showing your love and care through a good morning text, note, card, or email.`)

// console.log(` Hey Good morning ${b} One sweet good morning message from you can make your loved one’s entire day. Help them kick-start their day with a new spirit by showing your love and care through a good morning text, note, card, or email.`)
greet(a);//passing through variable
greet("rehman");//passing direct value 



//-----------------------//Second Method//-----------------//
//return method 
//providing value on function aurgument 

function greet2(name,thank="Thankyou"){
    let msg=(` Hey Good morning ${a}One sweet good morning message from you can make your loved one’s entire day. Help them kick-start their day with a new spirit by showing your love and care through a good morning text, note, card, or email.${thank}`)
    
    return msg;

}

console.log(greet2("ali","Thank u soo much "))
console.log(greet2("gul khan"))



// --------------------------Anonymous Function Or storing function in varibale-----------------//
let sa= function(name){
    console.log(`  Good morning ${name} One sweet good morning message from you can make your loved one’s entire day. Help them kick-start their day with a new spirit by showing your love and care through a good morning text, note, card, or email.`)

}

sa("rahim")

const myObj={
    name:"aafaq",
    game:function(){
        return "GTA";
    }
}

console.log(myObj.game())






