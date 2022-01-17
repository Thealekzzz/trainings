// function $(str, all = false) {
//     return all ? document.querySelectorAll(str) : document.querySelector(str)
// }


// let startButton = $(".taskBlock > .right > button")


function mouseStartClicked() {
    startButton.classList.toggle("redButton")
    if (inMouseGame) {
        inMouseGame = false

        console.log("Игра закончена");
        clearInterval(timeCounterInterval)
        mouseField.removeChild(circle)

        startButton.innerHTML = "Начать"
    } else {
        inMouseGame = true
        time = 60
        counts = 0
        

        // console.log("Игра началась");
        startButton.innerHTML = "60 секунд"
        scoresText.innerHTML = "0"
        timeCounterInterval = setInterval(updateTime, 1000)
        generateButton()
    }   

}


function updateTime() {
    time -= 1
    startButton.innerHTML = time + " секунд"
    if (time == 0) {
        mouseStartClicked()
        mouseField.removeChild(circle)
    }
}


function generateButton() {
    
    let temp = Math.round(Math.random())
    let cX = Math.round(Math.random() * 880) + 40
    let cY = Math.round(Math.random() * 380) + 40
    // console.log(temp);
    if (temp) {
        requiredClick = "r"
    } else {
        requiredClick = "l"
    }
    circle.classList.add(colors[temp])
    circle.classList.remove(colors[(temp + 1) % 2])
    circle.setAttribute("left", cX + "px")
    circle.style.left = cX + "px"
    circle.style.top = cY + "px"

    mouseField.appendChild(circle)

}


function leftClickOnCircle() {
    // console.log("левый");
    if (requiredClick === "l" & inMouseGame) {
        // console.log("Правильный клик");
        mouseField.removeChild(circle)

        setTimeout(generateButton, timeout);
        counts++
        scoresText.innerHTML = counts

        if (timeout > 200) {
            timeout -= 50

        }

    }
}


function rightClickOnCircle(e) {
    // console.log("правый");
    e.preventDefault()
    
    if (requiredClick === "r" & inMouseGame) {
        // console.log("Правильный клик");
        mouseField.removeChild(circle)

        setTimeout(generateButton, timeout);
        counts++
        scoresText.innerHTML = counts

        if (timeout > 200) {
            timeout -= 50

        }
        
    }
}


let inMouseGame = false
let timeout = 1000
let requiredClick = "left"
let colors = ["red", "blue"]
let timeCounterInterval
let time
let counts

let circle = document.createElement("div")
let mouseField = $(".mouseField")
let scoresText = $(".scores")


circle.classList.add("circle")
circle.addEventListener("click", leftClickOnCircle)
circle.addEventListener("contextmenu", rightClickOnCircle)



startButton.addEventListener("click", mouseStartClicked)