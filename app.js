// document.getElementById('counter').innerText = 4

// let myAge = 23 

// let humanDogRatio = 7

// let myDogAge = myAge * humanDogRatio

// console.log(myDogAge)

// let name = 'Adedeji';
// console.log(name)


//this is for counting in multiples and also for basic arthmetics
// let bonusPoint = 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 50
// console.log(bonusPoint)

// bonusPoint = bonusPoint - 75
// console.log(bonusPoint)

// bonusPoint = bonusPoint + 45
// console.log(bonusPoint)

//function increment() {
//    console.log('thanks for clicking')
//}
function number() {
    console.log(42)
}
number()
let lap1 = 34
let lap2 = 33
let lap3 = 36

function totalLapTime() {
    let laptime = lap1 + lap2 + lap3
    console.log(laptime)
}
totalLapTime()

let lapsCompleted = 0
function laps() {
 lapsCompleted = lapsCompleted + 1
    console.log(lapsCompleted)    
}
laps()
laps()
laps()

let countee = document.getElementById("counter")


let count = 0

function increment() {
    count = count + 1
    countee.innerText = count
    console.log(count)
}
increment()

function save(){
    console.log(count)
}
save()

let savee = document.getElementById("save-btn")
  
  function saveed() {
        console.log('SAVED !!!')
  }
  saveed()
