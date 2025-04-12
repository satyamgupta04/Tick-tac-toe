let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let winnerTag = document.querySelector("#winnertag");

let turno = true;

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turno = true;
    winnerTag.innerText = "";
};

resetBtn.addEventListener("click", resetGame);

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkWinner = () => {
    // First check for winner
    for (let pattern of winPatterns) {
        let a = boxes[pattern[0]];
        let b = boxes[pattern[1]];
        let c = boxes[pattern[2]];
        if (a.innerText !== "" && b.innerText !== "" && c.innerText !== "") {
            if (a.innerText === b.innerText && b.innerText === c.innerText) {
                winnerTag.innerText = `${a.innerText} wins!`;
                return; // Exit if winner found
            }
        }
    }

    // If no winner, check for draw
    let isDraw = true;
    boxes.forEach(box => {
        if (box.innerText === "") {
            isDraw = false;
        }
    });

    if (isDraw) {
        winnerTag.innerText = "It's a draw!"; // Clear draw message
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno) {
            box.innerText = "O";
            turno = false;
        } else {
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
