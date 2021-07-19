var op, a, b; //выбранный оператор
var correct = new Audio('./assets/sounds/correct.mp3');
var fail = new Audio('./assets/sounds/fail.mp3');
a = getRandomInt(10);
b = getRandomInt(10);

document.getElementById("question").innerHTML = a + ' x ' + b + ' = ';
document.getElementById('num').focus()

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function calc() {
    var question, hs = 0;
    var num = Number(document.getElementById("num").value);
    question = a * b;
    if (question == num) {
        correct.play();
        document.body.style.background = "#58D68D";
        document.getElementById("submit").innerHTML = 'Правильно!';
    } else {
        fail.play();
        document.body.style.background = "#EC7063";
        document.getElementById("submit").innerHTML = 'Неверно!';
    }
    document.getElementById("result").innerHTML = a + ' x ' + b + ' = ' + question;
}

function ref() {
    a = getRandomInt(10);
    b = getRandomInt(10);
    document.getElementById("question").innerHTML = a + ' x ' + b + ' = ';
    document.getElementById("result").innerHTML = 'Сколько будет?';
    document.body.style.background = "#F7DC6F";
    document.getElementById("submit").innerHTML = 'Равно';
    document.getElementById('num').value = '';

}

function valid(e) {
    if (event.keyCode < 48 || event.keyCode > 57)
        event.returnValue = false;
    if (e.key == 13 || e.keyCode == 13) {
        calc();
        return false;
    }
    return true;
}