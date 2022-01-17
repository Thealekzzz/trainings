function $(str, all = false) {
    return all ? document.querySelectorAll(str) : document.querySelector(str)
}

function anyKeyPressed(event) {
    // console.log(event.key);
    if (event.key === rightText[0]) {
        console.log("Введена верная буква");

        leftText += event.key
        rightText = rightText.substr(1)
        counter++

        leftTextDiv.innerHTML = leftText
        rightTextDiv.innerHTML = rightText
    } else {
        console.log("Неверная буква");
    }

}

function startButtonPressed() {
    if (inWork) {
        // Нажата кнопка пока был активен набор текста
        inWork = false
        document.removeEventListener("keydown", anyKeyPressed)
        console.log("Конец");

    } else {
        // Нажата кнопка в неактивном режиме
        inWork = true

        document.addEventListener("keydown", anyKeyPressed)
        console.log("Начало");
        startButton.blur()

        counter = 0
        rightText = texts[0]
        leftTextDiv.innerHTML = leftText
        rightTextDiv.innerHTML = rightText

    }
}

// let counter = 0
// leftText = "" // В переменной хранится текст, который уже написан
// rightText = "" // В переменной хранится текст, который еще надо написать
// let text = ""

// let inWork = false
// let texts = ["А что подумал по этому поводу Кролик, никто так и не узнал, потому что Кролик был очень воспитанный.",
// "Когда человеку семнадцать, он знает все. Если ему двадцать семь и он по-прежнему знает все - значит, ему все еще семнадцать."]

// let leftTextDiv = $(".leftText")
// let rightTextDiv = $(".rightText")
let startButton = $(".taskBlock > .right > button")


// startButton.addEventListener("click", startButtonPressed)


