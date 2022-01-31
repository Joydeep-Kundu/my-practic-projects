function game() {
    alert("you have started the guessing game of numbers... press 'q' to quit the game")
    let maximum = prompt("enter your maximum number!");
    if (maximum != 'q') {
        maximum = parseInt(maximum);
        while (!maximum) {
            maximum = parseInt(prompt("enter your vaild number!"));
        }
        let b = Math.floor(Math.random() * maximum + 1);
        console.log(b);
        let a = 0;
        let i = 1;
        let quit = 0;
        a = prompt("enter your guess");
        while (parseInt(a) !== b) {
            i++;
            if (a === 'q') {
                quit = 1;
                break;
            }
            else if (parseInt(a) > b) {
                a = (prompt("too high!!! enter your guess again"));
            }
            else if (parseInt(a) < b) {
                a = (prompt("too low!!! enter your guess again"));
            }
            else {

                a = prompt('enter a vailid number guess');
            }
        }
        if (quit === 0) {
            alert(`you got it in ${i} try`);
        }
    }
    if (quit === 1) {
        alert("you have quited the game");
    }
}
