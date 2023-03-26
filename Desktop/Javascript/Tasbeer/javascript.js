let count = 0 
let saveEL =  document.getElementById("save-el")

let countEL = document.getElementById("counter-el")

function increment() {
    count += 1
    countEL.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEL.innerText += countStr
    
    
    console.log(count)
}

console.log("Lets count our pulling of tasbeeh!")