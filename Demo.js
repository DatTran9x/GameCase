const son = document.getElementById('son');
const Jumbo = document.getElementById('Jumbo');
let point;
let status = false;
let max = parseInt(localStorage.getItem("point"));

function jump() {
    if (son.classList !== "jump") {
        son.classList.add("jump");
    }
    setTimeout(function () {
        son.classList.remove("jump");
    }, 800)
}

document.addEventListener("keydown", function (event) {
    if (event.which === 32) {
        jump();
    }
});

function block() {
    if (point < 20.7) {
        Jumbo.classList.add("block");
    } else {
        if (point < 51) {
            Jumbo.classList.remove('block');
            Jumbo.classList.add("block1");
        } else {
            if (point < 80) {
                Jumbo.classList.remove('block1');
                Jumbo.classList.add("block2");
            } else {
                Jumbo.classList.remove('block2');
                Jumbo.classList.add("block3");
            }
        }
    }
}

function start() {
    if (status !== true) {
        status = true;
        point = 0;
        game();
    }
}

function game() {
    setInterval(run, 1);
}

function run() {
    if (status === true) {
        let sonTop = parseInt(window.getComputedStyle(son).getPropertyValue("top"));
        let JumboLeft = parseInt(window.getComputedStyle(Jumbo).getPropertyValue('left'));
        if (JumboLeft < 180 && JumboLeft > 40 && sonTop >= 230) {
            gameOver();
        } else {
            point += 0.005;
            block();
        }
        document.getElementById("point").innerHTML = point.toFixed(0.5)
    }
}

function gameOver() {
    if (point < 20) {
        alert('Bạn quá gà!!!');
    }
    alert('Sơn đã dính Jumbo Vape!');
    alert("Sơn vô cùng đau khổ!")
    alert("Score : " + point.toFixed(0.5));
    if (max < point) {
        localStorage.setItem("point", point);
    }
    Jumbo.classList.remove('block');
    Jumbo.classList.remove('block1');
    Jumbo.classList.remove('block2');
    Jumbo.classList.remove('block3');
    highScores();
    status = false;
}

function highScores() {
    document.getElementById("highestScores").innerHTML = max.toFixed(0.5)
}

highScores();