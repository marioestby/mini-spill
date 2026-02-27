const ruter = document.querySelectorAll(".rute");
const brett = document.getElementById("brett");

let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const winnerCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

ruter.forEach((rute, index) => {
    rute.addEventListener("click", () => {
        if (gameOver) return;
        if (board[index] !== "") return;

        board[index] = currentPlayer;
        rute.textContent = currentPlayer;
        rute.style.fontSize = "60px";
        rute.style.fontWeight = "bold";
        rute.style.color = currentPlayer === "X" ? "#08000f" : "#ffffff";

        if (sjekkVinner()) {
            setTimeout(() => {
            }, 100);
            gameOver = true;
            return;
        }

        if (board.every(cell => cell !== "")) {
            setTimeout(() => {
            }, 100);
            gameOver = true;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";
    });
});

function sjekkVinner() {
    return winnerCombos.some(combo => {
        const [a, b, c] = combo;
        return board[a] !== "" && board[a] === board[b] && board[b] === board[c];
    });
}

function resetSpill() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    ruter.forEach(rute => {
        rute.textContent = "";
    });
}
