const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let mainButton = document.getElementById("main-btn")
let lowerBtn1 = document.getElementById("lower-btn1")
let lowerBtn2 = document.getElementById("lower-btn2")

mainButton.addEventListener("click", renderPasswords)
function renderPasswords(){
    let temp1 = generatePW()
    lowerBtn1.textContent = temp1
    let temp2 = generatePW()
    lowerBtn2.textContent = temp2
}

function generatePW(){
    let tempPW = ""
    for(let i = 0; i < 15; i++){
        tempPW += characters[Math.floor(Math.random()*characters.length)]
    }
    return tempPW
}





