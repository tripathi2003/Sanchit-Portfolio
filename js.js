let t = setInterval(function () {
    let ele = document.getElementById('myBlinkingText');
    ele.style.visibility = (ele.style.visibility == 'hidden' ? '' : 'hidden');
}, 1000);

let x = document.getElementById("icon");
function btn() {
    if (x.style.display === "block") {
        x.style.display = "none"
    } else {
        x.style.display = "block"
    }
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const h1Element = document.querySelector("#div1 h1");

let iterations = 0;
let animationIntervalId = null;
let restartTimeoutId = null;

function startAnimation() {
    let animationIntervalId = setInterval(() => {
        h1Element.innerText = h1Element.innerText.split("").map((letter, index) => {
            if (index < iterations) {
                return h1Element.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
        })
            .join("");

        if (iterations >= h1Element.dataset.value.length) {
            clearInterval(animationIntervalId);
            restartTimeoutId = setTimeout(() => {
                iterations = 0;
                startAnimation();
            }, 6000);
        } else {
            iterations += 1 / 3;
        }
    }, 30);
}

startAnimation();

