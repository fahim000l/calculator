

// function getAndSetButton(btnId) {
//     let buttonId = btnId;
//     document.getElementById(buttonId).addEventListener('click', function (buttonId) {
//         let typingDisplay = document.getElementById('typing-display').innerText;

//         typingDisplay = document.getElementById(btnId).innerText;
//     })
// }

// getAndSetButton('1');

function Typing(btnId) {
    let typingDisplay = document.getElementById('typing-display').innerText;
    let buttonId = document.getElementById(btnId).innerText;

    if (btnId == 'ac') {
        document.getElementById('typing-display').innerText = '';
        document.getElementById('result-display').innerText = '';
    }
    else if (btnId == '=') {

        if (typingDisplay.includes('+')) {
            if (typingDisplay.includes('-') || typingDisplay.includes('X') || typingDisplay.includes('/') || typingDisplay.includes('%')) {
                alert('you cannot put multiple operators in an operation.');
                return;
            }
            else {
                let strs = typingDisplay.split('+', 2);

                // document.getElementById('typing-display').innerText = '';

                let operant1 = parseFloat(strs[0]);
                let operant2 = parseFloat(strs[1]);

                let sum = operant1 + operant2;

                document.getElementById('result-display').innerText = sum;
            }
        }
        else if (typingDisplay.includes('-')) {
            if (typingDisplay.includes('+') || typingDisplay.includes('X') || typingDisplay.includes('/') || typingDisplay.includes('%')) {
                alert('you cannot put multiple operators in an operation.');
                return;
            }
            else {
                let strs = typingDisplay.split('-', 2);

                // document.getElementById('typing-display').innerText = '';

                let operant1 = parseFloat(strs[0]);
                let operant2 = parseFloat(strs[1]);

                let sub = operant1 - operant2;

                document.getElementById('result-display').innerText = sub;
            }
        }
        else if (typingDisplay.includes('X')) {
            if (typingDisplay.includes('+') || typingDisplay.includes('-') || typingDisplay.includes('/') || typingDisplay.includes('%')) {
                alert('you cannot put multiple operators in an operation.');
                return;
            }
            else {
                let strs = typingDisplay.split('X', 2);

                // document.getElementById('result-display').innerText = 1;

                let operant1 = parseFloat(strs[0]);
                let operant2 = parseFloat(strs[1]);

                let mul = operant1 * operant2;

                document.getElementById('result-display').innerText = mul;
                // console.log(mul);
            }
        }
        else if (typingDisplay.includes('/')) {
            if (typingDisplay.includes('+') || typingDisplay.includes('-') || typingDisplay.includes('X') || typingDisplay.includes('%')) {
                alert('you cannot put multiple operators in an operation.');
                return;
            }
            else {
                let strs = typingDisplay.split('/', 2);

                // document.getElementById('result-display').innerText = 1;

                let operant1 = parseFloat(strs[0]);
                let operant2 = parseFloat(strs[1]);

                let div = operant1 / operant2;

                document.getElementById('result-display').innerText = div;
                // console.log(mul);
            }
        }
        else if (typingDisplay.includes('%')) {
            if (typingDisplay.includes('+') || typingDisplay.includes('-') || typingDisplay.includes('X') || typingDisplay.includes('/')) {
                alert('you cannot put multiple operators in an operation.');
                return;
            }
            else {
                let strs = typingDisplay.split('%', 2);

                // document.getElementById('result-display').innerText = 1;

                let operant1 = parseFloat(strs[0]);
                let operant2 = parseFloat(strs[1]);

                let mod = operant1 % operant2;

                document.getElementById('result-display').innerText = mod;
                // console.log(mul);
            }
        }

    }
    else if (btnId == 'back') {
        typingDisplay = typingDisplay.slice(0, - 1);

        document.getElementById('typing-display').innerText = typingDisplay;
        // console.log(typingDisplay);
    }
    else {

        // document.getElementById('typing-display').innerText = '';
        // document.getElementById('result-display').innerText = '';

        typingDisplay = typingDisplay + buttonId;

        document.getElementById('typing-display').innerText = typingDisplay;
    }




}

// function AC() {
//     document.getElementById('Typing-display').innerText = 00;
//     document.getElementById('result-display').innerText = 00;
// }


// document.getElementsByClassName('function').addEventListener('click', function () {
//     document.getElementById('typing-display').innerText = document.getElementsByClassName('function').innerText;
// })


// document.getElementById('typing-display').addEventListener('')

