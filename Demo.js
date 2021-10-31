const son = document.getElementById('son');
const jumbo = document.getElementById('jumbo');
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
        jumbo.classList.add("block");
    } else {
        if (point < 51) {
            jumbo.classList.remove('block');
            jumbo.classList.add("block1");
        } else {
            if (point < 80) {
                jumbo.classList.remove('block1');
                jumbo.classList.add("block2");
            } else {
                jumbo.classList.remove('block2');
                jumbo.classList.add("block3");
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
        let jumboLeft = parseInt(window.getComputedStyle(jumbo).getPropertyValue('left'));
        if (jumboLeft < 180 && jumboLeft > 40 && sonTop >= 230) {
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
    alert('Sơn đã dính jumbo Vape!');
    alert("Sơn vô cùng đau khổ!")
    alert("Score : " + point.toFixed(0.5));
    if (max < point) {
        localStorage.setItem("point", point);
    }
    jumbo.classList.remove('block');
    jumbo.classList.remove('block1');
    jumbo.classList.remove('block2');
    jumbo.classList.remove('block3');
    highScores();
    status = false;
}

function highScores() {
    document.getElementById("highestScores").innerHTML = max.toFixed(0.5)
}

highScores();